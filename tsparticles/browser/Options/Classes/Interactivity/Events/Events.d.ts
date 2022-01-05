import type { IEvents } from "../../../Interfaces/Interactivity/Events/IEvents";
import { ClickEvent } from "./ClickEvent";
import { DivEvent } from "./DivEvent";
import { HoverEvent } from "./HoverEvent";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Interactivity/Events.md]]
 * @category Options
 */
export declare class Events implements IEvents, IOptionLoader<IEvents> {
    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     */
    get onclick(): ClickEvent;
    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     * @param value
     */
    set onclick(value: ClickEvent);
    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     */
    get ondiv(): SingleOrMultiple<DivEvent>;
    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     * @param value
     */
    set ondiv(value: SingleOrMultiple<DivEvent>);
    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     */
    get onhover(): HoverEvent;
    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     * @param value
     */
    set onhover(value: HoverEvent);
    onClick: ClickEvent;
    onDiv: SingleOrMultiple<DivEvent>;
    onHover: HoverEvent;
    resize: boolean;
    constructor();
    load(data?: RecursivePartial<IEvents>): void;
}
