import { Entity } from "../Entity";
import { PouvoirEntityRecord } from "../records/PouvoirEntityRecord";
import { DieuEntity } from "./DieuEntity";

class PouvoirEntity extends Entity<PouvoirEntityRecord> {
    constructor() {
        super("pouvoir");
    }

    public insert(name: string, gods: DieuEntity) {
        this.__records.push(new PouvoirEntityRecord(name, gods))
    }

    public inserts(names: string[], gods: DieuEntity) {
        names.forEach(name => this.insert(name, gods));
    }

    public findByName(name: string) {
        return this.find(name, (e, i, o) => e.name == name);
	} 
}

export { PouvoirEntity };
