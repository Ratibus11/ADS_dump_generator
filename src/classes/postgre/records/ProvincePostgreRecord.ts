import { PostgreRecord } from "../PostgreRecord";

type ProvincePostgreObject = {};

class ProvincePostgreRecord extends PostgreRecord<ProvincePostgreObject> {
	protected _columns = {};
	
	protected override toObject(): ProvincePostgreObject {
		return {};
	}
}

export { ProvincePostgreRecord, ProvincePostgreObject };
