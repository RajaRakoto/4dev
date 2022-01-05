import type { ICoordinates, IParticle, IShapeDrawer } from "../../Core/Interfaces";
export interface ISideCount {
    numerator: number;
    denominator: number;
}
export interface ISide {
    count: ISideCount;
    length: number;
}
/**
 * @category Shape Drawers
 */
export declare abstract class PolygonDrawerBase implements IShapeDrawer {
    getSidesCount(particle: IParticle): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
    abstract getSidesData(particle: IParticle, radius: number): ISide;
    abstract getCenter(particle: IParticle, radius: number): ICoordinates;
}
