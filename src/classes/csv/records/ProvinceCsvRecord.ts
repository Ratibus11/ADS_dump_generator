import { CsvRecord } from "../CsvRecord";

type ProvinceCsvObject = {
	region_name: string;
	city_name: string | null;
};

class ProvinceCsvRecord extends CsvRecord<2, ProvinceCsvObject> {
	private readonly __regionName: string;
	private readonly __cityName: string | null;

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		this.__regionName = this.__cleanRegionName();
		this.__cityName = this.__cleanCityName();
	}

	private __cleanRegionName(): typeof this.__regionName {
		return this.data[0].trim();
	}

	private __cleanCityName(): typeof this.__cityName {
		const cityName = this.data[1].trim();
		return cityName == "" ? null : cityName;
	}

	public toObject(): ProvinceCsvObject {
		return {
			region_name: this.__regionName,
			city_name: this.__cityName,
		};
	}
}

export { ProvinceCsvRecord, ProvinceCsvObject };
