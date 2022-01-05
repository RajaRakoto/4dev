import type { IDivEvent } from "../../../Interfaces/Interactivity/Events/IDivEvent";
import { DivMode, DivType } from "../../../../Enums";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Interactivity/Div.md]]
 * @category Options
 */
export declare class DivEvent implements IDivEvent, IOptionLoader<IDivEvent> {
    /**
     * The element id to detect the event
     * @deprecated this property is obsolete, please use the new selectors
     */
    get elementId(): SingleOrMultiple<string>;
    /**
     * The element id to detect the event
     * @deprecated this property is obsolete, please use the new selectors
     * @param value
     */
    set elementId(value: SingleOrMultiple<string>);
    /**
     * The element id to detect the event
     * @deprecated this property is obsolete, please use the new selectors
     */
    get el(): SingleOrMultiple<string>;
    /**
     * The element id to detect the event
     * @deprecated this property is obsolete, please use the new selectors
     * @param value
     */
    set el(value: SingleOrMultiple<string>);
    /**
     * The element id to detect the event
     * @deprecated this property is obsolete, please use the new ids
     */
    get ids(): SingleOrMultiple<string>;
    /**
     * The element id to detect the event
     * @deprecated this property is obsolete, please use the new ids
     * @param value
     */
    set ids(value: SingleOrMultiple<string>);
    selectors: SingleOrMultiple<string>;
    /**
     * The div event handler enabling mode
     */
    enable: boolean;
    /**
     * Div mode values described in [[DivMode]], an array of these values is also valid.
     */
    mode: SingleOrMultiple<DivMode | keyof typeof DivMode | string>;
    type: DivType;
    constructor();
    load(data?: RecursivePartial<IDivEvent>): void;
}
