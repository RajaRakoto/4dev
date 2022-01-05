import type { IParticle } from "../Core/Interfaces/IParticle";
import type { Container } from "../Core/Container";
import type { IDelta } from "../Core/Interfaces/IDelta";
import { Particle } from "../Core/Particle";
/**
 * @category Types
 */
export declare type ShapeDrawerDrawFunction = (context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: IDelta, pixelRatio: number) => void;
/**
 * @category Types
 */
export declare type ShapeDrawerInitFunction = (container: Container) => Promise<void>;
/**
 * @category Types
 */
export declare type ShapeDrawerParticleInitFunction = (container: Container, particle: IParticle) => void;
/**
 * @category Types
 */
export declare type ShapeDrawerAfterEffectFunction = (context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: IDelta, pixelRatio: number) => void;
/**
 * @category Types
 */
export declare type ShapeDrawerDestroyFunction = (container: Container) => void;
/**
 * @category Types
 */
export declare type ShapeDrawerSidesCountFunction = (particle: IParticle) => number;
/**
 * @category Types
 */
export declare type ShapeDrawerLoadFunction = (particle: Particle) => void;
