import { PostgreColumn } from "../PostgreColumn";

class SmallSerialPostgreColumn<N extends boolean = false> extends PostgreColumn<number, N> {
	constructor(
		name: string,
		value: N extends false ? number : number | null,
		nullable: N,
		reference?: { table: string; column: string },
		unique: boolean = false,
	) {
		super(name, "SMALLSERIAL", value, value == null ? true : 1 <= value && value <= 32767, nullable, reference, unique);
	}
}

export { SmallSerialPostgreColumn };
