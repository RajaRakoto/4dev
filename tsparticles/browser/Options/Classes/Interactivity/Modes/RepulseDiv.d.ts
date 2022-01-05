import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IRepulseDiv } from "../../../Interfaces/Interactivity/Modes/IRepulseDiv";
import { RepulseBase } from "./RepulseBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class RepulseDiv extends RepulseBase implements IRepulseDiv, IOptionLoader<IRepulseDiv> {
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
    load(data?: RecursivePartial<IRepulseDiv>): void;
}
