import { EntityRecord } from "../EntityRecord";
import { DieuEntity } from "../entities/DieuEntity";

type DecorationEntityObject = { id: number; name: string; god: string | null };

class DecorationEntityRecord extends EntityRecord<DecorationEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __name: string;
	private readonly __god: string | null;

	constructor(name: string, gods: DieuEntity) {
		super();
		this.__id = DecorationEntityRecord.__auto_increment++;
		this.__name = name;
		this.__god = gods.names.find((e) => name.includes(e)) ?? null;
	}

	public toObject(): DecorationEntityObject {
		return {
			id: this.__id,
			name: this.__name,
			god: this.__god,
		};
	}

	public get id() {
		return this.__id;
	}

	public get name() {
		return this.__name;
	}

	public get godName() {
		return this.__god;
	}
}

export { DecorationEntityRecord, DecorationEntityObject };
