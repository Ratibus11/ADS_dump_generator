import * as lodash from "lodash";

import { Entity } from "../Entity";
import { CommandeEntityRecord } from "../records/CommandeEntityRecord";

class CommandeEntity extends Entity<CommandeEntityRecord> {
	constructor() {
		super("commande");
	}

	public insert(
		quantity: number,
		year: number,
		month: string,
		payment: [number, number, number],
		objectName: string,
		provinceName: string,
		decorations: string | null,
		powers: string[] | null,
		payment_units: [string, string, string],
		makers: string[],
	) {
		this.__records.push(
			new CommandeEntityRecord(
				quantity,
				year,
				month,
				payment,
				objectName,
				provinceName,
				decorations,
				powers,
				payment_units,
				makers,
			),
		);
	}

	public inserts(
		quantities: number[],
		years: number[],
		months: string[],
		payments: [number, number, number][],
		objectsName: string[],
		provincesName: string[],
		decorationss: (string[] | null)[],
		powerss: (string[] | null)[],
		payment_unitss: [string, string, string][],
		makerss: string[][],
	) {
		const data = quantities.map((_, i) => [
			quantities[i],
			years[i],
			months[i],
			payments[i],
			objectsName[i],
			provincesName[i],
			decorationss[i],
			powerss[i],
			payment_unitss[i],
			makerss[i],
		]);

		data.forEach(
			([quantity, year, month, payment, objectName, provinceName, decorations, powers, payment_units, makers]) => {
				this.insert(
					quantity as number,
					year as number,
					month as string,
					payment as [number, number, number],
					objectName as string,
					provinceName as string,
					decorations as string | null,
					powers as string[] | null,
					payment_units as [string, string, string],
					makers as string[],
				);
			},
		);
	}
}

export { CommandeEntity };
