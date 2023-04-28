import { CsvFile } from "../CsvFile";
import { MoisCsvRecord, MoisCsvObject } from "../records/MoisCsvRecord";

class MoisCsvFile extends CsvFile<MoisCsvRecord, MoisCsvObject, 2> {
	constructor() {
		super("mois", MoisCsvRecord, 2);
	}
}

export { MoisCsvFile };
