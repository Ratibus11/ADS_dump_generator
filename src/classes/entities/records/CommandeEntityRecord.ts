import { EntityRecord } from "../EntityRecord";

type CommandeEntityObject = { id: number; quantity: number; payment: { gold: number; silver: number; iron: number } };

class CommandeEntityRecord extends EntityRecord<CommandeEntityObject> {
	private static __auto_increment: number = 0;

	private readonly __id: number;
	private readonly __quantity: number;
	private readonly __paiedGoldQuantity: number;
	private readonly __paiedSilverQuantity: number;
	private readonly __paiedIronQuantity: number;

	constructor(quantity: number, payment: [number, number, number]) {
		super();
		this.__id = CommandeEntityRecord.__auto_increment++;
		this.__quantity = quantity;

		[this.__paiedGoldQuantity, this.__paiedSilverQuantity, this.__paiedIronQuantity] = payment;
	}

	public toObject(): CommandeEntityObject {
		return {
			id: this.__id,
			quantity: this.__quantity,
			payment: {
				gold: this.__paiedGoldQuantity,
				silver: this.__paiedSilverQuantity,
				iron: this.__paiedIronQuantity,
			},
		};
	}
}

export { CommandeEntityRecord, CommandeEntityObject };
