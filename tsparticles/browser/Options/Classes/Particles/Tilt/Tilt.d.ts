import { TiltAnimation } from "./TiltAnimation";
import { TiltDirection, TiltDirectionAlt } from "../../../../Enums";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
import type { ITilt } from "../../../Interfaces/Particles/Tilt/ITilt";
/**
 * [[include:Options/Particles/Rotate.md]]
 * @category Options
 */
export declare class Tilt extends ValueWithRandom implements ITilt, IOptionLoader<ITilt> {
    animation: TiltAnimation;
    direction: TiltDirection | keyof typeof TiltDirection | TiltDirectionAlt;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ITilt>): void;
}
