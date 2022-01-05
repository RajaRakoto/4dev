import type { IInteractivity } from "../../Interfaces/Interactivity/IInteractivity";
import { InteractivityDetect } from "../../../Enums";
import { Events } from "./Events/Events";
import { Modes } from "./Modes/Modes";
import type { RecursivePartial } from "../../../Types";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Interactivity.md]]
 * @category Options
 */
export declare class Interactivity implements IInteractivity, IOptionLoader<IInteractivity> {
    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     */
    get detect_on(): InteractivityDetect | keyof typeof InteractivityDetect;
    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     * @param value
     */
    set detect_on(value: InteractivityDetect | keyof typeof InteractivityDetect);
    detectsOn: InteractivityDetect | keyof typeof InteractivityDetect;
    events: Events;
    modes: Modes;
    constructor();
    load(data?: RecursivePartial<IInteractivity>): void;
}
