import * as path from "path";
import * as fs from "fs";

import { Path } from "../../utils/Path/Path";
import { PostgreRecord } from "./PostgreRecord";

abstract class PostgreTable<R extends PostgreRecord<Object>> {
	private static readonly __PATH_TO_OUTPUT = path.resolve(Path.pathToJson, "tmp/postgre");
	private static readonly __PATH_TO_SQL = path.resolve(Path.pathToJson, "output");
	private static readonly __JSON_LIMIT: number = 1000;
	private static readonly __SQL_LIMIT: number = 1500000;

	protected get _columnTypes(): string[] {
		return this.__records[0].columnsType;
	}
	protected get _columnNames(): string[] {
		return this.__records[0].columnsName;
	}
	protected get _columnReferences(): { source: string; table: string; column: string }[] {
		return this.__records[0].references;
	}
	protected get _sqlContent(): (string | number)[][] {
		return this.__records.map((e) => e.sqlContent);
	}

	private readonly __name: string;
	protected __records: R[];

	constructor(name: string) {
		this.__name = name.toLowerCase();
		this.__records = [];
	}

	public saveAsJson(): void {
		const filePath = path.resolve(PostgreTable.__PATH_TO_OUTPUT, `${this.__name}.json`);

		fs.writeFileSync(filePath, "[");

		const toOutput = this.__records.slice(0, PostgreTable.__JSON_LIMIT);
		toOutput.forEach((record, i) => {
			fs.appendFileSync(filePath, record.toJson());

			if (i < this.__records.length - 1) {
				fs.appendFileSync(filePath, ",", {});
			}
		});

		fs.appendFileSync(filePath, "]");
		console.log(`${path.basename(path.dirname(filePath))} writed.`);
	}

	private get __sqlHeader(): string {
		const columns = this._columnNames
			.map((_, i) => `\t${this._columnNames[i]} ${this._columnTypes[i]}`)
			.join(",\n");
		const references = this._columnReferences
			.map(
				(r, i) =>
					`\tCONSTRAINT fk_${this.__name}_${r.table} FOREIGN KEY(${r.source}) REFERENCES ${r.table}(${r.column})`,
			)
			.join(",\n");

		return `CREATE TABLE ${this.__name} (\n${columns}${references.length > 0 ? ",\n" : ""}${references}\n);`;
	}

	private get __sqlInsertHeader(): string {
		return `INSERT INTO ${this.__name} (${this._columnNames.join(", ")}) VALUES\n`;
	}

	public saveAsSql(): void {
		const filePath = path.resolve(
			PostgreTable.__PATH_TO_SQL,
			`${this.__name}${this.__records.length <= PostgreTable.__SQL_LIMIT ? "" : "_1"}.sql`,
		);
		fs.writeFileSync(filePath, `${this.__sqlHeader}\n\n`);

		for (let fileIndex = 1; fileIndex <= Math.ceil(this.__records.length / PostgreTable.__SQL_LIMIT); fileIndex++) {
			const filePath = path.resolve(
				PostgreTable.__PATH_TO_SQL,
				`${this.__name}${this.__records.length <= PostgreTable.__SQL_LIMIT ? "" : `_${fileIndex}`}.sql`,
			);

			fs.appendFileSync(filePath, `${this.__sqlInsertHeader}`);

			const iMin = (fileIndex - 1) * PostgreTable.__SQL_LIMIT;
			const iMax =
				(fileIndex * PostgreTable.__SQL_LIMIT - 1 > this.__records.length
					? this.__records.length
					: fileIndex * PostgreTable.__SQL_LIMIT) - 1;

			for (let recordIndex = iMin; recordIndex <= iMax; recordIndex++) {
				fs.appendFileSync(filePath, `\t(${this.__records[recordIndex].sqlContent.join(", ")})`);
				fs.appendFileSync(filePath, recordIndex < iMax ? ",\n" : ";");
			}
		}
	}

	public prune() {
		this.__records.length = 0;
	}
}

export { PostgreTable };
