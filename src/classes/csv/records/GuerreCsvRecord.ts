import { CsvRecord } from "../CsvRecord";

class GuerreCsvRecord extends CsvRecord {
	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);
	}
}

export { GuerreCsvRecord };
