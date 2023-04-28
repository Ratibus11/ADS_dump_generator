import { CsvFile } from "../CsvFile";
import { GuerreCsvRecord } from "../records/GuerreCsvRecord";

class GuerresCsvFile extends CsvFile<GuerreCsvRecord> {
	constructor() {
		super("guerres", GuerreCsvRecord, 2);
	}
}

export { GuerresCsvFile };
