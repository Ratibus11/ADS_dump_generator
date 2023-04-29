import { PostgreTable } from "../PostgreTable";
import { EnchanterDieuPouvoirPostgreRecord } from "../records/EnchanterDieuPouvoirPostgreRecord";

class EnchanterDieuPouvoirPostgreTable extends PostgreTable<EnchanterDieuPouvoirPostgreRecord> {
	constructor() {
		super("enchanter_dieu_pouvoir");
	}
}

export { EnchanterDieuPouvoirPostgreTable };
