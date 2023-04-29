import { CsvFile } from "../CsvFile";
import { VenteCsvRecord, VenteCsvObject } from "../records/VenteCsvRecord";

class VentesCsvFile extends CsvFile<VenteCsvRecord, VenteCsvObject, 10> {
	constructor() {
		super("ventes", VenteCsvRecord, 10, false);
	}

	public get makersNames(): string[] {
		return this.__RECORDS.map((e) => e.makersName).flat();
	}

	public get quantities(): number[] {
		return this.__RECORDS.map((e) => e.quantity);
	}

	public get objects(): string[] {
		return this.__RECORDS.map((e) => e.objectName);
	}

	public get decorations(): string[] {
		return this.__RECORDS
			.map((e) => e.decorationsName)
			.filter((e) => Array.isArray(e))
			.flat() as string[];
	}

	public get powers(): string[] {
		return this.__RECORDS
			.map((e) => e.powersName)
			.filter((e) => e != null)
			.flat() as string[];
	}

	public get payments(): { gold: number; silver: number; iron: number }[] {
		return this.__RECORDS.map((e) => e.payment);
	}
}

export { VentesCsvFile };
