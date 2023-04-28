import { CsvFile } from "../CsvFile";
import { ProvinceCsvRecord } from "../records/ProvinceCsvRecord";

class ProvincesCsvFile extends CsvFile<ProvinceCsvRecord> {
	constructor() {
		super("provinces", ProvinceCsvRecord, 2, false);
	}
}

export { ProvincesCsvFile };
