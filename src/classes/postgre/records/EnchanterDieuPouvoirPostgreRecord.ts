import { PostgreRecord } from "../PostgreRecord";

type EnchanterDieuPouvoirPostgreObject = {};

class EnchanterDieuPouvoirPostgreRecord extends PostgreRecord<EnchanterDieuPouvoirPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): EnchanterDieuPouvoirPostgreObject {
		return {};
	}
}

export { EnchanterDieuPouvoirPostgreRecord, EnchanterDieuPouvoirPostgreObject };
