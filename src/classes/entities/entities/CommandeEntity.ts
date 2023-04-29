import * as lodash from "lodash";

import { Entity } from "../Entity";
import { CommandeEntityRecord } from "../records/CommandeEntityRecord";

class CommandeEntity extends Entity<CommandeEntityRecord> {
	constructor() {
        super("commande");
    }

	public insert(quantity: number, payment: [number, number, number]) {
		this.__records.push(new CommandeEntityRecord(quantity, payment));
	}

	public inserts(quantities: number[], payments: [number, number, number][]) {
		(lodash.zip(quantities, payments) as [number, [number, number, number]][]).forEach(([quantity, payment]) =>
			this.insert(quantity, payment),
		);
	}
}

export { CommandeEntity };
