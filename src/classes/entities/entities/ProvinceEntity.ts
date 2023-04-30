import { Entity } from "../Entity";
import { ProvinceEntityRecord } from "../records/ProvinceEntityRecord";

class ProvinceEntity extends Entity<ProvinceEntityRecord> {
	constructor() {
		super("province");
	}

	public insert(name: string) {
		this.__records.push(new ProvinceEntityRecord(name));
	}

	public inserts(names: string[]) {
		names.forEach((name) => this.insert(name));
	}

	public findByName(name: string) {
		return this.find(name, (e, i, o) => e.name == name);
	}

	public get names() {
		return this.__records.map((e) => e.name);
	}
}

export { ProvinceEntity };
