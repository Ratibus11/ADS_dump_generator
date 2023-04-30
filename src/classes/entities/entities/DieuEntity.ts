import { Entity } from "../Entity";
import { DieuEntityRecord } from "../records/DieuEntityRecord";

class DieuEntity extends Entity<DieuEntityRecord> {
	constructor() {
		super("dieu");
	}

	public insert(name: string) {
		this.__records.push(new DieuEntityRecord(name));
	}

	public inserts(names: string[]) {
		names.forEach((name) => this.insert(name));
	}

	public get names() {
		return this.__records.map((e) => e.name);
	}

	public findByNameNullable(name: string | null) {
		return name == null ? null : this.findByName(name);
	}
	
	public findByName(name: string) {
		return this.find(name, (e, i, o) => e.name == name);
	}
}

export { DieuEntity };
