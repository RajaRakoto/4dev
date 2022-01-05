import type { IDelta, IParticleUpdater } from "../../Core/Interfaces";
import type { Particle } from "../../Core/Particle";
import type { Container } from "../../Core/Container";
export declare class OutOfCanvasUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
    private updateOutMode;
    private destroy;
    private out;
    private bounce;
    private none;
}
