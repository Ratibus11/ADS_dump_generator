import { PostgreTable } from "../PostgreTable";
import { ArtisanPostgreObject, ArtisanPostgreRecord } from "../records/ArtisanPostgreRecord";

class ArtisanPostgreTable extends PostgreTable<ArtisanPostgreRecord> {
	constructor() {
		super("artisan");
	}
}

export { ArtisanPostgreTable };
