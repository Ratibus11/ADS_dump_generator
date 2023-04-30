import { ProvinceEntityRecord } from "src/classes/entities/records/ProvinceEntityRecord";
import { PostgreColumnContainer } from "../PostgreColumnContainer";
import { PostgreRecord } from "../PostgreRecord";
import { SmallIntegerPostgreColumn } from "../columns/SmallIntegerPostgreColumn";
import { VarcharPostgreColumn } from "../columns/VarcharPostgreColumn";
import { PostgreColumn } from "../PostgreColumn";
import { SmallSerialPostgreColumn } from "../columns/SmallSerialPostgreColumn";

type ProvincePostgreObject = { id: number; nom: string };

class ProvincePostgreRecord extends PostgreRecord<ProvincePostgreObject> {
	protected _columns: {
		id: PostgreColumn<number>;
		name: PostgreColumn<string>;
	};

	constructor(province: ProvinceEntityRecord) {
		super();
		this._columns = {
			id: new SmallSerialPostgreColumn("id", province.id, undefined, true),
			name: new VarcharPostgreColumn("nom", 20, province.name, undefined, true),
		};
	}

	protected toObject(): ProvincePostgreObject {
		return {
			id: this._columns.id.value,
			nom: this._columns.name.value,
		};
	}
}

export { ProvincePostgreRecord, ProvincePostgreObject };
