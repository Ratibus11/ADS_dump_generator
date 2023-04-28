import { CsvFile } from "../CsvFile";
import { VenteCsvRecord, VenteCsvObject } from "../records/VenteCsvRecord";

class VentesCsvFile extends CsvFile<VenteCsvRecord, VenteCsvObject, 10> {
	constructor() {
		super("ventes", VenteCsvRecord, 10, false);
	}
}

export { VentesCsvFile };
