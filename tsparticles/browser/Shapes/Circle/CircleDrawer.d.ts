import type { IParticle, IShapeDrawer } from "../../Core/Interfaces";
/**
 * @category Shape Drawers
 */
export declare class CircleDrawer implements IShapeDrawer {
    getSidesCount(): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
