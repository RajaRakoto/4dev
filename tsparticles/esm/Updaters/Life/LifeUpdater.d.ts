import { Particle } from "../../Core/Particle";
import type { IDelta, IParticleUpdater } from "../../Core/Interfaces";
import type { Container } from "../../Core/Container";
export declare class LifeUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
