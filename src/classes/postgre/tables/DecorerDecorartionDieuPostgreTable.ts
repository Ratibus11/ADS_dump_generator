import { PostgreTable } from "../PostgreTable";
import { DecorerDecorationDieuPostgreRecord } from "../records/DecorerDecorartionDieuPostgreRecord";

class DecorerDecorationDieuPostgreTable extends PostgreTable<DecorerDecorationDieuPostgreRecord> {
	constructor() {
		super("decorer_decoration_dieu");
	}
}

export { DecorerDecorationDieuPostgreTable };
