import type { ICoordinates } from "../Core/Interfaces";
export declare abstract class Range {
    readonly position: ICoordinates;
    protected constructor(x: number, y: number);
    abstract contains(point: ICoordinates): boolean;
    abstract intersects(range: Range): boolean;
}
