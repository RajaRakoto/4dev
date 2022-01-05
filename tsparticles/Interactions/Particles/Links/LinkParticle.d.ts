import type { Particle } from "../../../Core/Particle";
import type { ILink } from "./ILink";
export declare type LinkParticle = Particle & {
    links: ILink[];
};
