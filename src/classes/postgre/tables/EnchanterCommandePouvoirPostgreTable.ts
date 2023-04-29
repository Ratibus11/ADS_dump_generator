import { PostgreTable } from "../PostgreTable";
import { EnchanterCommandePouvoirPostgreRecord } from "../records/EnchanterCommandePouvoirPostgreRecord";

class EnchanterCommandePouvoirPostgreTable extends PostgreTable<EnchanterCommandePouvoirPostgreRecord> {
	constructor() {
		super("enchanter");
	}
}

export { EnchanterCommandePouvoirPostgreTable };
