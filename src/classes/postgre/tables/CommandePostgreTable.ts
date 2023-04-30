import { CommandeEntity } from "src/classes/entities/entities/CommandeEntity";
import { PostgreTable } from "../PostgreTable";
import { CommandePostgreRecord } from "../records/CommandePostgreRecord";
import { ProvinceEntity } from "src/classes/entities/entities/ProvinceEntity";
import { ObjetEntity } from "src/classes/entities/entities/ObjetEntity";
import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";

class CommandePostgreTable extends PostgreTable<CommandePostgreRecord> {
	constructor() {
		super("commande");
	}

	public insert(commande: CommandeEntityRecord, objets: ObjetEntity, provinces: ProvinceEntity) {
		this.__records.push(new CommandePostgreRecord(commande, objets, provinces));
	}

	public inserts(commandes: CommandeEntityRecord[], objets: ObjetEntity, provinces: ProvinceEntity) {
		commandes.forEach((e) => this.insert(e, objets, provinces));
	}
}

export { CommandePostgreTable };
