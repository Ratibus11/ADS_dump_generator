import { PostgreRecord } from "../PostgreRecord";

type DecorerCommandeDecorationPostgreObject = {};

class DecorerCommandeDecorationPostgreRecord extends PostgreRecord<DecorerCommandeDecorationPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): DecorerCommandeDecorationPostgreObject {
		return {};
	}
}

export { DecorerCommandeDecorationPostgreRecord, DecorerCommandeDecorationPostgreObject };
