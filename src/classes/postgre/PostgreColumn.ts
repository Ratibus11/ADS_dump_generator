abstract class PostgreColumn<T extends number | string> {
	protected readonly _type: string;
	protected readonly _value: T;

	private readonly __name: string;

	constructor(name: string, type: string, value: T) {
		this.__name = name.toUpperCase();
		this._type = type;

		if (! this._isValidData(value)) {
			throw Error(`Cannot use value ${value} because is not compliant with ${this._type}`)
		}

		this._value = value;
	}

	protected abstract _isValidData(value: T): boolean;
}

export { PostgreColumn };
