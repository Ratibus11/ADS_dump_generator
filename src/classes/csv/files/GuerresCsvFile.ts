import { CsvFile } from "../CsvFile";
import { GuerreCsvRecord, GuerreCsvObject } from "../records/GuerreCsvRecord";

class GuerresCsvFile extends CsvFile<GuerreCsvRecord, GuerreCsvObject, 2> {
	constructor() {
		super("guerres", GuerreCsvRecord, 2);
	}
}

export { GuerresCsvFile };
