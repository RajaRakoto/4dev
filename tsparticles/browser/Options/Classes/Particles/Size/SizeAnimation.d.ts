import type { ISizeAnimation } from "../../../Interfaces/Particles/Size/ISizeAnimation";
import type { RecursivePartial } from "../../../../Types";
import { DestroyType, StartValueType } from "../../../../Enums";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { AnimationOptions } from "../../AnimationOptions";
/**
 * @category Options
 */
export declare class SizeAnimation extends AnimationOptions implements ISizeAnimation, IOptionLoader<ISizeAnimation> {
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get size_min(): number | undefined;
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    set size_min(value: number | undefined);
    destroy: DestroyType | keyof typeof DestroyType;
    /**
     * @deprecated this property is obsolete, please use the new min/max object in the size value
     */
    minimumValue?: number;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<ISizeAnimation>): void;
}
