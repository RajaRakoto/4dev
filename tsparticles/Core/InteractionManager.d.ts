import type { Container } from "./Container";
import type { Particle } from "./Particle";
import type { IDelta } from "./Interfaces";
export declare class InteractionManager {
    private readonly container;
    private readonly externalInteractors;
    private readonly particleInteractors;
    constructor(container: Container);
    init(): void;
    externalInteract(delta: IDelta): void;
    particlesInteract(particle: Particle, delta: IDelta): void;
}
