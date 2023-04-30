import { ArtisanEntityRecord } from "src/classes/entities/records/ArtisanEntityRecord";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";

type ArtisanPostgreObject = { id: number; nom: string };

class ArtisanPostgreRecord extends PostgreRecord<ArtisanPostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
	};

	constructor(artisan: ArtisanEntityRecord) {
		super();
		this._columns = {
			id: new SmallIntegerPostgreColumn("id", artisan.id),
			name: new VarcharPostgreColumn("nom", 20, artisan.name),
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
