abstract class PostgreRecord<O extends Object> {
	protected abstract toObject(): O;

	public toJson(): string {
		return JSON.stringify(this.toObject()).replaceAll('\\"', "");
	}
}
