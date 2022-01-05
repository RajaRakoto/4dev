import type { Container } from "./Container";
import type { IParticles } from "../Options/Interfaces/Particles/IParticles";
import { ParticlesOptions } from "../Options/Classes/Particles/ParticlesOptions";
import { ShapeType } from "../Enums";
import type { RecursivePartial } from "../Types";
import type { Stroke } from "../Options/Classes/Particles/Stroke";
import { Vector } from "./Particle/Vector";
import type { IBubbleParticleData, ICoordinates, ICoordinates3d, IDelta, IHsl, IParticle, IParticleGradientAnimation, IParticleHslAnimation, IParticleLife, IParticleNumericValueAnimation, IParticleSpin, IParticleTiltValueAnimation, IParticleValueAnimation, IRgb, IShapeValues, IParticleRetinaProps } from "./Interfaces";
import { Vector3d } from "./Particle/Vector3d";
import { IParticleRoll } from "./Interfaces/IParticleRoll";
import { IParticleWobble } from "./Interfaces/IParticleWobble";
/**
 * The single particle object
 * @category Core
 */
export declare class Particle implements IParticle {
    readonly id: number;
    readonly container: Container;
    readonly group?: string | undefined;
    destroyed: boolean;
    lastPathTime: number;
    misplaced: boolean;
    spawning: boolean;
    splitCount: number;
    unbreakable: boolean;
    readonly pathDelay: number;
    readonly sides: number;
    readonly options: ParticlesOptions;
    readonly life: IParticleLife;
    roll?: IParticleRoll;
    wobble?: IParticleWobble;
    backColor?: IHsl;
    close: boolean;
    fill: boolean;
    randomIndexData?: number;
    gradient?: IParticleGradientAnimation;
    rotate?: IParticleValueAnimation<number>;
    tilt?: IParticleTiltValueAnimation;
    color?: IParticleHslAnimation;
    opacity?: IParticleNumericValueAnimation;
    strokeWidth?: number;
    stroke?: Stroke;
    strokeColor?: IParticleHslAnimation;
    readonly moveDecay: number;
    readonly direction: number;
    readonly position: Vector3d;
    readonly offset: Vector;
    readonly shadowColor: IRgb | undefined;
    readonly size: IParticleNumericValueAnimation;
    readonly velocity: Vector;
    readonly shape: ShapeType | string;
    readonly spin?: IParticleSpin;
    readonly initialPosition: Vector;
    readonly initialVelocity: Vector;
    readonly shapeData?: IShapeValues;
    readonly bubble: IBubbleParticleData;
    readonly zIndexFactor: number;
    readonly retina: IParticleRetinaProps;
    constructor(id: number, container: Container, position?: ICoordinates, overrideOptions?: RecursivePartial<IParticles>, group?: string | undefined);
    isVisible(): boolean;
    isInsideCanvas(): boolean;
    draw(delta: IDelta): void;
    getPosition(): ICoordinates3d;
    getRadius(): number;
    getMass(): number;
    getFillColor(): IHsl | undefined;
    getStrokeColor(): IHsl | undefined;
    destroy(override?: boolean): void;
    /**
     * This method is used when the particle has lost a life and needs some value resets
     */
    reset(): void;
    private split;
    private calcPosition;
    private checkOverlap;
    private calculateVelocity;
    private loadShapeData;
    private loadLife;
}
