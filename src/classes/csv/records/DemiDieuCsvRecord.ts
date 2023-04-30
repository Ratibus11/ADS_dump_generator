import { CsvRecord } from "../CsvRecord";

type DemiDieuCsvObject = { name: string; parent_name: string };

class DemiDieuCsvRecord extends CsvRecord<2, DemiDieuCsvObject> {
	private readonly __name: string;
	private readonly __parentGodName: string;

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		this.__name = this.__cleanName();
		this.__parentGodName = this.__cleanParentGodName();
	}

	private __cleanName(): typeof this.__name {
		return this.data[0].replaceAll(" ", "").toUpperCase();
	}

	private __cleanParentGodName(): typeof this.__parentGodName {
		return this.data[1].replaceAll('"', "").trim().toUpperCase();
	}

	public toObject(): DemiDieuCsvObject {
		return {
			name: this.__name,
			parent_name: this.__parentGodName,
		};
	}

	public get parentGodName(): typeof this.__parentGodName {
		return this.__parentGodName;
	}
}

export { DemiDieuCsvRecord, DemiDieuCsvObject };
