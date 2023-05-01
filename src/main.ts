import * as lodash from "lodash";

import { DemiDieuxCsvFile } from "./classes/csv/files/DemiDieuxCsvFile";
import { GuerresCsvFile } from "./classes/csv/files/GuerresCsvFile";
import { MoisCsvFile } from "./classes/csv/files/MoisCsvFile";
import { MonnaiesCsvFile } from "./classes/csv/files/MonnaiesCsvFile";
import { ProvincesCsvFile } from "./classes/csv/files/ProvincesCsvFile";
import { VentesCsvFile } from "./classes/csv/files/VentesCsvFile";
import { ArtisanEntity } from "./classes/entities/entities/ArtisanEntity";
import { CommandeEntity } from "./classes/entities/entities/CommandeEntity";
import { DecorationEntity } from "./classes/entities/entities/DecorationEntity";
import { DieuEntity } from "./classes/entities/entities/DieuEntity";
import { MoisEntity } from "./classes/entities/entities/MoisEntity";
import { MonnaieEntity } from "./classes/entities/entities/MonnaieEntity";
import { ObjetEntity } from "./classes/entities/entities/ObjetEntity";
import { PouvoirEntity } from "./classes/entities/entities/PouvoirEntity";
import { ProvinceEntity } from "./classes/entities/entities/ProvinceEntity";
import { UniqueArray } from "./utils/Array/UniqueArray";
import { ArtisanPostgreTable } from "./classes/postgre/tables/ArtisanPostgreTable";
import { CommandePostgreTable } from "./classes/postgre/tables/CommandePostgreTable";
import { CouterPostgreTable } from "./classes/postgre/tables/CouterPostgreTable";
import { DecorationPostgreTable } from "./classes/postgre/tables/DecorationPostgreTable";
import { DieuPostgreTable } from "./classes/postgre/tables/DieuPostgreTable";
import { EnchanterPostgreTable } from "./classes/postgre/tables/EnchanterPostgreTable";
import { MoisPostgreTable } from "./classes/postgre/tables/MoisPostgreTable";
import { MonnaiePostgreTable } from "./classes/postgre/tables/MonnaiePostgreTable";
import { ObjetPostgreTable } from "./classes/postgre/tables/ObjetPostgreTable";
import { PouvoirPostgreTable } from "./classes/postgre/tables/PouvoirPostgreTable";
import { ProvincePostgreTable } from "./classes/postgre/tables/ProvincePostgreTable";
import { RealiserPostgreTable } from "./classes/postgre/tables/RealiserPostgreTable";

let inputs = {
	demiDieux: new DemiDieuxCsvFile(),
	guerres: new GuerresCsvFile(),
	mois: new MoisCsvFile(),
	monnaies: new MonnaiesCsvFile(),
	provinces: new ProvincesCsvFile(),
	ventes: new VentesCsvFile(),
};

//Object.values(inputs).forEach((input) => input.saveAsJson());

let entities = {
	artisans: new ArtisanEntity(),
	commandes: new CommandeEntity(),
	decorations: new DecorationEntity(),
	dieux: new DieuEntity(),
	mois: new MoisEntity(),
	monnaies: new MonnaieEntity(),
	objets: new ObjetEntity(),
	pouvoirs: new PouvoirEntity(),
	provinces: new ProvinceEntity(),
};

entities.artisans.inserts(UniqueArray.of(inputs.ventes.makersNames.flat()).sort());
entities.objets.inserts(UniqueArray.of(inputs.ventes.objects).sort());
entities.dieux.inserts(UniqueArray.of(inputs.demiDieux.gods).sort());
entities.mois.inserts(UniqueArray.of(inputs.mois.months).sort(), inputs.mois.gods);
entities.pouvoirs.inserts(
	UniqueArray.of((inputs.ventes.powers.filter((e) => Array.isArray(e)) as string[][]).flat()).sort(),
	entities.dieux,
);
entities.provinces.inserts(UniqueArray.of(inputs.provinces.regionNames).sort());
entities.monnaies.inserts(
	(lodash.zip(inputs.monnaies.units, inputs.monnaies.convertionsToMinimum) as [string, number][]).sort(
		(a, b) => b[1] - a[1],
	),
);

entities.decorations.inserts(
	UniqueArray.of((inputs.ventes.decorations.filter((e) => e != null) as string[]).flat()).sort(),
	entities.dieux,
);

inputs.ventes.records.forEach((r) => {
	entities.commandes.insert(
		r.quantity,
		r.year,
		r.month,
		Object.values(r.payment).map((e) => e[1]) as [number, number, number],
		r.objectName,
		r.provinceName,
		r.decorationName,
		r.powersName,
		Object.values(r.payment).map((e) => e[0]) as [string, string, string],
		r.makersName,
	);
});

Object.values(inputs).forEach((entity) => entity.prune());
//Object.values(entities).forEach((entity) => entity.saveAsJson());

let tables = {
	artisan: new ArtisanPostgreTable(),
	commande: new CommandePostgreTable(),
	couter: new CouterPostgreTable(),
	decoration: new DecorationPostgreTable(),
	dieu: new DieuPostgreTable(),
	enchanter: new EnchanterPostgreTable(),
	mois: new MoisPostgreTable(),
	monnaie: new MonnaiePostgreTable(),
	objet: new ObjetPostgreTable(),
	pouvoir: new PouvoirPostgreTable(),
	province: new ProvincePostgreTable(),
	realiser: new RealiserPostgreTable(),
};

tables.artisan.inserts(entities.artisans.records);
//tables.artisan.saveAsJson();
tables.artisan.saveAsSql();

tables.province.inserts(entities.provinces.records);
//tables.province.saveAsJson();
tables.province.saveAsSql();

tables.dieu.inserts(entities.dieux.records);
//tables.dieu.saveAsJson();
tables.dieu.saveAsSql();

tables.monnaie.inserts(entities.monnaies.records);
//tables.monnaie.saveAsJson();
tables.monnaie.saveAsSql();

tables.objet.inserts(entities.objets.records);
//tables.objet.saveAsJson();
tables.objet.saveAsSql();

tables.decoration.inserts(entities.decorations.records, entities.dieux);
//tables.decoration.saveAsJson();
tables.decoration.saveAsSql();

tables.pouvoir.inserts(entities.pouvoirs.records, entities.dieux);
//tables.pouvoir.saveAsJson();
tables.pouvoir.saveAsSql();

tables.mois.inserts(entities.mois.records, entities.dieux);
//tables.mois.saveAsJson();
tables.mois.saveAsSql();

entities.commandes.records.forEach((e) =>
	tables.commande.insert(e, entities.objets, entities.provinces, entities.decorations, entities.mois),
);
//tables.commande.saveAsJson();
tables.commande.saveAsSql();
tables.commande.prune();

entities.commandes.records.forEach((e) => tables.couter.insert(e, entities.monnaies));
//tables.couter.saveAsJson();
tables.couter.saveAsSql();
tables.couter.prune();

entities.commandes.records.forEach((e) => tables.enchanter.insert(e, entities.pouvoirs));
//tables.enchanter.saveAsJson();
tables.enchanter.saveAsSql();
tables.enchanter.prune();

entities.commandes.records.forEach((e) => tables.realiser.insert(e, entities.artisans));
//tables.realiser.saveAsJson();
tables.realiser.saveAsSql();
