import { PostgreColumn } from "./PostgreColumn";
import { PostgreColumnContainer } from "./PostgreColumnContainer";

abstract class PostgreRecord<O extends Object> {
	protected abstract _columns: PostgreColumnContainer;

	protected abstract toObject(): O;

	public toJson(): string {
		return JSON.stringify(this.toObject()).replaceAll('\\"', "");
	}

	public get columnsType(): string[] {
		return Object.values(this._columns).map((e) => e.sqlType.toUpperCase());
	}

	public get columnsName(): string[] {
		return Object.values(this._columns).map((e) => e.sqlName.toLowerCase());
	}

	public get references(): { source: string; table: string; column: string }[] {
		return Object.values(this._columns)
			.map((e) =>
				e.reference
					? {
							source: e.reference.source.toLowerCase(),
							table: e.reference.table.toLowerCase(),
							column: e.reference.column.toLowerCase(),
					  }
					: null,
			)
			.filter((e) => e !== null) as { source: string; table: string; column: string }[];
	}

	public get sqlContent(): (string | number)[] {
		return Object.values(this._columns).map((e) => {
			if (!e || e.value == null) {
				return "null";
			} else if (Number.isInteger(e.value)) {
				return e.value;
			} else {
				return `'${(e.value as string).replaceAll("'", "''")}'`;
			}
		});
	}
}

export { PostgreRecord };
