import type { Container } from "../../Core/Container";
import type { IEmitter } from "./Options/Interfaces/IEmitter";
import type { Emitters } from "./Emitters";
import type { IEmitterSize } from "./Options/Interfaces/IEmitterSize";
import type { ICoordinates, IDelta, IHsl } from "../../Core/Interfaces";
/**
 * @category Emitters Plugin
 */
export declare class EmitterInstance {
    #private;
    private readonly emitters;
    private readonly container;
    position: ICoordinates;
    size: IEmitterSize;
    emitterOptions: IEmitter;
    spawnColor?: IHsl;
    fill: boolean;
    readonly name?: string;
    private paused;
    private currentEmitDelay;
    private currentSpawnDelay;
    private currentDuration;
    private lifeCount;
    private duration?;
    private emitDelay?;
    private spawnDelay?;
    private readonly immortal;
    private readonly shape?;
    private readonly initialPosition?;
    private readonly particlesOptions;
    constructor(emitters: Emitters, container: Container, emitterOptions: IEmitter, position?: ICoordinates);
    externalPlay(): void;
    externalPause(): void;
    play(): void;
    pause(): void;
    resize(): void;
    update(delta: IDelta): void;
    private prepareToDie;
    private destroy;
    private calcPosition;
    private emit;
    private emitParticles;
    private setColorAnimation;
}
