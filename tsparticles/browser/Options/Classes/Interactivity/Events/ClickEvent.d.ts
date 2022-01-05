import type { IClickEvent } from "../../../Interfaces/Interactivity/Events/IClickEvent";
import { ClickMode } from "../../../../Enums";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Interactivity/Click.md]]
 * @category Options
 */
export declare class ClickEvent implements IClickEvent, IOptionLoader<IClickEvent> {
    /**
     * The click event handler enabling setting
     */
    enable: boolean;
    /**
     * Click mode values described in [[ClickMode]], an array of these values is also valid
     */
    mode: SingleOrMultiple<ClickMode | keyof typeof ClickMode | string>;
    constructor();
    load(data?: RecursivePartial<IClickEvent>): void;
}
