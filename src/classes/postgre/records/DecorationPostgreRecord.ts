import { PostgreRecord } from "../PostgreRecord";

type DecorationPostgreObject = {};

class DecorationPostgreRecord extends PostgreRecord<DecorationPostgreObject> {
    protected _columns = {};
    
    protected override toObject(): DecorationPostgreObject {
        return {}
    }
}

export { DecorationPostgreRecord, DecorationPostgreObject };
