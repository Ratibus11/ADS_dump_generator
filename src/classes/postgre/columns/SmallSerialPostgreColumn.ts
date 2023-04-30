import { PostgreColumn } from "../PostgreColumn";

class SmallSerialPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(name: string, value: N extends false ? number : number | null,
		reference?: { table: string; column: string },) {
		super(name, "SMALLSERIAL", value, value == null ? true :  1 <= value && value <= 32767, reference);
	}
}

export { SmallSerialPostgreColumn };
