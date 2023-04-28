import { CsvRecord } from "../CsvRecord";

class VenteCsvRecord extends CsvRecord {
	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);
	}
}

export { VenteCsvRecord };
