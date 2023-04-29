import { PostgreTable } from "../PostgreTable";
import { CouterPostgreRecord } from "../records/CouterPostgreRecord";

class CouterPostgreTable extends PostgreTable<CouterPostgreRecord> {
	constructor() {
		super("couter");
	}
}

export { CouterPostgreTable };
