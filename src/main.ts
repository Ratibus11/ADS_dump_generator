import { CsvFile } from "./classes/csv/CsvFile";
import { PostgreTable } from "./classes/postgre/PostgreTable";
import { DemiDieuxCsvFile } from "./classes/csv/files/DemiDieuxCsvFile";
import { GuerresCsvFile } from "./classes/csv/files/GuerresCsvFile";
import { MoisCsvFile } from "./classes/csv/files/MoisCsvFile";
import { MonnaiesCsvFile } from "./classes/csv/files/MonnaiesCsvFile";
import { ProvincesCsvFile } from "./classes/csv/files/ProvincesCsvFile";
import { VentesCsvFile } from "./classes/csv/files/VentesCsvFile";
import { CsvRecord } from "./classes/csv/CsvRecord";

type Input = CsvFile<CsvRecord>;
type Output = PostgreTable;

type Inputs = { [key: string]: Input };
type Outputs = { [key: string]: Output };

const inputs: Inputs = {
	demiDieux: new DemiDieuxCsvFile(),
	guerres: new GuerresCsvFile(),
	mois: new MoisCsvFile(),
	monnaies: new MonnaiesCsvFile(),
	provinces: new ProvincesCsvFile(),
	ventes: new VentesCsvFile(),
};
