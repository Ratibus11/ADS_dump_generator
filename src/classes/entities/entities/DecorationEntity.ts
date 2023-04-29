import { Entity } from "../Entity";
import { DecorationEntityRecord } from "../records/DecorationEntityRecord";

class DecorationEntity extends Entity<DecorationEntityRecord> {
    public insert(name: string) {
        this.__records.push(new DecorationEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }
}

export { DecorationEntity };
