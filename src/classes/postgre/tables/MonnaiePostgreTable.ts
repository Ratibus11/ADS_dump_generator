import { MonnaieEntityRecord } from "src/classes/entities/records/MonnaieEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { MonnaiePostgreRecord } from "../records/MonnaiePostgreRecord";

class MonnaiePostgreTable extends PostgreTable<MonnaiePostgreRecord> {
	constructor() {
		super("monnaie");
	}

	public insert(monnaie: MonnaieEntityRecord) {
		this.__records.push(new MonnaiePostgreRecord(monnaie));
	}

	public inserts(monnaies: MonnaieEntityRecord[]) {
		monnaies.forEach((e) => this.insert(e));
	}
}

export { MonnaiePostgreTable };
