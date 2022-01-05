import type { IEmitterLife } from "../Interfaces/IEmitterLife";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
/**
 * @category Emitters Plugin
 */
export declare class EmitterLife implements IEmitterLife, IOptionLoader<IEmitterLife> {
    count?: number;
    delay?: number;
    duration?: number;
    wait: boolean;
    constructor();
    load(data?: RecursivePartial<IEmitterLife>): void;
}
