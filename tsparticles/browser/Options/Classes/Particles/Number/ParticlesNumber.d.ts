import type { IParticlesNumber } from "../../../Interfaces/Particles/Number/IParticlesNumber";
import { Density } from "./Density";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Particles/Number.md]]
 * @category Options
 */
export declare class ParticlesNumber implements IParticlesNumber, IOptionLoader<IParticlesNumber> {
    /**
     * @deprecated the max property is deprecated, please use the new limit
     */
    get max(): number;
    /**
     * @deprecated the max property is deprecated, please use the new limit
     */
    set max(value: number);
    density: Density;
    limit: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IParticlesNumber>): void;
}
