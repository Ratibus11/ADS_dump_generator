import { EntityRecord } from "../entities/EntityRecord";
import { PostgreColumn } from "./PostgreColumn";

type PostgreColumnContainer = { [key: string]: PostgreColumn<string | number, boolean> };

export { PostgreColumnContainer };
