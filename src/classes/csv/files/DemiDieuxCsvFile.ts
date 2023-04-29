import { CsvFile } from "../CsvFile";
import { DemiDieuCsvRecord, DemiDieuCsvObject } from "../records/DemiDieuCsvRecord";

class DemiDieuxCsvFile extends CsvFile<DemiDieuCsvRecord, DemiDieuCsvObject, 2> {
	constructor() {
		super("demi_dieux", DemiDieuCsvRecord, 2);
	}

	public get gods(): string[] {
		return this.__RECORDS.map((e) => e.parentGodName);
	}
}

export { DemiDieuxCsvFile };
