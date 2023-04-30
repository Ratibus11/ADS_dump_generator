import { ArtisanEntityRecord } from "src/classes/entities/records/ArtisanEntityRecord";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";
import { SmallSerialPostgreColumn } from "../columns/SmallSerialPostgreColumn";

type ArtisanPostgreObject = { id: number; nom: string };

class ArtisanPostgreRecord extends PostgreRecord<ArtisanPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
	};

	constructor(artisan: ArtisanEntityRecord) {
		super();
		this._columns = {
			id: new SmallSerialPostgreColumn("id", artisan.id, false, undefined, true),
			name: new VarcharPostgreColumn("nom", 20, artisan.name, false, undefined, true),
		};
	}

	protected toObject(): ArtisanPostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
		};
	}
}

export { ArtisanPostgreRecord, ArtisanPostgreObject };
