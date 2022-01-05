import { IParticle, IShapeDrawer } from "../../Core/Interfaces";
/**
 * @category Shape Drawers
 */
export declare class LineDrawer implements IShapeDrawer {
    getSidesCount(): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
