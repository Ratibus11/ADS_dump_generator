import { EntityRecord } from "../EntityRecord";

type MoisEntityObject = { id: number; name: string; god_name: string };

class MoisEntityRecord extends EntityRecord<MoisEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __name: string;
	private readonly __godName: string;

	constructor(name: string, godName: string) {
		super();
		this.__id = MoisEntityRecord.__auto_increment++;
		this.__name = name;
		this.__godName = godName;
	}

	public toObject(): MoisEntityObject {
		return {
			id: this.__id,
			god_name: this.__godName,
			name: this.__name,
		};
	}

	public get id() {
		return this.__id;
	}

	public get name() {
		return this.__name;
	}

	public get godName() {
		return this.__godName;
	}
}

export { MoisEntityRecord, MoisEntityObject };
