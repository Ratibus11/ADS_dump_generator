import { PostgreTable } from "../PostgreTable";
import { ObjetPostgreRecord } from "../records/ObjetPostgreRecord";

class ObjetPostgreTable extends PostgreTable<ObjetPostgreRecord> {
	constructor() {
		super("objet");
	}
}

export { ObjetPostgreTable };
