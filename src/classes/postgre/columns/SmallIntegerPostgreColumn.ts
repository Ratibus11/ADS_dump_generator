import { PostgreColumn } from "../PostgreColumn";

class SmallIntegerPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(name: string, value: N extends false ? number : number | null) {
		super(name, "SMALLINT", value, value == null ? true :  -32768 <= value && value <= 32767);
	}
}

export { SmallIntegerPostgreColumn };
