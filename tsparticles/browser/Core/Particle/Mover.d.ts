import type { Container } from "../Container";
import type { Particle } from "../Particle";
import type { IDelta } from "../Interfaces";
/**
 * @category Core
 */
export declare class Mover {
    private readonly container;
    constructor(container: Container);
    move(particle: Particle, delta: IDelta): void;
    private moveParticle;
    private spin;
    private applyPath;
    private moveParallax;
    private getProximitySpeedFactor;
}
