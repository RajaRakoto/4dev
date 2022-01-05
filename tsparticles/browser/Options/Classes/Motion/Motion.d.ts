import type { IMotion } from "../../Interfaces/Motion/IMotion";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../Types";
import { MotionReduce } from "./MotionReduce";
/**
 * [[include:Options/Motion.md]]
 * @category Options
 */
export declare class Motion implements IMotion, IOptionLoader<IMotion> {
    /**
     * Disables motions for users with `prefer-reduced-motion` enabled
     */
    disable: boolean;
    /**
     * Reduce motion settings for users with `prefer-reduced-motion` enabled
     * If [[disable]] is `true` these values will be ignored
     */
    reduce: MotionReduce;
    constructor();
    load(data?: RecursivePartial<IMotion>): void;
}
