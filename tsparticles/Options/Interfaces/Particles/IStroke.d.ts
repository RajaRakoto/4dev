import type { IAnimatableColor } from "../IAnimatableColor";
import type { IColor } from "../../../Core/Interfaces";
export interface IStroke {
    color?: string | IAnimatableColor | IColor;
    opacity?: number;
    width: number;
}
