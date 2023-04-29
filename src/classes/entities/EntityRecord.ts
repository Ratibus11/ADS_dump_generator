abstract class EntityRecord<O extends Object> {
	protected abstract toObject(): O;

	public toJson(): string {
		return JSON.stringify(this.toObject()).replaceAll('\\"', "");
	}
}

export { EntityRecord };
