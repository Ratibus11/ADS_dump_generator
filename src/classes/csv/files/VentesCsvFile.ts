import { CsvFile } from "../CsvFile";
import { VenteCsvRecord } from "../records/VenteCsvRecord";

class VentesCsvFile extends CsvFile<VenteCsvRecord> {
	constructor() {
		super("ventes", VenteCsvRecord, 10,);
	}
}

export { VentesCsvFile };
