import * as path from "path";
import * as fs from "fs";

import { Path } from "src/utils/Path/Path";
import { PostgreRecord } from "./PostgreRecord";

abstract class PostgreTable<R extends PostgreRecord<Object>> {
	private static readonly __PATH_TO_OUTPUT = path.resolve(Path.pathToJson, "tmp/tables");
	private static readonly __JSON_LIMIT: number = 1000;

	private readonly __name: string;
	protected __records: R[];

	constructor(name: string) {
		this.__name = name.toUpperCase();
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
}

export { PostgreTable };
