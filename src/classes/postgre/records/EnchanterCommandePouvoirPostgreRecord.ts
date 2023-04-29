import { PostgreRecord } from "../PostgreRecord";

type EnchanterCommandePouvoirPostgreObject = {};

class EnchanterCommandePouvoirPostgreRecord extends PostgreRecord<EnchanterCommandePouvoirPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): EnchanterCommandePouvoirPostgreObject {
		return {};
	}
}

export { EnchanterCommandePouvoirPostgreRecord, EnchanterCommandePouvoirPostgreObject };
