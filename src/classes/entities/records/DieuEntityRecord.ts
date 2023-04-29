import { EntityRecord } from "../EntityRecord";

type DieuEntityObject = { id: number; name: string };

class DieuEntityRecord extends EntityRecord<DieuEntityObject> {
	private static __auto_increment: number = 0;

	private readonly __id: number;
	private readonly __name: string;

	constructor(name: string) {
		super();
		this.__id = DieuEntityRecord.__auto_increment++;
		this.__name = name;
	}

	public toObject(): DieuEntityObject {
		return {
			id: this.__id,
			name: this.__name,
		};
	}
}

export { DieuEntityRecord, DieuEntityObject };
