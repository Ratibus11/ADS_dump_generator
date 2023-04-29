import { PostgreRecord } from "../PostgreRecord";

type CouterPostgreObject = {};

class CouterPostgreRecord extends PostgreRecord<CouterPostgreObject> {
    protected _columns = {};
    
    protected override toObject(): CouterPostgreObject {
        return {}
    }
}

export { CouterPostgreRecord, CouterPostgreObject };
