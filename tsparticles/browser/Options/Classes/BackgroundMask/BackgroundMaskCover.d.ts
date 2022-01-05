import type { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";
import type { IBackgroundMaskCover } from "../../Interfaces/BackgroundMask/IBackgroundMaskCover";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class BackgroundMaskCover implements IBackgroundMaskCover, IOptionLoader<IBackgroundMaskCover> {
    color: OptionsColor;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IBackgroundMaskCover> | undefined): void;
}
