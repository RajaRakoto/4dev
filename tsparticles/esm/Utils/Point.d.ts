import type { ICoordinates } from "../Core/Interfaces";
import type { Particle } from "../Core/Particle";
export declare class Point {
    readonly position: ICoordinates;
    readonly particle: Particle;
    constructor(position: ICoordinates, particle: Particle);
}
