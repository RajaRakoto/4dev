import type { DestroyType, StartValueType } from "../../../../Enums";
import type { IAnimation } from "../../IAnimation";
export interface IOpacityAnimation extends IAnimation {
    opacity_min?: number;
    minimumValue?: number;
    destroy: DestroyType | keyof typeof DestroyType;
    startValue: StartValueType | keyof typeof StartValueType;
}
