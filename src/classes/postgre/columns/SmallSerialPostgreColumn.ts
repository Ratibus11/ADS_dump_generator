import { PostgreColumn } from "../PostgreColumn";

class SmallSerialPostgreColumn extends PostgreColumn<number> {
	constructor(name: string, value: number) {
		super(name, "SMALLSERIAL", value);
	}

	protected _isValidData(value: number): boolean {
		return 1 <= this._value && this._value <= 32767
	}
}

export { SmallSerialPostgreColumn };
