import * as path from "path";
import * as fs from "fs";
import { CsvRecord } from "./CsvRecord";

abstract class CsvFile<R extends CsvRecord> {
	private static readonly __PATH_TO_CSV_FILES = path.resolve(process.cwd(), "src/assets/csv");
	private readonly __RECORDS: R[];

	constructor(
		fileName: string,
		recordConstructor: new (...args: ConstructorParameters<typeof CsvRecord>) => R,
		expectedDataLength: number,
		fileContainsColumnTitles: boolean = true,
		separator: string = ",",
	) {
		const FILE_PATH = path.resolve(CsvFile.__PATH_TO_CSV_FILES, `${fileName}.csv`);

		if (!fs.existsSync(FILE_PATH)) {
			throw Error(`File ${FILE_PATH} not found`);
		}

		const RAW_DATA = fs.readFileSync(FILE_PATH).toString();
		const PER_LINE_DATA = RAW_DATA.split("\n");

		this.__RECORDS = PER_LINE_DATA.slice(fileContainsColumnTitles ? 1 : 0).map(
			(line, i) => new recordConstructor(fileName, i, line, expectedDataLength, separator),
		);
		console.log(`${fileName} loaded.`);
	}
}

export { CsvFile };
