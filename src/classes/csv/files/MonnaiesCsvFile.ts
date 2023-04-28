import { CsvFile } from "../CsvFile";
import { MonnaieCsvRecord, MonnaieCsvObject } from "../records/MonnaieCsvRecord";

class MonnaiesCsvFile extends CsvFile<MonnaieCsvRecord, MonnaieCsvObject, 3> {
	constructor() {
		super("monnaies", MonnaieCsvRecord, 3);
	}
}

export { MonnaiesCsvFile };
