import { CsvRecord } from "../CsvRecord";

type MonnaieCsvObject = { name: string; unit: string; value_with_minimum_unit: number };

class MonnaieCsvRecord extends CsvRecord<3, MonnaieCsvObject> {
	private readonly __name: string;
	private readonly __convertionToMinimum: number;
	private readonly __unit: string;

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		this.__name = this.__cleanName();
		this.__convertionToMinimum = this.__cleanConvertionToMinimum();
		this.__unit = this.__cleanUnit();
	}

	private __cleanName(): typeof this.__name {
		return this.data[0].trim().toUpperCase();
	}

	private __cleanConvertionToMinimum(): typeof this.__convertionToMinimum {
		return Number.parseInt(this.data[1].replace('"', "").trim());
	}

	private __cleanUnit(): typeof this.__unit {
		return this.data[2].trim().toUpperCase();
	}

	public toObject(): MonnaieCsvObject {
		return {
			name: this.__name,
			unit: this.__unit,
			value_with_minimum_unit: this.__convertionToMinimum,
		};
	}

	public get unit(): typeof this.__unit {
		return this.__unit;
	}

	public get convertionToMinimum(): typeof this.__convertionToMinimum {
		return this.__convertionToMinimum;
	}
}

export { MonnaieCsvRecord, MonnaieCsvObject };
