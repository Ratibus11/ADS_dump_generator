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
import { DecorerCommandeDecorationPostgreTable } from "./classes/postgre/tables/DecorerCommandeDecorationPostgreTable";
import { DecorerDecorationDieuPostgreTable } from "./classes/postgre/tables/DecorerDecorartionDieuPostgreTable";
import { DieuPostgreTable } from "./classes/postgre/tables/DieuPostgreTable";
import { EnchanterCommandePouvoirPostgreTable } from "./classes/postgre/tables/EnchanterCommandePouvoirPostgreTable";
import { EnchanterDieuPouvoirPostgreTable } from "./classes/postgre/tables/EnchanterDieuPouvoirPostgreTable";
import { MoisPostgreTable } from "./classes/postgre/tables/MoisPostgreTable";
import { MonnaiePostgreTable } from "./classes/postgre/tables/MonnaiePostgreTable";
import { ObjetPostgreTable } from "./classes/postgre/tables/ObjetPostgreTable";
import { PouvoirPostgreTable } from "./classes/postgre/tables/PouvoirPostgreTable";
import { ProvincePostgreTable } from "./classes/postgre/tables/ProvincePostgreTable";
import { RealiserPostgreTable } from "./classes/postgre/tables/RealiserPostgreTable";

const inputs = {
	demiDieux: new DemiDieuxCsvFile(),
	guerres: new GuerresCsvFile(),
	mois: new MoisCsvFile(),
	monnaies: new MonnaiesCsvFile(),
	provinces: new ProvincesCsvFile(),
	ventes: new VentesCsvFile(),
};

Object.values(inputs).forEach((input) => input.saveAsJson());

const entites = {
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

entites.artisans.inserts(UniqueArray.of(inputs.ventes.makersNames).sort());
entites.commandes.inserts(
	inputs.ventes.quantities,
	inputs.ventes.payments.map((e) => Object.values(e) as [number, number, number]),
);
entites.decorations.inserts(UniqueArray.of(inputs.ventes.decorations).sort());
entites.dieux.inserts(UniqueArray.of(inputs.demiDieux.gods).sort());
entites.mois.inserts(UniqueArray.of(inputs.mois.months).sort());
entites.monnaies.inserts(
	(lodash.zip(inputs.monnaies.units, inputs.monnaies.convertionsToMinimum) as [string, number][]).sort(
		(a, b) => b[1] - a[1],
	),
);
entites.objets.inserts(UniqueArray.of(inputs.ventes.objects).sort());
entites.pouvoirs.inserts(UniqueArray.of(inputs.ventes.powers).sort());
entites.provinces.inserts(UniqueArray.of(inputs.provinces.regionNames).sort());

Object.values(entites).forEach((input) => input.saveAsJson());

const tables = {
	artisan: new ArtisanPostgreTable(),
	commande: new CommandePostgreTable(),
	couter: new CouterPostgreTable(),
	decoration: new DecorationPostgreTable(),
	decorerCommandeDecoration: new DecorerCommandeDecorationPostgreTable(),
	decorerDecorationDieu: new DecorerDecorationDieuPostgreTable(),
	dieu: new DieuPostgreTable(),
	enchanterCommandePouvoir: new EnchanterCommandePouvoirPostgreTable(),
	enchanterDieuPouvoir: new EnchanterDieuPouvoirPostgreTable(),
	mois: new MoisPostgreTable(),
	monnaie: new MonnaiePostgreTable(),
	objet: new ObjetPostgreTable(),
	pouvoir: new PouvoirPostgreTable(),
	province: new ProvincePostgreTable(),
	realiser: new RealiserPostgreTable(),
};

Object.values(tables).forEach((input) => input.saveAsJson());
