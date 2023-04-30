import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreRecord } from "../PostgreRecord";
import { DecorationEntity } from "src/classes/entities/entities/DecorationEntity";
import { CommandeEntity } from "src/classes/entities/entities/CommandeEntity";
import { MonnaieEntity } from "src/classes/entities/entities/MonnaieEntity";
import { MonnaieEntityRecord } from "src/classes/entities/records/MonnaieEntityRecord";
import { CommandePostgreRecord } from "./CommandePostgreRecord";
import { MonnaiePostgreRecord } from "./MonnaiePostgreRecord";
import { PostgreColumn } from "../PostgreColumn";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";

type CouterPostgreObject = {
	quantite: number;
	id_monnaie: number;
	id_commande: number;
};

class CouterPostgreRecord extends PostgreRecord<CouterPostgreObject> {
	protected _columns: {
		id_commande: PostgreColumn<number>;
		quantite: PostgreColumn<number>;
		id_monnaie: PostgreColumn<number>;
	};

	constructor(
		commande: CommandeEntityRecord,
		payment: { quantite: number; devise: string },
		monnaies: MonnaieEntity,
	) {
		super();
		this._columns = {
			id_commande: new IntegerPostgreColumn("id_commande", commande.id, false, { table: "commande", column: "id" }),
			quantite: new IntegerPostgreColumn("quantite", payment.quantite, false),
			id_monnaie: new SmallIntegerPostgreColumn("id_monnaie", monnaies.findByUnit(payment.devise).id, false, {
				table: "monnaie",
				column: "id",
			}),
		};
	}

	protected toObject(): CouterPostgreObject {
		return {
			quantite: this._columns.quantite.value,
			id_commande: this._columns.id_commande.value,
			id_monnaie: this._columns.id_monnaie.value,
		};
	}
}

export { CouterPostgreRecord, CouterPostgreObject };
