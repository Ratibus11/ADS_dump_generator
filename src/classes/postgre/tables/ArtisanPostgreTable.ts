import { ArtisanEntityRecord } from "src/classes/entities/records/ArtisanEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { ArtisanPostgreObject, ArtisanPostgreRecord } from "../records/ArtisanPostgreRecord";

class ArtisanPostgreTable extends PostgreTable<ArtisanPostgreRecord> {
	constructor() {
		super("artisan");
	}

	public insert(artisan: ArtisanEntityRecord) {
		this.__records.push(new ArtisanPostgreRecord(artisan))
	}

	public inserts(artisans: ArtisanEntityRecord[]) {
		artisans.forEach(e => this.insert(e));
	}
}

export { ArtisanPostgreTable };
