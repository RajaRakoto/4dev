import type { IOrbit } from "../../../Interfaces/Particles/Orbit/IOrbit";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { OrbitRotation } from "./OrbitRotation";
import { OptionsColor } from "../../OptionsColor";
import { AnimationOptions } from "../../AnimationOptions";
import type { IAnimatable } from "../../../Interfaces/IAnimatable";
export declare class Orbit implements IOrbit, IOptionLoader<IOrbit>, IAnimatable<AnimationOptions> {
    animation: AnimationOptions;
    enable: boolean;
    opacity: number;
    width: number;
    color?: OptionsColor;
    radius?: number;
    rotation: OrbitRotation;
    constructor();
    load(data?: RecursivePartial<IOrbit>): void;
}
