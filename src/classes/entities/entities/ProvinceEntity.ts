import { Entity } from "../Entity";
import { ProvinceEntityRecord } from "../records/ProvinceEntityRecord";

class ProvinceEntity extends Entity<ProvinceEntityRecord> {
	public insert(name: string) {
		this.__records.push(new ProvinceEntityRecord(name));
	}

	public inserts(names: string[]) {
		names.forEach((name) => this.insert(name));
	}
}

export { ProvinceEntity };
