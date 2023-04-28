import { CsvRecordContainer } from "./CsvRecordContainer";

abstract class CsvRecord<S extends number, O extends Object> {
	private readonly __splittedData: CsvRecordContainer<S>;
	private readonly __expectedDataLength: number = 0;

	constructor(fileName: string, recordIndex: number, data: string, expectedDataLength: number, separator: string) {
		const splittedData = data.split(separator);
		const dataQuantity = splittedData.length;

		if (dataQuantity != expectedDataLength) {
			throw `${fileName} - On record #${recordIndex}, expecting ${expectedDataLength} elements, got ${dataQuantity}.`;
		}

		this.__splittedData = splittedData as CsvRecordContainer<S>;
	}

	protected get data(): CsvRecordContainer<S> {
		return this.__splittedData;
	}

	protected abstract toObject(): O;

	public toJson(): string {
		return JSON.stringify(this.toObject()).replaceAll('\\"', "");
	}
}

export { CsvRecord };
