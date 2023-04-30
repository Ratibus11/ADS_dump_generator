abstract class PostgreColumn<T extends number | string, N extends boolean = false> {
	protected readonly _type: string;
	protected readonly _value: N extends false ? T : T | null;

	private readonly __reference: { table: string; column: string } | null;
	private readonly __name: string;
	private readonly __isUnique: boolean;
	private readonly __isNullable: boolean;

	constructor(
		name: string,
		type: string,
		value: N extends false ? T : T | null,
		validator: boolean,
		nullable: N,
		reference?: { table: string; column: string } | undefined,
		unique: boolean = false,
	) {
		if (!validator) {
			throw Error(`Cannot use value ${value} because is not compliant with ${type}`);
		}
		this.__isNullable = nullable;
		this.__name = name.toUpperCase();
		this._type = type;
		this._value = value;
		this.__reference = reference ?? null;
		this.__isUnique = unique;
	}

	public get value() {
		return this._value;
	}

	public get sqlName(): string {
		return this.__name.toUpperCase();
	}

	public get sqlType(): string {
		const type = this._type.toUpperCase();

		return (
			[type, this.__isUnique ? "UNIQUE" : null, this.__isNullable ? null : "NOT NULL"].filter(
				(e) => e != null,
			) as string[]
		).join(" ");
	}

	public get reference(): { source: string; table: string; column: string } | null {
		return this.__reference
			? { source: this.__name, table: this.__reference.table, column: this.__reference.column }
			: null;
	}
}

export { PostgreColumn };
