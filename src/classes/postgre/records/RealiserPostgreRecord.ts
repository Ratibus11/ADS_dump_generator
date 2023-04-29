import { PostgreRecord } from "../PostgreRecord";

type RealiserPostgreObject = {};

class RealiserPostgreRecord extends PostgreRecord<RealiserPostgreObject> {
	protected _columns = {};

	protected override toObject(): RealiserPostgreObject {
		return {};
	}
}

export { RealiserPostgreRecord, RealiserPostgreObject };
