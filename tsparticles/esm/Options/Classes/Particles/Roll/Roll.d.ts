import type { IRoll } from "../../../Interfaces/Particles/Roll/IRoll";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RangeValue, RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import { RollLight } from "./RollLight";
import { RollMode } from "../../../../Enums";
export declare class Roll implements IRoll, IOptionLoader<IRoll> {
    backColor?: OptionsColor;
    darken: RollLight;
    enable: boolean;
    enlighten: RollLight;
    mode: RollMode | keyof typeof RollMode;
    speed: RangeValue;
    constructor();
    load(data?: RecursivePartial<IRoll>): void;
}
