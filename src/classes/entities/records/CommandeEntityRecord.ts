import { EntityRecord } from "../EntityRecord";

type CommandeEntityObject = {
	id: number;
	makers: string[];
	quantity: number;
	payment: { unit: string; quantity: number }[];
};

class CommandeEntityRecord extends EntityRecord<CommandeEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __quantity: number;
	private readonly __objectName: string;
	private readonly __provinceName: string;
	private readonly __paiedGoldQuantity: number;
	private readonly __paiedSilverQuantity: number;
	private readonly __paiedIronQuantity: number;
	private readonly __decorations: string[] | null;
	private readonly __powers: string[] | null;
	private readonly __goldUnit: string;
	private readonly __silverUnit: string;
	private readonly __ironUnit: string;
	private readonly __makersName: string[];

	constructor(
		quantity: number,
		payment: [number, number, number],
		objectName: string,
		provinceName: string,
		decorations: string[] | null,
		powers: string[] | null,
		units: [string, string, string],
		makers: string[],
	) {
		super();
		this.__id = CommandeEntityRecord.__auto_increment++;
		this.__quantity = quantity;
		this.__objectName = objectName;
		this.__provinceName = provinceName;
		this.__decorations = decorations;
		this.__powers = powers;
		this.__makersName = makers;
		[this.__paiedGoldQuantity, this.__paiedSilverQuantity, this.__paiedIronQuantity] = payment;
		[this.__goldUnit, this.__silverUnit, this.__ironUnit] = units;
	}

	public toObject(): CommandeEntityObject {
		const payments = [
			{ unit: this.goldUnit, quantity: this.__paiedGoldQuantity },
			{ unit: this.silverUnit, quantity: this.__paiedSilverQuantity },
			{ unit: this.ironUnit, quantity: this.__paiedIronQuantity },
		].filter((e) => e.quantity != 0);

		return {
			id: this.__id,
			quantity: this.__quantity,
			payment: payments,
			makers: this.__makersName,
		};
	}

	public get id() {
		return this.__id;
	}

	public get quantity() {
		return this.__quantity;
	}

	public get objectName() {
		return this.__objectName;
	}

	public get provinceName() {
		return this.__provinceName;
	}

	public get decorations() {
		return this.__decorations;
	}

	public get powers() {
		return this.__powers;
	}

	public get goldUnit() {
		return this.__goldUnit;
	}

	public get silverUnit() {
		return this.__silverUnit;
	}

	public get ironUnit() {
		return this.__ironUnit;
	}

	public get province() {
		return this.__provinceName;
	}

	public get payements() {
		return [
			{ devise: this.goldUnit, quantite: this.__paiedGoldQuantity },
			{ devise: this.silverUnit, quantite: this.__paiedSilverQuantity },
			{ devise: this.ironUnit, quantite: this.__paiedIronQuantity },
		].filter((e) => e.quantite != 0);
	}

	public get makers() {
		return this.__makersName;
	}
}

export { CommandeEntityRecord, CommandeEntityObject };
