import { PostgreRecord } from "../PostgreRecord";

type ObjetPostgreObject = {};

class ObjetPostgreRecord extends PostgreRecord<ObjetPostgreObject> {
	protected _columns = {};
	
	protected override toObject(): ObjetPostgreObject {
		return {};
	}
}

export { ObjetPostgreRecord, ObjetPostgreObject };
