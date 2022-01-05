import { Range } from "./Range";
import type { ICoordinates } from "../Core/Interfaces";
/**
 * @category Utils
 */
export declare class Circle extends Range {
    readonly radius: number;
    constructor(x: number, y: number, radius: number);
    contains(point: ICoordinates): boolean;
    intersects(range: Range): boolean;
}
