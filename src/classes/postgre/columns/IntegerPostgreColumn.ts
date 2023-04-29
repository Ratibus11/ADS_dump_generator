import { PostgreColumn } from "../PostgreColumn";

class IntegerPostgreColumn extends PostgreColumn<number> {
	constructor(name: string, value: number) {
		super(name, "INTEGER", value);
	}

	protected _isValidData(value: number): boolean {
		return -2147483648 <= this._value && this._value <= 2147483647
	}
}

export { IntegerPostgreColumn };
