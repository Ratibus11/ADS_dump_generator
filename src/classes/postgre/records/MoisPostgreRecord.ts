import { MoisEntityRecord } from "src/classes/entities/records/MoisEntityRecord";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";
import { DieuEntity } from "src/classes/entities/entities/DieuEntity";
import { SmallSerialPostgreColumn } from "../columns/SmallSerialPostgreColumn";

type MoisPostgreObject = { id: number; nom: string; id_dieu: number };

class MoisPostgreRecord extends PostgreRecord<MoisPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
		id_god: PostgreColumn<number>;
	};

	constructor(mois: MoisEntityRecord, dieux: DieuEntity) {
		super();
		this._columns = {
			id: new SmallSerialPostgreColumn("id", mois.id, false, undefined, true),
			name: new VarcharPostgreColumn("nom", 20, mois.name, false, undefined, true),
			id_god: new SmallIntegerPostgreColumn("id_dieu", dieux.findByName(mois.godName)?.id, false, {
				table: "dieu",
				column: "id",
			}),
		};
	}

	protected toObject(): MoisPostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
			id_dieu: this._columns.id_god.value,
		};
	}
}

export { MoisPostgreRecord, MoisPostgreObject };
