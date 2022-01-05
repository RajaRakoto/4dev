import type { IBubble } from "../../../Interfaces/Interactivity/Modes/IBubble";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { BubbleDiv } from "./BubbleDiv";
import { BubbleBase } from "./BubbleBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class Bubble extends BubbleBase implements IBubble, IOptionLoader<IBubble> {
    divs?: SingleOrMultiple<BubbleDiv>;
    load(data?: RecursivePartial<IBubble>): void;
}
