import type { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { DestroyType, StartValueType } from "../../../../Enums";
import { AnimationOptions } from "../../AnimationOptions";
/**
 * @category Options
 */
export declare class OpacityAnimation extends AnimationOptions implements IOpacityAnimation, IOptionLoader<IOpacityAnimation> {
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get opacity_min(): number | undefined;
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    set opacity_min(value: number | undefined);
    /**
     * @deprecated this property is obsolete, please use the new min/max object in the opacity value
     */
    minimumValue?: number;
    destroy: DestroyType | keyof typeof DestroyType;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<IOpacityAnimation>): void;
}
