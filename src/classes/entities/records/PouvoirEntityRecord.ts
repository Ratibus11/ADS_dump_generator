import { EntityRecord } from "../EntityRecord";

type PouvoirEntityObject = { id: number; name: string };

class PouvoirEntityRecord extends EntityRecord<PouvoirEntityObject> {
	private static __auto_increment: number = 0;

	private readonly __id: number;
	private readonly __name: string;

	constructor(name: string) {
		super();
		this.__id = PouvoirEntityRecord.__auto_increment++;
		this.__name = name;
	}

	public toObject(): PouvoirEntityObject {
		return {
			id: this.__id,
			name: this.__name,
		};
	}
}

export { PouvoirEntityRecord, PouvoirEntityObject };
