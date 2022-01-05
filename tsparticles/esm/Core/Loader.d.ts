import { Container } from "./Container";
import type { IOptions } from "../Options/Interfaces/IOptions";
import type { RecursivePartial } from "../Types";
import type { Particle } from "./Particle";
import type { SingleOrMultiple } from "../Types";
interface LoaderParams {
    element?: HTMLElement;
    index?: number;
    options?: SingleOrMultiple<RecursivePartial<IOptions>>;
    tagId?: string;
}
interface RemoteLoaderParams {
    element?: HTMLElement;
    index?: number;
    tagId?: string;
    url?: SingleOrMultiple<string>;
}
export declare class Loader {
    static dom(): Container[];
    static domItem(index: number): Container | undefined;
    static loadOptions(params: LoaderParams): Promise<Container | undefined>;
    static loadRemoteOptions(params: RemoteLoaderParams): Promise<Container | undefined>;
    static load(tagId: string | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>> | number, index?: number): Promise<Container | undefined>;
    static set(id: string | HTMLElement, domContainer: HTMLElement | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>> | number, index?: number): Promise<Container | undefined>;
    static loadJSON(tagId: string | SingleOrMultiple<string>, jsonUrl?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    static setJSON(id: string | HTMLElement, domContainer: HTMLElement | SingleOrMultiple<string>, jsonUrl: SingleOrMultiple<string> | (number | undefined), index?: number): Promise<Container | undefined>;
    static setOnClickHandler(callback: (evt: Event, particles?: Particle[]) => void): void;
}
export {};
