import { PostgreRecord } from "../PostgreRecord";

type PouvoirPostgreObject = {};

class PouvoirPostgreRecord extends PostgreRecord<PouvoirPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): PouvoirPostgreObject {
		return {};
	}
}

export { PouvoirPostgreRecord, PouvoirPostgreObject };
