import { ObjetEntityRecord } from "src/classes/entities/records/ObjetEntityRecord";
import { PostgreColumn } from "../PostgreColumn";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";

type ObjetPostgreObject = { id: number; nom: string };

class ObjetPostgreRecord extends PostgreRecord<ObjetPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
	};

	constructor(objet: ObjetEntityRecord) {
		super();
		this._columns = {
			id: new SmallIntegerPostgreColumn("id", objet.id),
			name: new VarcharPostgreColumn("nom", 30, objet.name),
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
