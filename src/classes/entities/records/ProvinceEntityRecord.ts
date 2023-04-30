import { EntityRecord } from "../EntityRecord";

type ProvinceEntityObject = { id: number; name: string };

class ProvinceEntityRecord extends EntityRecord<ProvinceEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __name: string;

	constructor(name: string) {
		super();
		this.__id = ProvinceEntityRecord.__auto_increment++;
		this.__name = name;
	}

	public toObject(): ProvinceEntityObject {
		return {
			id: this.__id,
			name: this.__name,
		};
	}

	public get name() {
		return this.__name;
	}

	public get id() {
		return this.__id;
	}
}

export { ProvinceEntityRecord, ProvinceEntityObject };
