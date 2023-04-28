import { CsvFile } from "../CsvFile";
import { ProvinceCsvRecord, ProvinceCsvObject } from "../records/ProvinceCsvRecord";

class ProvincesCsvFile extends CsvFile<ProvinceCsvRecord, ProvinceCsvObject, 2> {
	constructor() {
		super("provinces", ProvinceCsvRecord, 2);
	}
}

export { ProvincesCsvFile };
