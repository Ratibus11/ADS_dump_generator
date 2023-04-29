import { PostgreColumn } from "../PostgreColumn";
import { PostgreRecord } from "../PostgreRecord";

type ArtisanPostgreObject = {};

class ArtisanPostgreRecord extends PostgreRecord<ArtisanPostgreObject> {
	protected _columns = {};

	protected override toObject(): ArtisanPostgreObject {
		return {};
	}
}

export { ArtisanPostgreRecord, ArtisanPostgreObject };
