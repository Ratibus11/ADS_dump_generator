abstract class PostgreTable<R extends PostgreRecord<Object>> {
	private readonly __tableName: string;

	constructor(tableName: string) {
		this.__tableName = tableName;
	}
}

export { PostgreTable };
