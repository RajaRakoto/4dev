import type { Container } from "./Container";
import type { Particle } from "./Particle";
/**
 * @category Core
 */
export declare class Retina {
    private readonly container;
    reduceFactor: number;
    bubbleModeDistance: number;
    bubbleModeSize?: number;
    connectModeDistance: number;
    connectModeRadius: number;
    grabModeDistance: number;
    repulseModeDistance: number;
    attractModeDistance: number;
    attractDistance: number;
    slowModeRadius: number;
    linksDistance: number;
    linksWidth: number;
    sizeAnimationSpeed: number;
    pixelRatio: number;
    bounceModeDistance: number;
    maxSpeed: number;
    orbitRadius?: number;
    constructor(container: Container);
    /**
     * Initializes all the values needing a pixel ratio factor (sizes, widths, distances)
     */
    init(): void;
    initParticle(particle: Particle): void;
    private handleMotionChange;
}
