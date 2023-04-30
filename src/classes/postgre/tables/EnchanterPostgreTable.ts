import { PouvoirEntity } from "src/classes/entities/entities/PouvoirEntity";
import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PouvoirEntityRecord } from "src/classes/entities/records/PouvoirEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { EnchanterPostgreRecord } from "../records/EnchanterPostgreRecord";

class EnchanterPostgreTable extends PostgreTable<EnchanterPostgreRecord> {
	constructor() {
		super("enchanter");
	}

	public insert(commande: CommandeEntityRecord, pouvoirs: PouvoirEntity) {
		commande.powers?.forEach((e) => this.__records.push(new EnchanterPostgreRecord(commande, e, pouvoirs)));
	}

	public inserts(commandes: CommandeEntityRecord[], pouvoirss: PouvoirEntity) {
		commandes.forEach((_, i) => this.insert(commandes.pop() as CommandeEntityRecord, pouvoirss));
	}
}

export { EnchanterPostgreTable };
