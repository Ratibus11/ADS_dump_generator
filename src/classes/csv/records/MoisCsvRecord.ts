import { CsvRecord } from "../CsvRecord";

type MoisCsvObject = { name: string; god_name: string };

class MoisCsvRecord extends CsvRecord<2, MoisCsvObject> {
	private readonly __name: string;
	private readonly __godName: string;

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		this.__name = this.__cleanMonthName();
		this.__godName = this.__cleanGodName();
	}

	private __cleanMonthName(): typeof this.__name {
		return this.data[0].trim().toUpperCase();
	}

	private __cleanGodName(): typeof this.__godName {
		return this.data[1].trim().toUpperCase();
	}

	public toObject(): MoisCsvObject {
		return {
			name: this.__name,
			god_name: this.__godName,
		};
	}

	public get name(): typeof this.__name {
		return this.__name;
	}
}

export { MoisCsvRecord, MoisCsvObject };
