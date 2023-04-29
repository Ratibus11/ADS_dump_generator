import { CsvRecord } from "../CsvRecord";

type GuerreCsvObject = {
	region_name: string;
	city_name: string | null;
	wars: { year: number; god_name: string | null }[];
};

class GuerreCsvRecord extends CsvRecord<2, GuerreCsvObject> {
	private readonly __regionName: string;
	private readonly __cityName: string | null;
	private readonly __wars: ([number, string] | number)[];

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		[this.__regionName, this.__cityName] = this.__cleanLocation();
		this.__wars = this.__cleanWars();
	}

	private __cleanLocation(): [string, string | null] {
		const data = this.data[0].trim().split(" - ");
		if (data.length > 1) {
			return [data[0].toUpperCase(), data[1].toUpperCase()];
		} else {
			return [data[0].toUpperCase(), null];
		}
	}

	private __cleanWars(): typeof this.__wars {
		const PER_WAR = this.data[1].replaceAll('"', "").split(";");

		return PER_WAR.filter((war) => war != "").map((war) => {
			war = war.trim();

			if (war.includes("(")) {
				var [year, province] = war.split(" (");
				province = province.replaceAll(")", "");
				return [Number.parseInt(year), province.toUpperCase()];
			} else {
				return Number.parseInt(war);
			}
		});
	}

	public toObject(): GuerreCsvObject {
		return {
			region_name: this.__regionName.toUpperCase(),
			city_name: this.__cityName?.toUpperCase() ?? null,
			wars: this.__wars.map((war) => {
				if (Array.isArray(war)) {
					return {
						year: war[0],
						god_name: war[1].toUpperCase(),
					};
				} else {
					return {
						year: war,
						god_name: null,
					};
				}
			}),
		};
	}
}

export { GuerreCsvRecord, GuerreCsvObject };
