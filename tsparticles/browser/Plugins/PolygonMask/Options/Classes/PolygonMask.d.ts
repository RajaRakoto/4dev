import type { IPolygonMask } from "../Interfaces/IPolygonMask";
import { InlineArrangement, InlineArrangementAlt, Type } from "../../Enums";
import { Draw } from "./Draw";
import { Move } from "./Move";
import { Inline } from "./Inline";
import type { RecursivePartial } from "../../../../Types";
import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { LocalSvg } from "./LocalSvg";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
/**
 * [[include:Options/Plugins/PolygonMask.md]]
 * @category Polygon Mask Plugin
 */
export declare class PolygonMask implements IPolygonMask, IOptionLoader<IPolygonMask> {
    /**
     * @deprecated the property inlineArrangement is deprecated, please use the new inline.arrangement
     */
    get inlineArrangement(): InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt;
    /**
     * @deprecated the property inlineArrangement is deprecated, please use the new inline.arrangement
     */
    set inlineArrangement(value: InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt);
    draw: Draw;
    enable: boolean;
    inline: Inline;
    move: Move;
    position?: ICoordinates;
    scale: number;
    type: Type;
    url?: string;
    data?: string | LocalSvg;
    constructor();
    load(data?: RecursivePartial<IPolygonMask>): void;
}
