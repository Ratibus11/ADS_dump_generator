import * as path from "path";
import * as fs from "fs";

import { CsvRecord } from "./CsvRecord";
import { Path } from "../../utils/Path/Path";

abstract class CsvFile<R extends CsvRecord<S, O>, O extends Object, S extends number> {
	private static readonly __PATH_TO_INPUTS = path.resolve(Path.pathToJson, "sources");
	private static readonly __PATH_TO_OUTPUT = path.resolve(Path.pathToJson, "tmp/sources");
	private static readonly __JSON_LIMIT: number = 1000;

	private readonly fileName: string;
	protected readonly __RECORDS: R[];

	constructor(
		fileName: string,
		recordConstructor: new (...args: ConstructorParameters<typeof CsvRecord>) => R,
		dataSize: S,
		fileContainsColumnTitles: boolean = true,
		separator: string = ",",
	) {
		this.fileName = fileName;
		const FILE_PATH = path.resolve(CsvFile.__PATH_TO_INPUTS, `${fileName}.csv`);

		if (!fs.existsSync(FILE_PATH)) {
			throw Error(`File ${FILE_PATH} not found`);
		}

		const RAW_DATA = fs.readFileSync(FILE_PATH).toString();
		const PER_LINE_DATA = RAW_DATA.split("\n");

		this.__RECORDS = PER_LINE_DATA.slice(fileContainsColumnTitles ? 1 : 0).map(
			(line, i) => new recordConstructor(fileName, i, line, dataSize, separator),
		);
		console.log(`${fileName} loaded.`);
	}

	public get records(): R[] {
		return this.__RECORDS;
	}

	public saveAsJson(): void {
		const filePath = path.resolve(CsvFile.__PATH_TO_OUTPUT, `${this.fileName}.json`);

		fs.writeFileSync(filePath, "[");

		const toOutput = this.__RECORDS.slice(0, CsvFile.__JSON_LIMIT);
		toOutput.forEach((record, i) => {
			fs.appendFileSync(filePath, record.toJson());

			if (i < this.__RECORDS.length - 1) {
				fs.appendFileSync(filePath, ",", {});
			}
		});

		fs.appendFileSync(filePath, "]");
		console.log(`${path.basename(path.dirname(filePath))} writed.`);
	}
}

export { CsvFile };
