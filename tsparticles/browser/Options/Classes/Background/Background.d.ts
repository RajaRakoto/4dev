import type { IBackground } from "../../Interfaces/Background/IBackground";
import type { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Background.md]]
 * @category Options
 */
export declare class Background implements IBackground, IOptionLoader<IBackground> {
    color: OptionsColor;
    image: string;
    position: string;
    repeat: string;
    size: string;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IBackground>): void;
}
