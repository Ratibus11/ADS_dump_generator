import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { CouterPostgreRecord } from "../records/CouterPostgreRecord";
import { MonnaieEntity } from "src/classes/entities/entities/MonnaieEntity";
import { MonnaieEntityRecord } from "src/classes/entities/records/MonnaieEntityRecord";

class CouterPostgreTable extends PostgreTable<CouterPostgreRecord> {
	constructor() {
		super("couter");
	}

	public insert(commande: CommandeEntityRecord, monnaies: MonnaieEntity) {
		commande.payements.forEach((payment) =>
			this.__records.push(new CouterPostgreRecord(commande, payment, monnaies)),
		);
	}

	public inserts(commandes: CommandeEntityRecord[], monnaies: MonnaieEntity) {
		commandes.forEach((e) => {
			this.insert(e, monnaies);
		});
	}
}

export { CouterPostgreTable };
