import { EntityRecord } from "../EntityRecord";

type MoisEntityObject = { id: number; name: string };

class MoisEntityRecord extends EntityRecord<MoisEntityObject> {
	private static __auto_increment: number = 0;

	private readonly __id: number;
	private readonly __name: string;

	constructor(name: string) {
		super();
		this.__id = MoisEntityRecord.__auto_increment++;
		this.__name = name;
	}

	public toObject(): MoisEntityObject {
		return {
			id: this.__id,
			name: this.__name,
		};
	}
}

export { MoisEntityRecord, MoisEntityObject };
