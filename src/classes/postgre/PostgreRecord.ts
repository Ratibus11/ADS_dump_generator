import { PostgreColumn } from "./PostgreColumn";

abstract class PostgreRecord<O extends Object> {
	protected abstract _columns: { [key: string]: PostgreColumn<number | string> };

	protected abstract toObject(): O;

	public toJson(): string {
		return JSON.stringify(this.toObject()).replaceAll('\\"', "");
	}
}

export { PostgreRecord };
