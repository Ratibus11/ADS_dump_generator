import { CsvRecord } from "../CsvRecord";

class DemiDieuCsvRecord extends CsvRecord {
	private __godName: string;
	private __godParentName: string;

	constructor(...args: ConstructorParameters<typeof CsvRecord>) {
		super(...args);

		[this.__godName, this.__godParentName] = this.data;
	}
}

export { DemiDieuCsvRecord };
