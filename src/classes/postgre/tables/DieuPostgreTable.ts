import { PostgreTable } from "../PostgreTable";
import { DieuPostgreRecord } from "../records/DieuPostgreRecord";

class DieuPostgreTable extends PostgreTable<DieuPostgreRecord> {
	constructor() {
		super("dieu");
	}
}

export { DieuPostgreTable };
