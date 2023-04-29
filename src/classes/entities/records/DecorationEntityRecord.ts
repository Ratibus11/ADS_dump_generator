import { EntityRecord } from "../EntityRecord";

type DecorationEntityObject = { id: number; name: string };

class DecorationEntityRecord extends EntityRecord<DecorationEntityObject> {
	private static __auto_increment: number = 0;

	private readonly __id: number;
	private readonly __name: string;

	constructor(name: string) {
		super();
		this.__id = DecorationEntityRecord.__auto_increment++;
		this.__name = name;
	}

	public toObject(): DecorationEntityObject {
		return {
			id: this.__id,
			name: this.__name,
		};
	}
}

export { DecorationEntityRecord, DecorationEntityObject };
