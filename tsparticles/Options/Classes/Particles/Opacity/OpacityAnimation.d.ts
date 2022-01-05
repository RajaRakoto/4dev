import type { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { DestroyType, StartValueType } from "../../../../Enums";
import { AnimationOptions } from "../../AnimationOptions";
export declare class OpacityAnimation extends AnimationOptions implements IOpacityAnimation, IOptionLoader<IOpacityAnimation> {
    get opacity_min(): number | undefined;
    set opacity_min(value: number | undefined);
    minimumValue?: number;
    destroy: DestroyType | keyof typeof DestroyType;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<IOpacityAnimation>): void;
}
