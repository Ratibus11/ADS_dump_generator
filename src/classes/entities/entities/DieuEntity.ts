import { Entity } from "../Entity";
import { DieuEntityRecord } from "../records/DieuEntityRecord";

class DieuEntity extends Entity<DieuEntityRecord> {
    constructor() {
        super("dieu");
    }

    public insert(name: string) {
        this.__records.push(new DieuEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }
}

export { DieuEntity };
