import { PostgreColumn } from "../PostgreColumn";

class VarcharPostgreColumn<N extends boolean = false> extends PostgreColumn<string, N> {
	private readonly __size: number;

	constructor(name: string, size: number, value: N extends false ? string : string | null) {
		super(name, `VARCHAR(${size})`, value, value == null ? true : value.length <= size);
		this.__size = size;
	}
}

export { VarcharPostgreColumn };
