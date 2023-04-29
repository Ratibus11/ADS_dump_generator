import { PostgreRecord } from "../PostgreRecord";

type DieuPostgreObject = {};

class DieuPostgreRecord extends PostgreRecord<DieuPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): DieuPostgreObject {
		return {};
	}
}

export { DieuPostgreRecord, DieuPostgreObject };
