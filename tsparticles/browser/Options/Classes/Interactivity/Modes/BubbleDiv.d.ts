import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IBubbleDiv } from "../../../Interfaces/Interactivity/Modes/IBubbleDiv";
import { BubbleBase } from "./BubbleBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class BubbleDiv extends BubbleBase implements IBubbleDiv, IOptionLoader<IBubbleDiv> {
    /**
     * @deprecated This property is deprecated, please use the new selectors property
     */
    get ids(): SingleOrMultiple<string>;
    /**
     * @deprecated This property is deprecated, please use the new selectors property
     */
    set ids(value: SingleOrMultiple<string>);
    selectors: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IBubbleDiv>): void;
}
