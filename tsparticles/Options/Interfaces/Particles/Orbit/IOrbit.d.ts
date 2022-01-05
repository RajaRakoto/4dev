import type { IColor } from "../../../../Core/Interfaces";
import type { IValueWithRandom } from "../../IValueWithRandom";
import type { IAnimation } from "../../IAnimation";
import type { IAnimatable } from "../../IAnimatable";
export interface IOrbit extends IAnimatable<IAnimation> {
    color?: string | IColor;
    enable: boolean;
    radius?: number;
    rotation: IValueWithRandom;
    opacity: number;
    width: number;
}
