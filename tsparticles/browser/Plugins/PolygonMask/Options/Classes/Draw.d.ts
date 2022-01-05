import type { IDraw } from "../Interfaces/IDraw";
import { DrawStroke } from "./DrawStroke";
import type { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
/**
 * @category Polygon Mask Plugin
 */
export declare class Draw implements IDraw, IOptionLoader<IDraw> {
    /**
     * @deprecated the property lineWidth is deprecated, please use the new stroke.width
     */
    get lineWidth(): number;
    /**
     * @deprecated the property lineWidth is deprecated, please use the new stroke.width
     */
    set lineWidth(value: number);
    /**
     * @deprecated the property lineColor is deprecated, please use the new stroke.color
     */
    get lineColor(): string | OptionsColor;
    /**
     * @deprecated the property lineColor is deprecated, please use the new stroke.color
     */
    set lineColor(value: string | OptionsColor);
    enable: boolean;
    stroke: DrawStroke;
    constructor();
    load(data?: RecursivePartial<IDraw>): void;
}
