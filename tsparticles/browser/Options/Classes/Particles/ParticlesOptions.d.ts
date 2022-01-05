import type { IParticles } from "../../Interfaces/Particles/IParticles";
import { Links } from "./Links/Links";
import { Move } from "./Move/Move";
import { ParticlesNumber } from "./Number/ParticlesNumber";
import { Opacity } from "./Opacity/Opacity";
import { Shape } from "./Shape/Shape";
import { Size } from "./Size/Size";
import { Rotate } from "./Rotate/Rotate";
import type { RecursivePartial, SingleOrMultiple } from "../../../Types";
import { Shadow } from "./Shadow";
import { Stroke } from "./Stroke";
import { Collisions } from "./Collisions/Collisions";
import { Twinkle } from "./Twinkle/Twinkle";
import { AnimatableColor } from "../AnimatableColor";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { Life } from "./Life/Life";
import { Bounce } from "./Bounce/Bounce";
import { Destroy } from "./Destroy/Destroy";
import { Wobble } from "./Wobble/Wobble";
import { Tilt } from "./Tilt/Tilt";
import { Roll } from "./Roll/Roll";
import { ZIndex } from "./ZIndex/ZIndex";
import type { ParticlesGroups } from "../../../Types/ParticlesGroups";
import { Orbit } from "./Orbit/Orbit";
import { Repulse } from "./Repulse/Repulse";
import { AnimatableGradient } from "../AnimatableGradient";
/**
 * [[include:Options/Particles.md]]
 * @category Options
 */
export declare class ParticlesOptions implements IParticles, IOptionLoader<IParticles> {
    bounce: Bounce;
    collisions: Collisions;
    color: AnimatableColor;
    destroy: Destroy;
    gradient: SingleOrMultiple<AnimatableGradient>;
    groups: ParticlesGroups;
    life: Life;
    links: Links;
    move: Move;
    number: ParticlesNumber;
    opacity: Opacity;
    orbit: Orbit;
    reduceDuplicates: boolean;
    repulse: Repulse;
    roll: Roll;
    rotate: Rotate;
    shape: Shape;
    size: Size;
    shadow: Shadow;
    stroke: SingleOrMultiple<Stroke>;
    tilt: Tilt;
    twinkle: Twinkle;
    wobble: Wobble;
    zIndex: ZIndex;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     */
    get line_linked(): Links;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     * @param value
     */
    set line_linked(value: Links);
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get lineLinked(): Links;
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    set lineLinked(value: Links);
    constructor();
    load(data?: RecursivePartial<IParticles>): void;
}
