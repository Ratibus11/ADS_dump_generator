import { FixedSizeArray } from "../../utils/Array/FixedSizeArray";

type CsvRecordContainer<S extends number> = FixedSizeArray<S, string>;

export { CsvRecordContainer };
