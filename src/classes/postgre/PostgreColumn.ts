abstract class PostgreColumn<T extends number | string, N extends boolean = false> {
	protected readonly _type: string;
	protected readonly _value: N extends false ? T : T | null;

	private readonly __name: string;

	constructor(name: string, type: string, value: N extends false ? T : T | null, validator: boolean) {
		this.__name = name.toUpperCase();
		this._type = type;

		if (!validator) {
			throw Error(`Cannot use value ${value} because is not compliant with ${this._type}`);
		}

		this._value = value;
	}

	public get value() {
		return this._value;
	}

	public get sqlName(): string {
		return this.__name.toUpperCase();
	}

	public get sqlType(): string {
		return this._type.toUpperCase()
	}
}

export { PostgreColumn };
