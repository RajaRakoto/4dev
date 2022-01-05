import { Particle } from "../../Core/Particle";
import type { IDelta, IParticleUpdater } from "../../Core/Interfaces";
import { Container } from "../../Core/Container";
export declare class ColorUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(particle: Particle): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
