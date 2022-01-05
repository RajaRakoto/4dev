import type { Particle } from "../../Core/Particle";
import type { IDelta, IParticleUpdater } from "../../Core/Interfaces";
export declare class SizeUpdater implements IParticleUpdater {
    init(): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
