import { ObjetEntityRecord } from "src/classes/entities/records/ObjetEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { ObjetPostgreRecord } from "../records/ObjetPostgreRecord";

class ObjetPostgreTable extends PostgreTable<ObjetPostgreRecord> {
	constructor() {
		super("objet");
	}

	public insert(objet: ObjetEntityRecord) {
		this.__records.push(new ObjetPostgreRecord(objet));
	}

	public inserts(objets: ObjetEntityRecord[]) {
		objets.forEach((e) => this.insert(e));
	}
}

export { ObjetPostgreTable };
