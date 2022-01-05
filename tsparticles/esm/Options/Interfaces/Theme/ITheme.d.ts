import type { RecursivePartial } from "../../../Types";
import type { IThemeDefault } from "./IThemeDefault";
import type { IOptions } from "../IOptions";
export interface ITheme {
    name: string;
    default: IThemeDefault;
    options?: RecursivePartial<IOptions>;
}
