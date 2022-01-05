import type { IDrawStroke } from "../Interfaces/IDrawStroke";
import type { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
/**
 * @category Polygon Mask Plugin
 */
export declare class DrawStroke implements IDrawStroke, IOptionLoader<IDrawStroke> {
    color: OptionsColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IDrawStroke>): void;
}
