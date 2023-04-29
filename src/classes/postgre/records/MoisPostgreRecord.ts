import { PostgreRecord } from "../PostgreRecord";

type MoisPostgreObject = {};

class MoisPostgreRecord extends PostgreRecord<MoisPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): MoisPostgreObject {
		return {};
	}
}

export { MoisPostgreRecord, MoisPostgreObject };
