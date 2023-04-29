import { PostgreTable } from "../PostgreTable";
import { DecorerCommandeDecorationPostgreRecord } from "../records/DecorerCommandeDecorationPostgreRecord";

class DecorerCommandeDecorationPostgreTable extends PostgreTable<DecorerCommandeDecorationPostgreRecord> {
	constructor() {
		super("decorer_commande_decoration");
	}
}

export { DecorerCommandeDecorationPostgreTable };
