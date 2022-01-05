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
/**
 * Main class for creating the [[Container]] objects
 * @category Core
 */
export declare class Loader {
    /**
     * All the [[Container]] objects loaded
     */
    static dom(): Container[];
    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index the object index
     */
    static domItem(index: number): Container | undefined;
    static loadOptions(params: LoaderParams): Promise<Container | undefined>;
    static loadRemoteOptions(params: RemoteLoaderParams): Promise<Container | undefined>;
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param options the options object to initialize the [[Container]]
     * @param index if an options array is provided, this will retrieve the exact index of that array
     */
    static load(tagId: string | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>> | number, index?: number): Promise<Container | undefined>;
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param id the particles container element id
     * @param domContainer the dom container
     * @param options the options object to initialize the [[Container]]
     * @param index if an options array is provided, this will retrieve the exact index of that array
     */
    static set(id: string | HTMLElement, domContainer: HTMLElement | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>> | number, index?: number): Promise<Container | undefined>;
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param jsonUrl the json path (or paths array) to use in the GET request
     * @param index the index of the paths array, if a single path is passed this value is ignored
     * @returns A Promise with the [[Container]] object created
     */
    static loadJSON(tagId: string | SingleOrMultiple<string>, jsonUrl?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param id the particles container element id
     * @param domContainer the container used to contains the particles
     * @param jsonUrl the json path (or paths array) to use in the GET request
     * @param index the index of the paths array, if a single path is passed this value is ignored
     * @returns A Promise with the [[Container]] object created
     */
    static setJSON(id: string | HTMLElement, domContainer: HTMLElement | SingleOrMultiple<string>, jsonUrl: SingleOrMultiple<string> | (number | undefined), index?: number): Promise<Container | undefined>;
    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback the function called after the click event is fired
     */
    static setOnClickHandler(callback: (evt: Event, particles?: Particle[]) => void): void;
}
export {};
