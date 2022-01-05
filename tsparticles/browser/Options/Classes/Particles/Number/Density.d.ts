import type { IDensity } from "../../../Interfaces/Particles/Number/IDensity";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class Density implements IDensity, IOptionLoader<IDensity> {
    /**
     *
     * @deprecated this property is obsolete, please use the new area
     */
    get value_area(): number;
    /**
     *
     * @deprecated this property is obsolete, please use the new area
     * @param value
     */
    set value_area(value: number);
    area: number;
    enable: boolean;
    factor: number;
    constructor();
    load(data?: RecursivePartial<IDensity>): void;
}
