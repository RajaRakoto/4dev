import type { IRepulse } from "../../../Interfaces/Particles/Repulse/IRepulse";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
/**
 * @category Options
 */
export declare class Repulse extends ValueWithRandom implements IRepulse, IOptionLoader<IRepulse> {
    enabled: boolean;
    distance: number;
    duration: number;
    factor: number;
    speed: number;
    constructor();
    load(data?: RecursivePartial<IRepulse>): void;
}
