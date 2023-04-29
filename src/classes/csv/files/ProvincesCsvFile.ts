import { CsvFile } from "../CsvFile";
import { ProvinceCsvRecord, ProvinceCsvObject } from "../records/ProvinceCsvRecord";

class ProvincesCsvFile extends CsvFile<ProvinceCsvRecord, ProvinceCsvObject, 2> {
	constructor() {
		super("provinces", ProvinceCsvRecord, 2);
	}

	public get regionNames(): string[] {
		return this.__RECORDS.map((e) => e.regionName);
	}
}

export { ProvincesCsvFile };
