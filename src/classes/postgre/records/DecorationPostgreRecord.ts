import { DecorationEntityRecord } from "src/classes/entities/records/DecorationEntityRecord";
import { PostgreColumn } from "../PostgreColumn";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { DieuEntity } from "src/classes/entities/entities/DieuEntity";
import { SmallSerialPostgreColumn } from "../columns/SmallSerialPostgreColumn";

type DecorationPostgreObject = { id: number; nom: string; id_dieu: number | null };

class DecorationPostgreRecord extends PostgreRecord<DecorationPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
		id_dieu: PostgreColumn<number, true>;
	};

	constructor(decoration: DecorationEntityRecord, dieux: DieuEntity) {
		super();
		this._columns = {
			id: new SmallSerialPostgreColumn("id", decoration.id, undefined, true),
			name: new VarcharPostgreColumn("name", 30, decoration.name, undefined, true),
			id_dieu: new SmallIntegerPostgreColumn<true>(
				"id_dieu",
				dieux.findByNameNullable(decoration.godName)?.id ?? null,
				{table: "dieu", column: "id"}
			),
		};
	}

	protected toObject(): DecorationPostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
			id_dieu: this._columns.id_dieu?.value ?? null,
		};
	}
}

export { DecorationPostgreRecord, DecorationPostgreObject };
