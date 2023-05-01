import { EntityRecord } from "../EntityRecord";

type CommandeEntityObject = {
	id: number;
	year: number;
	month: string;
	makers: string[];
	quantity: number;
	payment: { unit: string; quantity: number }[];
};

class CommandeEntityRecord extends EntityRecord<CommandeEntityObject> {
	private static __auto_increment: number = 1;

	private readonly __id: number;
	private readonly __year: number;
	private readonly __month: string;
	private readonly __quantity: number;
	private readonly __objectName: string;
	private readonly __provinceName: string;
	private readonly __paiedGoldQuantity: number;
	private readonly __paiedSilverQuantity: number;
	private readonly __paiedIronQuantity: number;
	private readonly __decoration: string | null;
	private readonly __powers: string[] | null;
	private readonly __goldUnit: string;
	private readonly __silverUnit: string;
	private readonly __ironUnit: string;
	private readonly __makersName: string[];

	constructor(
		quantity: number,
		year: number,
		month: string,
		payment: [number, number, number],
		objectName: string,
		provinceName: string,
		decoration: string | null,
		powers: string[] | null,
		units: [string, string, string],
		makers: string[],
	) {
		super();
		this.__id = CommandeEntityRecord.__auto_increment++;
		this.__year = year;
		this.__month = month;
		this.__quantity = quantity;
		this.__objectName = objectName;
		this.__provinceName = provinceName;
		this.__decoration = decoration;
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
			year: this.__year,
			month: this.__month,
			quantity: this.__quantity,
			payment: payments,
			makers: this.__makersName,
		};
	}

	public get id() {
		return this.__id;
	}

	public get year() {
		return this.__year;
	}

	public get month() {
		return this.__month;
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

	public get decorationName() {
		return this.__decoration;
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
