import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { RealiserPostgreRecord } from "../records/RealiserPostgreRecord";
import { ArtisanEntityRecord } from "src/classes/entities/records/ArtisanEntityRecord";
import { ArtisanEntity } from "src/classes/entities/entities/ArtisanEntity";

class RealiserPostgreTable extends PostgreTable<RealiserPostgreRecord> {
	constructor() {
		super("realiser");
	}

	public insert(commande: CommandeEntityRecord, artisans: ArtisanEntity) {
		commande.makers.forEach((e) => this.__records.push(new RealiserPostgreRecord(commande, e, artisans)));
	}

	public inserts(commandes: CommandeEntityRecord[], artisanss: ArtisanEntity) {
		commandes = commandes.reverse();
		commandes.forEach((_, i) => {
			this.insert(commandes.pop() as CommandeEntityRecord, artisanss);
		});
	}
}

export { RealiserPostgreTable };
