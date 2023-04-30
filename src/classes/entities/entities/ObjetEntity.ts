import { Entity } from "../Entity";
import { ObjetEntityRecord } from "../records/ObjetEntityRecord";

class ObjetEntity extends Entity<ObjetEntityRecord> {
    constructor() {
        super("objet");
    }

    public insert(name: string) {
        this.__records.push(new ObjetEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }

    public findByName(name: string) {
        return this.find(name, (e, i, o) => e.name == name);
	}

    public get names() {
        return this.__records.map(e => e.name);
    }
}

export { ObjetEntity };
