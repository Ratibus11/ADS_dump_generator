import { Entity } from "../Entity";
import { MoisEntityRecord } from "../records/MoisEntityRecord";

class MoisEntity extends Entity<MoisEntityRecord> {
    public insert(name: string) {
        this.__records.push(new MoisEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }
}

export { MoisEntity };
