import { ArtisanEntity } from "src/classes/entities/entities/ArtisanEntity";
import { PostgreRecord } from "../PostgreRecord";
import { CommandeEntityRecord } from "src/classes/entities/records/CommandeEntityRecord";
import { ArtisanEntityRecord } from "src/classes/entities/records/ArtisanEntityRecord";
import { PostgreColumn } from "../PostgreColumn";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";

type RealiserPostgreObject = { id_commande: number; id_artisan: number };

class RealiserPostgreRecord extends PostgreRecord<RealiserPostgreObject> {
	protected _columns: {
		id_commande: PostgreColumn<number>;
		id_artisan: PostgreColumn<number>;
	};

	constructor(commande: CommandeEntityRecord, artisan: string, artisans: ArtisanEntity) {
		super();
		this._columns = {
			id_commande: new IntegerPostgreColumn("id_commande", commande.id),
			id_artisan: new SmallIntegerPostgreColumn("id_artisan", artisans.findByName(artisan).id),
		};
	}

	protected toObject(): RealiserPostgreObject {
		return {
			id_commande: this._columns.id_commande.value,
			id_artisan: this._columns.id_artisan.value,
		};
	}
}

export { RealiserPostgreRecord, RealiserPostgreObject };
