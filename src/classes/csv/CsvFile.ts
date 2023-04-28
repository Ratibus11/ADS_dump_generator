import * as path from "path";
import * as fs from "fs";
import { CsvRecord } from "./CsvRecord";

abstract class CsvFile<R extends CsvRecord<S, O>, O extends Object, S extends number> {
	private static readonly __PATH_TO_CSV_FILES = path.resolve(process.cwd(), "src/assets");
	private static readonly __PATH_TO_CSV_INPUTS = path.resolve(this.__PATH_TO_CSV_FILES, "source");
	private static readonly __PATH_TO_JSON_INPUTS = path.resolve(this.__PATH_TO_CSV_FILES, "tmp");
	private static readonly __RECORDS_LIMIT = 10;

	private readonly fileName;
	protected readonly __RECORDS: R[];

	constructor(
		fileName: string,
		recordConstructor: new (...args: ConstructorParameters<typeof CsvRecord>) => R,
		dataSize: S,
		fileContainsColumnTitles: boolean = true,
		separator: string = ",",
	) {
		this.fileName = fileName;
		const FILE_PATH = path.resolve(CsvFile.__PATH_TO_CSV_INPUTS, `${fileName}.csv`);

		if (!fs.existsSync(FILE_PATH)) {
			throw Error(`File ${FILE_PATH} not found`);
		}

		const RAW_DATA = fs.readFileSync(FILE_PATH).toString();
		const PER_LINE_DATA = RAW_DATA.split("\n");

		this.__RECORDS = PER_LINE_DATA.slice(fileContainsColumnTitles ? 1 : 0, CsvFile.__RECORDS_LIMIT).map(
			(line, i) => new recordConstructor(fileName, i, line, dataSize, separator),
		);
		console.log(`${fileName} loaded.`);
	}

	public saveInoutAsJson(): void {
		const JsonRecords = this.__RECORDS.map((record) => record.toJson());

		if (JsonRecords.length > CsvFile.__RECORDS_LIMIT) {
			JsonRecords.length = CsvFile.__RECORDS_LIMIT;
		}

		fs.writeFileSync(
			path.resolve(CsvFile.__PATH_TO_JSON_INPUTS, `${this.fileName}.json`),
			`[${JsonRecords.join(",")}]`,
		);
	}
}

export { CsvFile };
