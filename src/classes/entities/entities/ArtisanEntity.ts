import { Entity } from "../Entity";
import { ArtisanEntityRecord } from "../records/ArtisanEntityRecord";

class ArtisanEntity extends Entity<ArtisanEntityRecord> {
	constructor() {
		super("artisan");
	}

	public insert(name: string) {
		this.__records.push(new ArtisanEntityRecord(name));
	}

	public inserts(names: string[]) {
		names.forEach((name) => this.insert(name));
	}

	public findByName(name: string) {
		return this.find(name, (e, i, o) => e.name == name);
	}
}

export { ArtisanEntity };
