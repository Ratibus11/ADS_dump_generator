import { PostgreRecord } from "../PostgreRecord";

type MonnaiePostgreObject = {};

class MonnaiePostgreRecord extends PostgreRecord<MonnaiePostgreObject> {
	protected _columns = {};
	
	protected override toObject(): MonnaiePostgreObject {
		return {};
	}
}

export { MonnaiePostgreRecord, MonnaiePostgreObject };
