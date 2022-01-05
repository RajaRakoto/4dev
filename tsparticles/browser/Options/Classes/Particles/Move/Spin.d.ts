import type { ISpin } from "../../../Interfaces/Particles/Move/ISpin";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ICoordinates } from "../../../../Core/Interfaces";
import type { RangeValue, RecursivePartial } from "../../../../Types";
export declare class Spin implements ISpin, IOptionLoader<ISpin> {
    acceleration: RangeValue;
    enable: boolean;
    position?: ICoordinates;
    constructor();
    load(data?: RecursivePartial<ISpin>): void;
}
