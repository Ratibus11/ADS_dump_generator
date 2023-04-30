import { PostgreColumn } from "./PostgreColumn";
import { PostgreColumnContainer } from "./PostgreColumnContainer";

abstract class PostgreRecord<O extends Object> {
	protected abstract _columns: PostgreColumnContainer;

	protected abstract toObject(): O;

	public toJson(): string {
		return JSON.stringify(this.toObject()).replaceAll('\\"', "");
	}

	public get columnsType(): string[] {
		return Object.values(this._columns).map((e) => e.sqlType);
	}

	public get columnsName(): string[] {
		return Object.values(this._columns).map((e) => e.sqlName.toLowerCase());
	}

	public get sqlContent(): (string | number)[] {
		return Object.values(this._columns).map((e) => {
			if (!e || !e.value) {
				return "null";
			} else if (Number.isInteger(e.value)) {
				return e.value;
			} else {
				return `"${e.value}"`;
			}
		});
	}
}

export { PostgreRecord };
