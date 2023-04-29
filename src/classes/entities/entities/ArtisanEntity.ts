import { Entity } from "../Entity";
import { ArtisanEntityRecord } from "../records/ArtisanEntityRecord";

class ArtisanEntity extends Entity<ArtisanEntityRecord> {
    public insert(name: string) {
        this.__records.push(new ArtisanEntityRecord(name))
    }

    public inserts(names: string[]) {
        names.forEach(name => this.insert(name));
    }
}

export { ArtisanEntity };
