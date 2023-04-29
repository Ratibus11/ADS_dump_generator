import * as path from "path";

abstract class Path {
	private static readonly __PATH_TO_JSON = path.resolve(process.cwd(), "src/assets");

	public static get pathToJson(): typeof Path.__PATH_TO_JSON {
		return Path.__PATH_TO_JSON;
	}
}

export { Path };
