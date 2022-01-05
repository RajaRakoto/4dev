import type { IEmitterShape } from "./IEmitterShape";
export declare class ShapeManager {
    static addShape(name: string, drawer: IEmitterShape): void;
    static getShape(name: string): IEmitterShape | undefined;
    static getSupportedShapes(): IterableIterator<string>;
}
