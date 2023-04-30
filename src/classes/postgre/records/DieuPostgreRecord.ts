import { DieuEntityRecord } from "src/classes/entities/records/DieuEntityRecord";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";

type DieuPostgreObject = { id: number; nom: string };

class DieuPostgreRecord extends PostgreRecord<DieuPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
	};

	constructor(dieu: DieuEntityRecord) {
		super();
		this._columns = {
			id: new SmallIntegerPostgreColumn("id", dieu.id),
			name: new VarcharPostgreColumn("name", 20, dieu.name),
		};
	}

	protected toObject(): DieuPostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
		};
	}
}

export { DieuPostgreRecord, DieuPostgreObject };
