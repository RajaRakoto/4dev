import type { IBounds, ICircleBouncer, ICoordinates, IDimension, IParticle } from "../Core/Interfaces";
import { DivMode, OutModeDirection } from "../Enums";
import type { ICharacterShape } from "../Options/Interfaces/Particles/Shape/ICharacterShape";
import type { SingleOrMultiple } from "../Types";
import { DivEvent } from "../Options/Classes/Interactivity/Events/DivEvent";
import type { IModeDiv } from "../Options/Interfaces/Interactivity/Modes/IModeDiv";
declare global {
    interface Window {
        customRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        customCancelRequestAnimationFrame: (handle: number) => void;
        webkitCancelRequestAnimationFrame: (handle: number) => void;
        mozCancelRequestAnimationFrame: (handle: number) => void;
        oCancelRequestAnimationFrame: (handle: number) => void;
        msCancelRequestAnimationFrame: (handle: number) => void;
    }
}
export declare function isSsr(): boolean;
export declare function animate(): (callback: FrameRequestCallback) => number;
export declare function cancelAnimation(): (handle: number) => void;
export declare function isInArray<T>(value: T, array: SingleOrMultiple<T>): boolean;
export declare function loadFont(character: ICharacterShape): Promise<void>;
export declare function arrayRandomIndex<T>(array: T[]): number;
export declare function itemFromArray<T>(array: T[], index?: number, useIndex?: boolean): T;
export declare function isPointInside(point: ICoordinates, size: IDimension, radius?: number, direction?: OutModeDirection): boolean;
export declare function areBoundsInside(bounds: IBounds, size: IDimension, direction?: OutModeDirection): boolean;
export declare function calculateBounds(point: ICoordinates, radius: number): IBounds;
export declare function deepExtend(destination: unknown, ...sources: unknown[]): unknown;
export declare function isDivModeEnabled(mode: DivMode, divs: SingleOrMultiple<DivEvent>): boolean;
export declare function divModeExecute(mode: DivMode, divs: SingleOrMultiple<DivEvent>, callback: (id: string, div: DivEvent) => void): void;
export declare function singleDivModeExecute(div: DivEvent, callback: (selector: string, div: DivEvent) => void): void;
export declare function divMode<T extends IModeDiv>(divs?: SingleOrMultiple<T>, element?: HTMLElement): T | undefined;
export declare function circleBounceDataFromParticle(p: IParticle): ICircleBouncer;
export declare function circleBounce(p1: ICircleBouncer, p2: ICircleBouncer): void;
export declare function rectBounce(particle: IParticle, divBounds: IBounds): void;
