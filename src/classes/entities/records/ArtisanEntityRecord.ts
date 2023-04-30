import { EntityRecord } from "../EntityRecord";

type ArtisanEntityObject = { id: number; name: string };

class ArtisanEntityRecord extends EntityRecord<ArtisanEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __name: string;

	constructor(name: string) {
		super();
		this.__id = ArtisanEntityRecord.__auto_increment++;
		this.__name = name;
	}

	public toObject(): ArtisanEntityObject {
		return {
			id: this.__id,
			name: this.__name,
		};
	}

	public get id() {
		return this.__id;
	}

	public get name() {
		return this.__name;
	}
}

export { ArtisanEntityRecord, ArtisanEntityObject };
