import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { DecorerPostgreRecord } from "../records/DecorerPostgreRecord";
import { DecorationEntityRecord } from "src/classes/entities/records/DecorationEntityRecord";
import { DecorationEntity } from "src/classes/entities/entities/DecorationEntity";

class DecorerPostgreTable extends PostgreTable<DecorerPostgreRecord> {
	constructor() {
		super("decorer");
	}

	public insert(commande: CommandeEntityRecord, decorations: DecorationEntity) {
		commande.decorations?.forEach((e) => this.__records.push(new DecorerPostgreRecord(commande, e, decorations)));
	}

	public inserts(commandes: CommandeEntityRecord[], decorationss: DecorationEntity) {
		commandes.forEach(() => this.insert(commandes.pop() as CommandeEntityRecord, decorationss));
	}
}

export { DecorerPostgreTable };
