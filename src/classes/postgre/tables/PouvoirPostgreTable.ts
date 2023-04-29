import { PostgreTable } from "../PostgreTable";
import { PouvoirPostgreRecord } from "../records/PouvoirPostgreRecord";

class PouvoirPostgreTable extends PostgreTable<PouvoirPostgreRecord> {
	constructor() {
		super("pouvoir");
	}
}

export { PouvoirPostgreTable };
