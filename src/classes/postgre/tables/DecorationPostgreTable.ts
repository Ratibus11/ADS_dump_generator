import { DecorationEntityRecord } from "src/classes/entities/records/DecorationEntityRecord";
import { PostgreTable } from "../PostgreTable";
import { DecorationPostgreRecord } from "../records/DecorationPostgreRecord";
import { DieuEntity } from "src/classes/entities/entities/DieuEntity";

class DecorationPostgreTable extends PostgreTable<DecorationPostgreRecord> {
	constructor() {
		super("decoration");
	}

	public insert(decoration: DecorationEntityRecord, dieux: DieuEntity) {
		this.__records.push(new DecorationPostgreRecord(decoration, dieux));
	}

	public inserts(decorations: DecorationEntityRecord[], dieux: DieuEntity) {
		decorations.forEach((e) => this.insert(e, dieux));
	}
}

export { DecorationPostgreTable };
