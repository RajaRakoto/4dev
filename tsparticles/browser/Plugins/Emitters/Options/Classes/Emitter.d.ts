import type { IEmitter } from "../Interfaces/IEmitter";
import type { RecursivePartial } from "../../../../Types";
import type { ICoordinates } from "../../../../Core/Interfaces";
import { MoveDirection, MoveDirectionAlt } from "../../../../Enums";
import type { IParticles } from "../../../../Options/Interfaces/Particles/IParticles";
import { EmitterRate } from "./EmitterRate";
import { EmitterLife } from "./EmitterLife";
import { EmitterSize } from "./EmitterSize";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import { AnimatableColor } from "../../../../Options/Classes/AnimatableColor";
import { EmitterShapeType } from "../../Enums";
/**
 * [[include:Options/Plugins/Emitters.md]]
 * @category Emitters Plugin
 */
export declare class Emitter implements IEmitter, IOptionLoader<IEmitter> {
    autoPlay: boolean;
    size?: EmitterSize;
    direction?: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number;
    fill: boolean;
    life: EmitterLife;
    name?: string;
    particles?: RecursivePartial<IParticles>;
    position?: RecursivePartial<ICoordinates>;
    rate: EmitterRate;
    shape: EmitterShapeType | keyof typeof EmitterShapeType;
    spawnColor?: AnimatableColor;
    startCount: number;
    constructor();
    load(data?: RecursivePartial<IEmitter>): void;
}
