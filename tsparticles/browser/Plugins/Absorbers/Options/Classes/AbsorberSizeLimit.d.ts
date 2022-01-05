import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IAbsorberSizeLimit } from "../Interfaces/IAbsorberSizeLimit";
export declare class AbsorberSizeLimit implements IAbsorberSizeLimit, IOptionLoader<IAbsorberSizeLimit> {
    radius: number;
    mass: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSizeLimit>): void;
}
