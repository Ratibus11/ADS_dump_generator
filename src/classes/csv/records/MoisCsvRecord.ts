import { CsvRecord } from "../CsvRecord";

class MoisCsvRecord extends CsvRecord {
	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);
	}
}

export { MoisCsvRecord };
