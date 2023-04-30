import { MoisEntityRecord } from "src/classes/entities/records/MoisEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { MoisPostgreRecord } from "../records/MoisPostgreRecord";
import { DieuEntity } from "src/classes/entities/entities/DieuEntity";

class MoisPostgreTable extends PostgreTable<MoisPostgreRecord> {
	constructor() {
		super("mois");
	}

	public insert(mois: MoisEntityRecord, dieux: DieuEntity) {
		this.__records.push(new MoisPostgreRecord(mois, dieux));
	}

	public inserts(moiss: MoisEntityRecord[], dieux: DieuEntity) {
		moiss.forEach((e) => this.insert(e, dieux));
	}
}

export { MoisPostgreTable };
