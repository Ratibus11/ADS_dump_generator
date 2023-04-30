import { MonnaieEntityRecord } from "src/classes/entities/records/MonnaieEntityRecord";
import { PostgreColumn } from "../PostgreColumn";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { IntegerPostgreColumn } from "../columns/IntegerPostgreColumn";

type MonnaiePostgreObject = { id: number; unite: string; valeur_bronze: number };

class MonnaiePostgreRecord extends PostgreRecord<MonnaiePostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		unit: PostgreColumn<string>;
		valueToMinimum: PostgreColumn<number>;
	};

	constructor(monnaie: MonnaieEntityRecord) {
		super();
		this._columns = {
			id: new SmallIntegerPostgreColumn("id", monnaie.id),
			unit: new VarcharPostgreColumn("unite", 20, monnaie.unit),
			valueToMinimum: new IntegerPostgreColumn("valeur_bronze", monnaie.valueToMinimum),
		};
	}

	protected toObject(): MonnaiePostgreObject {
		return {
			id: this._columns.id.value,
			unite: this._columns.unit.value,
			valeur_bronze: this._columns.valueToMinimum.value,
		};
	}
}

export { MonnaiePostgreRecord, MonnaiePostgreObject };
