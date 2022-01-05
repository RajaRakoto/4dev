import type { ITwinkle } from "../../../Interfaces/Particles/Twinkle/ITwinkle";
import type { RecursivePartial } from "../../../../Types";
import { TwinkleValues } from "./TwinkleValues";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Particles/Twinkle.md]]
 * @category Options
 */
export declare class Twinkle implements ITwinkle, IOptionLoader<ITwinkle> {
    lines: TwinkleValues;
    particles: TwinkleValues;
    constructor();
    load(data?: RecursivePartial<ITwinkle>): void;
}
