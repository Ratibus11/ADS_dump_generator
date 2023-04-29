import { EntityRecord } from "../EntityRecord";

type MonnaieEntityObject = { id: number; unit: string; convertion_to_minimum: number };

class MonnaieEntityRecord extends EntityRecord<MonnaieEntityObject> {
	private static __auto_increment: number = 0;

	private readonly __id: number;
	private readonly __unit: string;
	private readonly __convertionToMinimum: number;

	constructor(unit: string, convertion_to_minimum: number) {
		super();
		this.__id = MonnaieEntityRecord.__auto_increment++;
		this.__unit = unit;
		this.__convertionToMinimum = convertion_to_minimum;
	}

	public toObject(): MonnaieEntityObject {
		return {
			id: this.__id,
			unit: this.__unit,
			convertion_to_minimum: this.__convertionToMinimum,
		};
	}
}

export { MonnaieEntityRecord, MonnaieEntityObject };
