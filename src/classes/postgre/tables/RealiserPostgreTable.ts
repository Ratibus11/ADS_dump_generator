import { PostgreTable } from "../PostgreTable";
import { RealiserPostgreRecord } from "../records/RealiserPostgreRecord";

class RealiserPostgreTable extends PostgreTable<RealiserPostgreRecord> {
	constructor() {
		super("realiser");
	}
}

export { RealiserPostgreTable };
