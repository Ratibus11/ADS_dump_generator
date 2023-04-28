import { CsvRecord } from "../CsvRecord";

type VenteCsvObject = {
	date: [number, string, number];
	object_name: string;
	makers_name: string[];
	decorations_name: string[];
	powers_name: string[];
	region_name: string;
	city_name: string | null;
	paied: {
		gold: number;
		silver: number;
		iron: number;
	};
	quantity: number;
};

class VenteCsvRecord extends CsvRecord<10, VenteCsvObject> {
	private readonly __date: [number, string, number];
	private readonly __objectName: string;
	private readonly __makersName: string[];
	private readonly __decorationsName: string[];
	private readonly __powersName: string[];
	private readonly __regionName: string;
	private readonly __cityName: string | null;
	private readonly __paiedGoldQuantity: number;
	private readonly __paiedSilverQuantity: number;
	private readonly __paiedIronQuantity: number;
	private readonly __orderedQuantity: number;

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		this.__date = this.__cleanDate();
		this.__objectName = this.__cleanObjectName();
		this.__makersName = this.__cleanMakersName();
		this.__decorationsName = this.__cleanDecorations();
		this.__powersName = this.__cleanPowers();
		[this.__regionName, this.__cityName] = this.__cleanLocation();
		this.__paiedGoldQuantity = this.__cleanPaiedGoldQuantity();
		this.__paiedSilverQuantity = this.__cleanPaiedSilverQuantity();
		this.__paiedIronQuantity = this.__cleanPaiedIronQuantity();
		this.__orderedQuantity = this.__cleanOrderedQuantity();
	}

	private __cleanDate(): typeof this.__date {
		let [day, month, year] = this.data[0].split(" ").filter((e) => e != "");
		return [Number.parseInt(day), month, Number.parseInt(year)];
	}

	private __cleanObjectName(): typeof this.__objectName {
		return this.data[1].trim();
	}

	private __cleanMakersName(): typeof this.__makersName {
		return this.data[2].split(" & ");
	}

	private __cleanDecorations(): typeof this.__decorationsName {
		return this.data[3].split(" & ");
	}

	private __cleanPowers(): typeof this.__powersName {
		return this.data[4].split(" & ");
	}

	private __cleanLocation(): [string, string | null] {
		const data = this.data[5].trim().split(" - ");
		if (data.length > 1) {
			return [data[0], data[1]];
		} else {
			return [data[0], null];
		}
	}

	private __cleanPaiedGoldQuantity(): typeof this.__paiedGoldQuantity {
		return Number.parseInt(this.data[6].trim());
	}

	private __cleanPaiedSilverQuantity(): typeof this.__paiedSilverQuantity {
		return Number.parseInt(this.data[7].trim());
	}

	private __cleanPaiedIronQuantity(): typeof this.__paiedIronQuantity {
		return Number.parseInt(this.data[8].trim());
	}

	private __cleanOrderedQuantity(): typeof this.__orderedQuantity {
		return Number.parseInt(this.data[9].trim());
	}

	public toObject(): VenteCsvObject {
		return {
			date: this.__date,
			object_name: this.__objectName,
			makers_name: this.__makersName,
			decorations_name: this.__decorationsName,
			powers_name: this.__powersName,
			region_name: this.__regionName,
			city_name: this.__cityName,
			paied: {
				gold: this.__paiedGoldQuantity,
				silver: this.__paiedSilverQuantity,
				iron: this.__paiedIronQuantity,
			},
			quantity: this.__orderedQuantity,
		};
	}
}

export { VenteCsvRecord, VenteCsvObject };
