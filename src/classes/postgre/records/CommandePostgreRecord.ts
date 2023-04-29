import { PostgreRecord } from "../PostgreRecord";

type CommandePostgreObject = {};

class CommandePostgreRecord extends PostgreRecord<CommandePostgreObject> {
    protected _columns = {};
    
    protected override toObject(): CommandePostgreObject {
        return {}
    }
}

export { CommandePostgreRecord, CommandePostgreObject };
