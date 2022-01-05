import type { IParticle, IShapeDrawer } from "../../Core/Interfaces";
export declare class SquareDrawer implements IShapeDrawer {
    getSidesCount(): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
