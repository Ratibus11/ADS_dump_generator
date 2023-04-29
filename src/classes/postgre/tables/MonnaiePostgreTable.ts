import { PostgreTable } from "../PostgreTable";
import { MonnaiePostgreRecord } from "../records/MonnaiePostgreRecord";

class MonnaiePostgreTable extends PostgreTable<MonnaiePostgreRecord> {
	constructor() {
		super("monnaie");
	}
}

export { MonnaiePostgreTable };
