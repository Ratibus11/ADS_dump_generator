import { CsvRecord } from "../CsvRecord";

class MonnaieCsvRecord extends CsvRecord {
    constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);
	}
}

export { MonnaieCsvRecord };
