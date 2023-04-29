import { PostgreColumn } from "../PostgreColumn";

class SmallIntegerPostgreColumn extends PostgreColumn<number> {
	constructor(name: string, value: number) {
		super(name, "SMALLINT", value);
	}

	protected _isValidData(value: number): boolean {
		return -32768 <= this._value && this._value <= 32767
	}
}

export { SmallIntegerPostgreColumn };
