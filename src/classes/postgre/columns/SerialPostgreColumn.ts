import { PostgreColumn } from "../PostgreColumn";

class SerialPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(name: string, value: N extends false ? number : number | null) {
		super(name, "SERIAL", value, value == null ? true :  1 <= value && value <= 2147483647);
	}
}

export { SerialPostgreColumn };
