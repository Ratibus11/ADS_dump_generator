import { PostgreRecord } from "../PostgreRecord";

type DecorerDecorationDieuPostgreObject = {};

class DecorerDecorationDieuPostgreRecord extends PostgreRecord<DecorerDecorationDieuPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): DecorerDecorationDieuPostgreObject {
		return {};
	}
}

export { DecorerDecorationDieuPostgreRecord, DecorerDecorationDieuPostgreObject };
