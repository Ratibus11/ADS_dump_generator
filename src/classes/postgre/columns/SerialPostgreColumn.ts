import { PostgreColumn } from "../PostgreColumn";

class SerialPostgreColumn extends PostgreColumn<number> {
	constructor(name: string, value: number) {
		super(name, "SERIAL", value);
	}

	protected _isValidData(value: number): boolean {
		return 1 <= this._value && this._value <= 2147483647
	}
}

export { SerialPostgreColumn };
