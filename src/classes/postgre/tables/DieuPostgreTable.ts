import { DieuEntityRecord } from "src/classes/entities/records/DieuEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { DieuPostgreRecord } from "../records/DieuPostgreRecord";

class DieuPostgreTable extends PostgreTable<DieuPostgreRecord> {
	constructor() {
		super("dieu");
	}

	public insert(dieu: DieuEntityRecord) {
		this.__records.push(new DieuPostgreRecord(dieu));
	}

	public inserts(dieux: DieuEntityRecord[]) {
		dieux.forEach((e) => this.insert(e));
	}
}

export { DieuPostgreTable };
