import { DieuEntity } from "src/classes/entities/entities/DieuEntity";
import { PouvoirEntityRecord } from "src/classes/entities/records/PouvoirEntityRecord";
import { PostgreColumn } from "../PostgreColumn";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { SmallSerialPostgreColumn } from "../columns/SmallSerialPostgreColumn";

type PouvoirPostgreObject = { id: number; nom: string; id_dieu: number | null };

class PouvoirPostgreRecord extends PostgreRecord<PouvoirPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
		id_dieu: PostgreColumn<number, true>;
	};

	constructor(pouvoir: PouvoirEntityRecord, dieux: DieuEntity) {
		super();
		this._columns = {
			id: new SmallSerialPostgreColumn("id", pouvoir.id, false, undefined, true),
			name: new VarcharPostgreColumn("name", 30, pouvoir.name, false, undefined, true),
			id_dieu: new SmallIntegerPostgreColumn(
				"id_dieu",
				dieux.findByName(pouvoir.godName).id,
				false,
				{table: "dieu", column: "id"}
			),
		};
	}

	protected toObject(): PouvoirPostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
			id_dieu: this._columns.id_dieu?.value ?? null,
		};
	}
}

export { PouvoirPostgreRecord, PouvoirPostgreObject };
