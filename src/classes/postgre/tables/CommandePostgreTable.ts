import { PostgreTable } from "../PostgreTable";
import { CommandePostgreRecord } from "../records/CommandePostgreRecord";

class CommandePostgreTable extends PostgreTable<CommandePostgreRecord> {
	constructor() {
		super("commande");
	}
}

export { CommandePostgreTable };
