import type { IMove } from "../../../Interfaces/Particles/Move/IMove";
import { Attract } from "./Attract";
import { MoveDirection, MoveDirectionAlt, OutMode, OutModeAlt } from "../../../../Enums";
import { Trail } from "./Trail";
import type { RangeValue, RecursivePartial } from "../../../../Types";
import { Path } from "./Path/Path";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { MoveAngle } from "./MoveAngle";
import { MoveGravity } from "./MoveGravity";
import { OutModes } from "./OutModes";
import type { IDistance } from "../../../../Core/Interfaces";
import { Spin } from "./Spin";
/**
 * [[include:Options/Particles/Move.md]]
 * @category Options
 */
export declare class Move implements IMove, IOptionLoader<IMove> {
    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     */
    get collisions(): boolean;
    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     * @param value
     */
    set collisions(value: boolean);
    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     */
    get bounce(): boolean;
    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     * @param value
     */
    set bounce(value: boolean);
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    get out_mode(): OutMode | keyof typeof OutMode | OutModeAlt;
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    set out_mode(value: OutMode | keyof typeof OutMode | OutModeAlt);
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    get outMode(): OutMode | keyof typeof OutMode | OutModeAlt;
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    set outMode(value: OutMode | keyof typeof OutMode | OutModeAlt);
    /**
     * @deprecated use the new [[path]] property instead
     */
    get noise(): Path;
    /**
     * @deprecated use the new [[path]] property instead
     */
    set noise(value: Path);
    angle: MoveAngle;
    attract: Attract;
    direction: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number;
    distance: Partial<IDistance>;
    decay: number;
    drift: RangeValue;
    enable: boolean;
    gravity: MoveGravity;
    path: Path;
    outModes: OutModes;
    random: boolean;
    size: boolean;
    speed: RangeValue;
    spin: Spin;
    straight: boolean;
    trail: Trail;
    vibrate: boolean;
    warp: boolean;
    constructor();
    load(data?: RecursivePartial<IMove>): void;
}
