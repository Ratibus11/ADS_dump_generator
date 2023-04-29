import { CsvFile } from "../CsvFile";
import { MonnaieCsvRecord, MonnaieCsvObject } from "../records/MonnaieCsvRecord";

class MonnaiesCsvFile extends CsvFile<MonnaieCsvRecord, MonnaieCsvObject, 3> {
	constructor() {
		super("monnaies", MonnaieCsvRecord, 3);
	}

	public get units(): string[] {
		return this.__RECORDS.map((e) => e.unit);
	}

	public get convertionsToMinimum(): number[] {
		return this.__RECORDS.map((e) => e.convertionToMinimum);
	}
}

export { MonnaiesCsvFile };
