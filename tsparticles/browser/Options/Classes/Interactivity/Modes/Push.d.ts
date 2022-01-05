import type { IPush } from "../../../Interfaces/Interactivity/Modes/IPush";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class Push implements IPush, IOptionLoader<IPush> {
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
    default: boolean;
    groups: string[];
    quantity: number;
    constructor();
    load(data?: RecursivePartial<IPush>): void;
}
