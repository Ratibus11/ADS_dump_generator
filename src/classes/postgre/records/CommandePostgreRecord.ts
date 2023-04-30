import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreRecord } from "../PostgreRecord";
import { SerialPostgreColumn } from "../columns/SerialPostgreColumn";
import { ObjetEntity } from "src/classes/entities/entities/ObjetEntity";
import { ProvinceEntity } from "src/classes/entities/entities/ProvinceEntity";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";

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
		id_province: PostgreColumn<number>;
		id_objet: PostgreColumn<number>;
	};

	constructor(commande: CommandeEntityRecord, objets: ObjetEntity, provinces: ProvinceEntity) {
		super();
		this._columns = {
			id: new SerialPostgreColumn("id", commande.id),
			quantity: new IntegerPostgreColumn("quantite", commande.quantity),
			id_objet: new SmallIntegerPostgreColumn("id_objet", objets.findByName(commande.objectName).id),
			id_province: new SmallIntegerPostgreColumn("id_province", provinces.findByName(commande.provinceName).id),
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
