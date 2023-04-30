import { CsvFile } from "../CsvFile";
import { VenteCsvRecord, VenteCsvObject } from "../records/VenteCsvRecord";

class VentesCsvFile extends CsvFile<VenteCsvRecord, VenteCsvObject, 10> {
	constructor() {
		super("ventes", VenteCsvRecord, 10, false);
	}

	public get makersNames(): string[][] {
		return this.__RECORDS.map((e) => e.makersName);
	}

	public get quantities(): number[] {
		return this.__RECORDS.map((e) => e.quantity);
	}

	public get objects(): string[] {
		return this.__RECORDS.map((e) => e.objectName);
	}

	public get decorations(): (string | null)[] {
		return this.__RECORDS.map((e) => e.decorationName);
	}

	public get powers(): (string[] | null)[] {
		return this.__RECORDS.map((e) => e.powersName);
	}

	public get payments(): { gold: [string, number]; silver: [string, number]; iron: [string, number] }[] {
		return this.__RECORDS.map((e) => e.payment);
	}

	public get provinces() {
		return this.__RECORDS.map((e) => e.provinceName);
	}
}

export { VentesCsvFile };
