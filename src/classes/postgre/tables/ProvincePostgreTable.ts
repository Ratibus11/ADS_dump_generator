import { ProvinceEntityRecord } from "src/classes/entities/records/ProvinceEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { ProvincePostgreRecord } from "../records/ProvincePostgreRecord";

class ProvincePostgreTable extends PostgreTable<ProvincePostgreRecord> {
	constructor() {
		super("province");
	}

	public insert(province: ProvinceEntityRecord) {
		this.__records.push(new ProvincePostgreRecord(province));
	}

	public inserts(provinces: ProvinceEntityRecord[]) {
		provinces.forEach((e) => this.insert(e));
	}
}

export { ProvincePostgreTable };
