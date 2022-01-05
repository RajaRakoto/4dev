import type { IRemove } from "../../../Interfaces/Interactivity/Modes/IRemove";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class Remove implements IRemove, IOptionLoader<IRemove> {
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     */
    get particles_nb(): number;
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     * @param value
     */
    set particles_nb(value: number);
    quantity: number;
    constructor();
    load(data?: RecursivePartial<IRemove>): void;
}
