import { PouvoirEntity } from "src/classes/entities/entities/PouvoirEntity";
import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreRecord } from "../PostgreRecord";
import { PouvoirEntityRecord } from "src/classes/entities/records/PouvoirEntityRecord";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";

type EnchanterPostgreObject = { id_commande: number; id_pouvoir: number };

class EnchanterPostgreRecord extends PostgreRecord<EnchanterPostgreObject> {
	protected _columns: {
		id_commande: PostgreColumn<number>;
		id_pouvoir: PostgreColumn<number>;
	};

	constructor(commande: CommandeEntityRecord, pouvoir: string, pouvoirs: PouvoirEntity) {
		super();
		this._columns = {
			id_commande: new IntegerPostgreColumn("id_commande", commande.id, {table: "commande", column: "id"}),
			id_pouvoir: new SmallIntegerPostgreColumn("id_pouvoir", pouvoirs.findByName(pouvoir).id, {table: "pouvoir", column: "id"}),
		};
	}

	protected toObject(): EnchanterPostgreObject {
		return {
			id_commande: this._columns.id_commande.value,
			id_pouvoir: this._columns.id_pouvoir.value,
		};
	}
}

export { EnchanterPostgreRecord, EnchanterPostgreObject };
