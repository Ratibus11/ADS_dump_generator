import { PostgreTable } from "../PostgreTable";
import { MoisPostgreRecord } from "../records/MoisPostgreRecord";

class MoisPostgreTable extends PostgreTable<MoisPostgreRecord> {
	constructor() {
		super("mois");
	}
}

export { MoisPostgreTable };
