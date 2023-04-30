import { CommandeEntity } from "src/classes/entities/entities/CommandeEntity";
import { PostgreTable } from "../PostgreTable";
import { CommandePostgreRecord } from "../records/CommandePostgreRecord";
import { ProvinceEntity } from "src/classes/entities/entities/ProvinceEntity";
import { ObjetEntity } from "src/classes/entities/entities/ObjetEntity";
import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { DecorationEntity } from "src/classes/entities/entities/DecorationEntity";

class CommandePostgreTable extends PostgreTable<CommandePostgreRecord> {
	constructor() {
		super("commande");
	}

	public insert(
		commande: CommandeEntityRecord,
		objets: ObjetEntity,
		provinces: ProvinceEntity,
		decorations: DecorationEntity,
	) {
		this.__records.push(new CommandePostgreRecord(commande, objets, provinces, decorations));
	}

	public inserts(
		commandes: CommandeEntityRecord[],
		objets: ObjetEntity,
		provinces: ProvinceEntity,
		decorations: DecorationEntity,
	) {
		commandes.forEach((e) => this.insert(e, objets, provinces, decorations));
	}
}

export { CommandePostgreTable };
