import { Entity } from "../Entity";
import { ObjetEntityRecord } from "../records/ObjetEntityRecord";

class ObjetEntity extends Entity<ObjetEntityRecord> {
    public insert(name: string) {
        this.__records.push(new ObjetEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }
}

export { ObjetEntity };
