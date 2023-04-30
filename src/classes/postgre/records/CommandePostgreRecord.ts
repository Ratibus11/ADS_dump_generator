import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreRecord } from "../PostgreRecord";
import { SerialPostgreColumn } from "../columns/SerialPostgreColumn";
import { ObjetEntity } from "src/classes/entities/entities/ObjetEntity";
import { ProvinceEntity } from "src/classes/entities/entities/ProvinceEntity";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";
import { DecorationEntity } from "src/classes/entities/entities/DecorationEntity";

type CommandePostgreObject = {
	id: number;
	quantite: number;
	id_objet: number;
	id_province: number;
};

class CommandePostgreRecord extends PostgreRecord<CommandePostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		quantity: PostgreColumn<number>;
		id_decoration: PostgreColumn<number, true>;
		id_province: PostgreColumn<number>;
		id_objet: PostgreColumn<number>;
	};

	constructor(
		commande: CommandeEntityRecord,
		objets: ObjetEntity,
		provinces: ProvinceEntity,
		decorations: DecorationEntity,
	) {
		super();
		this._columns = {
			id: new SerialPostgreColumn("id", commande.id, false, undefined, true),
			quantity: new IntegerPostgreColumn("quantite", commande.quantity, false),
			id_decoration: new SmallIntegerPostgreColumn(
				"id_decoration",
				decorations.findByNameNullable(commande.decorationName)?.id ?? null,
				true,
				{ table: "decoration", column: "id" },
			),
			id_objet: new SmallIntegerPostgreColumn("id_objet", objets.findByName(commande.objectName).id, false, {
				table: "objet",
				column: "id",
			}),
			id_province: new SmallIntegerPostgreColumn("id_province", provinces.findByName(commande.provinceName).id, false, {
				table: "province",
				column: "id",
			}),
		};
	}

	protected toObject(): CommandePostgreObject {
		return {
			id: this._columns.id.value,
			quantite: this._columns.quantity.value,
			id_objet: this._columns.id_objet.value,
			id_province: this._columns.id_province.value,
		};
	}
}

export { CommandePostgreRecord, CommandePostgreObject };
