import { PostgreTable } from "../PostgreTable";
import { ProvincePostgreRecord } from "../records/ProvincePostgreRecord";

class ProvincePostgreTable extends PostgreTable<ProvincePostgreRecord> {
	constructor() {
		super("province");
	}
}

export { ProvincePostgreTable };
