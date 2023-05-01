import { Entity } from "../Entity";
import { MoisEntityRecord } from "../records/MoisEntityRecord";

class MoisEntity extends Entity<MoisEntityRecord> {
	constructor() {
		super("mois");
	}

	public insert(name: string, godName: string) {
		this.__records.push(new MoisEntityRecord(name, godName));
	}

	public inserts(names: string[], godsName: string[]) {
		names.forEach((_, i) => this.insert(names[i], godsName[i]));
	}

	public findByName(name: string) {
		return this.find(name, (e, i, o) => e.name == name);
	}
}

export { MoisEntity };
