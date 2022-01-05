import type { ISide } from "./PolygonDrawerBase";
import type { ICoordinates, IParticle } from "../../Core/Interfaces";
import { PolygonDrawerBase } from "./PolygonDrawerBase";
/**
 * @category Shape Drawers
 */
export declare class TriangleDrawer extends PolygonDrawerBase {
    getSidesCount(): number;
    getSidesData(particle: IParticle, radius: number): ISide;
    getCenter(particle: IParticle, radius: number): ICoordinates;
}
