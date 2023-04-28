import { CsvFile } from "../CsvFile";
import { DemiDieuCsvRecord } from "../records/DemiDieuCsvRecord";


class DemiDieuxCsvFile extends CsvFile<DemiDieuCsvRecord> {
	private static readonly __SIZE: 2 = 2

	constructor() {
		super("demi_dieux", DemiDieuCsvRecord, DemiDieuxCsvFile.__SIZE);
	}
}

export { DemiDieuxCsvFile };
