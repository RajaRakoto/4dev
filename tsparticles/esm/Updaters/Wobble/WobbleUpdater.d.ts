import type { IDelta, IParticleUpdater } from "../../Core/Interfaces";
import type { Particle } from "../../Core/Particle";
import type { Container } from "../../Core/Container";
declare type WobbleParticle = Particle & {
    retina: {
        wobbleDistance?: number;
    };
};
export declare class WobbleUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(particle: WobbleParticle): void;
    isEnabled(particle: WobbleParticle): boolean;
    update(particle: WobbleParticle, delta: IDelta): void;
}
export {};
