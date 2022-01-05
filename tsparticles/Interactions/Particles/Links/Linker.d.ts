import { Particle } from "../../../Core/Particle";
import type { Container } from "../../../Core/Container";
import { ParticlesInteractorBase } from "../../../Core/ParticlesInteractorBase";
import { LinkParticle } from "./LinkParticle";
export declare class Linker extends ParticlesInteractorBase {
    constructor(container: Container);
    isEnabled(particle: Particle): boolean;
    reset(): void;
    interact(p1: LinkParticle): void;
    private setColor;
}
