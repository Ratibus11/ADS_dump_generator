import { PostgreColumn } from "../PostgreColumn";

class SmallIntegerPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(
		name: string,
		value: N extends false ? number : number | null,
		reference?: { table: string; column: string },
		unique: boolean = false
	) {
		super(name, "SMALLINT", value, value == null ? true : -32768 <= value && value <= 32767, reference, unique);
	}
}

export { SmallIntegerPostgreColumn };
