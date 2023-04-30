import { DieuEntity } from "src/classes/entities/entities/DieuEntity";
import { PouvoirEntityRecord } from "src/classes/entities/records/PouvoirEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { PouvoirPostgreRecord } from "../records/PouvoirPostgreRecord";

class PouvoirPostgreTable extends PostgreTable<PouvoirPostgreRecord> {
	constructor() {
		super("pouvoir");
	}

	public insert(pouvoir: PouvoirEntityRecord, dieux: DieuEntity) {
		this.__records.push(new PouvoirPostgreRecord(pouvoir, dieux));
	}

	public inserts(pouvoirs: PouvoirEntityRecord[], dieux: DieuEntity) {
		pouvoirs.forEach((e) => this.insert(e, dieux));
	}
}

export { PouvoirPostgreTable };
