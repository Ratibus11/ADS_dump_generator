import { Entity } from "../Entity";
import { MonnaieEntityRecord } from "../records/MonnaieEntityRecord";

class MonnaieEntity extends Entity<MonnaieEntityRecord> {
    public insert(name: string, convertionToMinimum: number) {
        this.__records.push(new MonnaieEntityRecord(name, convertionToMinimum))
    }

    public inserts(entries: [string, number][]) {
        entries.forEach(entry => this.insert(entry[0], entry[1]));
    }
}

export { MonnaieEntity };
