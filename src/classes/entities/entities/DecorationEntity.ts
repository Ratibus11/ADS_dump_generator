import { Entity } from "../Entity";
import { DecorationEntityRecord } from "../records/DecorationEntityRecord";
import { DieuEntity } from "./DieuEntity";

class DecorationEntity extends Entity<DecorationEntityRecord> {
	constructor() {
		super("decoration");
	}

	public insert(name: string, gods: DieuEntity) {
		this.__records.push(new DecorationEntityRecord(name, gods));
	}

	public inserts(names: string[], gods: DieuEntity) {
		names.forEach((name) => this.insert(name, gods));
	}

	public findByName(name: string) {
		return this.find(name, (e, i, o) => e.name == name);
	}

	public findByNameNullable(name: string | null) {
		return name == null ? null : this.findByName(name);
	}

	public get names() {
		return this.__records.map((e) => e.name);
	}
}

export { DecorationEntity };
