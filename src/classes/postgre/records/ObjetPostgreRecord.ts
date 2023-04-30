import { ObjetEntityRecord } from "src/classes/entities/records/ObjetEntityRecord";
import { PostgreColumn } from "../PostgreColumn";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { SmallSerialPostgreColumn } from "../columns/SmallSerialPostgreColumn";

type ObjetPostgreObject = { id: number; nom: string };

class ObjetPostgreRecord extends PostgreRecord<ObjetPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
	};

	constructor(objet: ObjetEntityRecord) {
		super();
		this._columns = {
			id: new SmallSerialPostgreColumn("id", objet.id, false, undefined, true),
			name: new VarcharPostgreColumn("nom", 30, objet.name, false, undefined, true),
		};
	}

	protected toObject(): ObjetPostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
		};
	}
}

export { ObjetPostgreRecord, ObjetPostgreObject };
