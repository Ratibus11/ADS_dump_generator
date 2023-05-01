import { EntityRecord } from "../EntityRecord";
import { DieuEntity } from "../entities/DieuEntity";

type PouvoirEntityObject = { id: number; name: string; god: string | null };

class PouvoirEntityRecord extends EntityRecord<PouvoirEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __name: string;
	private readonly __god: string;

	constructor(name: string, gods: DieuEntity) {
		super();
		this.__id = PouvoirEntityRecord.__auto_increment++;
		this.__name = name;
		this.__god = gods.names.find((e) => name.includes(e)) as string;
	}

	public toObject(): PouvoirEntityObject {
		return {
			id: this.__id,
			name: this.__name,
			god: this.__god,
		};
	}

	public get name() {
		return this.__name;
	}

	public get id() {
		return this.__id;
	}

	public get godName() {
		return this.__god;
	}
}

export { PouvoirEntityRecord, PouvoirEntityObject };
