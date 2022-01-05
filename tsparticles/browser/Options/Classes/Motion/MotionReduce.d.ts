import type { IMotionReduce } from "../../Interfaces/Motion/IMotionReduce";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../Types";
/**
 * @category Options
 */
export declare class MotionReduce implements IMotionReduce, IOptionLoader<IMotionReduce> {
    /**
     * Factor used to reduce motion, the higher the value, the higher the motion reduction
     */
    factor: number;
    /**
     * Reduces motion settings for users with `prefer-reduced-motion` enabled
     */
    value: boolean;
    constructor();
    load(data?: RecursivePartial<IMotionReduce>): void;
}
