import { PostgreColumn } from "../PostgreColumn";

class IntegerPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(name: string, value: N extends false ? number : number | null) {
		super(name, "INTEGER", value, value == null ? true : -2147483648 <= value && value <= 2147483647);
	}
}

export { IntegerPostgreColumn };
