import type { ICoordinates } from "../../../../Core/Interfaces";
import type { MoveDirection, MoveDirectionAlt } from "../../../../Enums";
import type { IParticles } from "../../../../Options/Interfaces/Particles/IParticles";
import type { IEmitterRate } from "./IEmitterRate";
import type { IEmitterLife } from "./IEmitterLife";
import type { RecursivePartial } from "../../../../Types";
import type { IEmitterSize } from "./IEmitterSize";
import type { IAnimatableColor } from "../../../../Options/Interfaces/IAnimatableColor";
import type { EmitterShapeType } from "../../Enums/EmitterShapeType";
export interface IEmitter {
    autoPlay: boolean;
    size?: IEmitterSize;
    direction?: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number;
    fill: boolean;
    life: IEmitterLife;
    name?: string;
    particles?: RecursivePartial<IParticles>;
    position?: RecursivePartial<ICoordinates>;
    rate: IEmitterRate;
    shape: EmitterShapeType | keyof typeof EmitterShapeType;
    spawnColor?: IAnimatableColor;
    startCount: number;
}
