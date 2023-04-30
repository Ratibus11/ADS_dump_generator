import * as path from "path";
import * as fs from "fs";

import { EntityRecord } from "./EntityRecord";
import { Path } from "../../utils/Path/Path";

abstract class Entity<R extends EntityRecord<Object>> {
	private static readonly __PATH_TO_OUTPUT = path.resolve(Path.pathToJson, "tmp/entities");
	private static readonly __JSON_LIMIT: number = 1000;

	private readonly __name: string;
	protected __records: R[];

	constructor(name: string) {
		this.__name = name;
		this.__records = [];
	}

	public saveAsJson(): void {
		const filePath = path.resolve(Entity.__PATH_TO_OUTPUT, `${this.__name}.json`);

		fs.writeFileSync(filePath, "[");

		const toOutput = this.__records.slice(0, Entity.__JSON_LIMIT);
		toOutput.forEach((record, i) => {
			fs.appendFileSync(filePath, record.toJson());

			if (i < this.__records.length - 1) {
				fs.appendFileSync(filePath, ",", {});
			}
		});

		fs.appendFileSync(filePath, "]");
		console.log(`${path.basename(path.dirname(filePath))} writed.`);
	}

	protected find(value: any, callback: (record: R, index: number, obj: R[]) => boolean): R {
		const record = this.__records.find(callback);
		if (record == undefined) {
			throw Error(`Cannot find ${value} in ${this.__name}`);
		}
		return record;
	}

	public get records() {
		return this.__records;
	}
}

export { Entity };
