import { CsvFile } from "../CsvFile";
import { MonnaieCsvRecord } from "../records/MonnaieCsvRecord";

class MonnaiesCsvFile extends CsvFile<MonnaieCsvRecord> {
	constructor() {
		super("monnaies", MonnaieCsvRecord, 3);
	}
}

export { MonnaiesCsvFile };
