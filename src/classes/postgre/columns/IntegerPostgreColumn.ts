import { PostgreColumn } from "../PostgreColumn";

class IntegerPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(
		name: string,
		value: N extends false ? number : number | null,
		reference?: { table: string; column: string },
		unique: boolean = false
	) {
		super(name, "INTEGER", value, value == null ? true : -2147483648 <= value && value <= 2147483647, reference, unique);
	}
}

export { IntegerPostgreColumn };
