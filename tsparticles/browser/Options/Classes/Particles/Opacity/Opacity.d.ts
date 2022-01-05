import type { IOpacity } from "../../../Interfaces/Particles/Opacity/IOpacity";
import { OpacityAnimation } from "./OpacityAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
/**
 * [[include:Options/Particles/Opacity.md]]
 * @category Options
 */
export declare class Opacity extends ValueWithRandom implements IOpacity, IOptionLoader<IOpacity> {
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get anim(): OpacityAnimation;
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    set anim(value: OpacityAnimation);
    animation: OpacityAnimation;
    constructor();
    load(data?: RecursivePartial<IOpacity>): void;
}
