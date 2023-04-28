abstract class CsvRecord {
	private __splittedData: string[];

	constructor(fileName: string, recordIndex: number, data: string, expectedDataLength: number, separator: string) {
		const splittedData = data.split(separator);
		const dataQuantity = splittedData.length;

		if (dataQuantity != expectedDataLength) {
			throw `${fileName} - On record #${recordIndex}, expecting ${expectedDataLength} elements, got ${dataQuantity}.`;
		}

		this.__splittedData = splittedData;
	}

	public get data(): string[] {
		return this.__splittedData;
	}
}

export { CsvRecord };
