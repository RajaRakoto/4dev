import type { IValueWithRandom } from "../Options/Interfaces/IValueWithRandom";
import type { ICoordinates } from "../Core/Interfaces";
import { EasingType, MoveDirection, MoveDirectionAlt } from "../Enums";
import { RangeValue } from "../Types";
import { Vector } from "../Core/Particle/Vector";
/**
 * Clamps a number between a minimum and maximum value
 * @param num the source number
 * @param min the minimum value
 * @param max the maximum value
 */
export declare function clamp(num: number, min: number, max: number): number;
/**
 *
 * @param comp1
 * @param comp2
 * @param weight1
 * @param weight2
 */
export declare function mix(comp1: number, comp2: number, weight1: number, weight2: number): number;
export declare function randomInRange(r: RangeValue): number;
export declare function getRangeValue(value: RangeValue): number;
export declare function getRangeMin(value: RangeValue): number;
export declare function getRangeMax(value: RangeValue): number;
export declare function setRangeValue(source: RangeValue, value?: number): RangeValue;
export declare function getValue(options: IValueWithRandom): number;
/**
 * Gets the distance between two coordinates
 * @param pointA the first coordinate
 * @param pointB the second coordinate
 */
export declare function getDistances(pointA: ICoordinates, pointB: ICoordinates): {
    dx: number;
    dy: number;
    distance: number;
};
/**
 * Gets the distance between two coordinates
 * @param pointA the first coordinate
 * @param pointB the second coordinate
 */
export declare function getDistance(pointA: ICoordinates, pointB: ICoordinates): number;
export declare function getParticleDirectionAngle(direction: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number): number;
/**
 * Get Particle base velocity
 * @param direction the direction to use for calculating the velocity
 */
export declare function getParticleBaseVelocity(direction: number): Vector;
export declare function collisionVelocity(v1: Vector, v2: Vector, m1: number, m2: number): Vector;
export declare function calcEasing(value: number, type: EasingType): number;
