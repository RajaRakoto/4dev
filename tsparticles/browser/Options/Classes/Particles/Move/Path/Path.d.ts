import type { IPath } from "../../../../Interfaces/Particles/Move/Path/iPath";
import type { RecursivePartial, PathOptions } from "../../../../../Types";
import { PathDelay } from "./PathDelay";
import type { IOptionLoader } from "../../../../Interfaces/IOptionLoader";
/**
 * @category Options
 */
export declare class Path implements IPath, IOptionLoader<IPath> {
    clamp: boolean;
    delay: PathDelay;
    enable: boolean;
    options: PathOptions;
    generator?: string;
    constructor();
    load(data?: RecursivePartial<IPath>): void;
}
