import type { IAttract } from "../../../Interfaces/Particles/Move/IAttract";
import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class Attract implements IAttract, IOptionLoader<IAttract> {
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     */
    get rotateX(): number;
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     * @param value
     */
    set rotateX(value: number);
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     */
    get rotateY(): number;
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     * @param value
     */
    set rotateY(value: number);
    distance: number;
    enable: boolean;
    rotate: ICoordinates;
    constructor();
    load(data?: RecursivePartial<IAttract>): void;
}
