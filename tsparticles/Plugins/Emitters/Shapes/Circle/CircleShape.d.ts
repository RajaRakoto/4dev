import type { IEmitterShape } from "../../IEmitterShape";
import type { ICoordinates } from "../../../../Core/Interfaces";
export declare class CircleShape implements IEmitterShape {
    randomPosition(position: ICoordinates, offset: ICoordinates, fill: boolean): ICoordinates;
}
