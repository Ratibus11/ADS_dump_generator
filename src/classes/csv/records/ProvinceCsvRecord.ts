import { CsvRecord } from "../CsvRecord";

class ProvinceCsvRecord extends CsvRecord {
    constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);
	}
}

export { ProvinceCsvRecord };
