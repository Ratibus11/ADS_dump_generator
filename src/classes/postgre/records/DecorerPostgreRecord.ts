import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreRecord } from "../PostgreRecord";
import { DecorationEntity } from "src/classes/entities/entities/DecorationEntity";
import { PostgreColumn } from "../PostgreColumn";
import { DecorationEntityRecord } from "src/classes/entities/records/DecorationEntityRecord";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";

type DecorerPostgreObject = {
	id_commande: number;
	id_decoration: number;
};

class DecorerPostgreRecord extends PostgreRecord<DecorerPostgreObject> {
	protected _columns: {
		id_commande: PostgreColumn<number>;
		id_decoration: PostgreColumn<number>;
	};

	constructor(commande: CommandeEntityRecord, decoration: string, decorations: DecorationEntity) {
		super();
		this._columns = {
			id_commande: new IntegerPostgreColumn("id_commande", commande.id),
			id_decoration: new SmallIntegerPostgreColumn("id_decoration", decorations.findByName(decoration).id),
		};
	}

	protected toObject(): DecorerPostgreObject {
		return {
			id_commande: this._columns.id_commande.value,
			id_decoration: this._columns.id_decoration.value,
		};
	}
}

export { DecorerPostgreRecord, DecorerPostgreObject };
