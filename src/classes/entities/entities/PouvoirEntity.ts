import { Entity } from "../Entity";
import { PouvoirEntityRecord } from "../records/PouvoirEntityRecord";

class PouvoirEntity extends Entity<PouvoirEntityRecord> {
    constructor() {
        super("pouvoir");
    }

    public insert(name: string) {
        this.__records.push(new PouvoirEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }
}

export { PouvoirEntity };
