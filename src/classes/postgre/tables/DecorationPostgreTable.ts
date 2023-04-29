import { PostgreTable } from "../PostgreTable";
import { DecorationPostgreRecord } from "../records/DecorationPostgreRecord";

class DecorationPostgreTable extends PostgreTable<DecorationPostgreRecord> {
	constructor() {
		super("decoration");
	}
}

export { DecorationPostgreTable };
