import { PostgreColumn } from "../PostgreColumn";

class VarcharPostgreColumn extends PostgreColumn<string> {
    private readonly __size: number;

    constructor(name: string, size: number, value: string) {
        super(name, "VARCHAR", value);
        this.__size = size;
    }

    protected _isValidData(value: string): boolean {
		return this._value.length <= this.__size;
	}
}

export { VarcharPostgreColumn };
