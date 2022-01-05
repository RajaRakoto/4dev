import type { ThemeMode } from "../../../Enums";
export interface IThemeDefault {
    auto: boolean;
    mode: ThemeMode | keyof ThemeMode;
    value: boolean;
}
