import type { ICoordinates } from "../../Core/Interfaces";
import type { IDrawStroke } from "./Options/Interfaces/IDrawStroke";
import type { ISvgPath } from "./Interfaces/ISvgPath";
import { Vector } from "../../Core/Particle/Vector";
export declare function drawPolygonMask(context: CanvasRenderingContext2D, rawData: ICoordinates[], stroke: IDrawStroke): void;
export declare function drawPolygonMaskPath(context: CanvasRenderingContext2D, path: Path2D, stroke: IDrawStroke, position: ICoordinates): void;
export declare function parsePaths(paths: ISvgPath[], scale: number, offset: ICoordinates): ICoordinates[];
export declare function calcClosestPtOnSegment(s1: ICoordinates, s2: ICoordinates, pos: ICoordinates): ICoordinates & {
    isOnSegment: boolean;
};
export declare function segmentBounce(start: ICoordinates, stop: ICoordinates, velocity: Vector): void;
