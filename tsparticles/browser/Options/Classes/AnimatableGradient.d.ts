import type { IAnimatableGradient } from "../Interfaces/IAnimatableGradient";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import { GradientType, RotateDirection, RotateDirectionAlt, StartValueType } from "../../Enums";
import type { IGradientAngle, IGradientColorOpacity } from "../../Core/Interfaces";
import type { IAnimatable } from "../Interfaces/IAnimatable";
import type { IAnimation } from "../Interfaces/IAnimation";
import type { RangeValue, RecursivePartial } from "../../Types";
import type { IAnimatableGradientColor, IGradientColorOpacityAnimation } from "../Interfaces/IOptionsGradient";
import { AnimatableColor } from "./AnimatableColor";
export declare class AnimatableGradient implements IAnimatableGradient, IOptionLoader<IAnimatableGradient> {
    angle: GradientAngle;
    colors: AnimatableGradientColor[];
    type: GradientType;
    constructor();
    load(data?: RecursivePartial<IAnimatableGradient>): void;
}
export declare class GradientAngle implements IGradientAngle, IAnimatable<IAnimation>, IOptionLoader<IGradientAngle & IAnimatable<IAnimation>> {
    animation: GradientAngleAnimation;
    value: number;
    direction: RotateDirection | keyof typeof RotateDirection | RotateDirectionAlt;
    constructor();
    load(data?: RecursivePartial<IGradientAngle & IAnimatable<IAnimation>>): void;
}
export declare class GradientColorOpacity implements IGradientColorOpacity, IAnimatable<GradientColorOpacityAnimation>, IOptionLoader<IGradientColorOpacity & IAnimatable<IGradientColorOpacityAnimation>> {
    animation: GradientColorOpacityAnimation;
    value: RangeValue;
    constructor();
    load(data?: RecursivePartial<IGradientColorOpacity & IAnimatable<IAnimation>>): void;
}
export declare class AnimatableGradientColor implements IAnimatableGradientColor, IOptionLoader<IAnimatableGradientColor> {
    stop: number;
    value: AnimatableColor;
    opacity?: GradientColorOpacity;
    constructor();
    load(data?: RecursivePartial<IAnimatableGradientColor>): void;
}
export declare class GradientAngleAnimation implements IAnimation, IOptionLoader<IAnimation> {
    count: number;
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IAnimation>): void;
}
export declare class GradientColorOpacityAnimation implements IGradientColorOpacityAnimation, IOptionLoader<IGradientColorOpacityAnimation> {
    count: number;
    enable: boolean;
    speed: number;
    sync: boolean;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<IGradientColorOpacityAnimation>): void;
}
