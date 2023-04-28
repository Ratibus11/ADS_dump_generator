import { CsvFile } from "../CsvFile";
import { MoisCsvRecord } from "../records/MoisCsvRecord";

class MoisCsvFile extends CsvFile<MoisCsvRecord> {
	constructor() {
		super("mois", MoisCsvRecord, 2);
	}
}

export { MoisCsvFile };
