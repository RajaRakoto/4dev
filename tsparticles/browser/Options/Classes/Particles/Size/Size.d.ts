import type { ISize } from "../../../Interfaces/Particles/Size/ISize";
import { SizeAnimation } from "./SizeAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
/**
 * [[include:Options/Particles/Size.md]]
 * @category Options
 */
export declare class Size extends ValueWithRandom implements ISize, IOptionLoader<ISize> {
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get anim(): SizeAnimation;
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    set anim(value: SizeAnimation);
    animation: SizeAnimation;
    constructor();
    load(data?: RecursivePartial<ISize>): void;
}
