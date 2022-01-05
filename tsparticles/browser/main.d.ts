import type { IOptions } from "./Options/Interfaces/IOptions";
import type { Container } from "./Core/Container";
import type { ShapeDrawerAfterEffectFunction, ShapeDrawerDestroyFunction, ShapeDrawerDrawFunction, ShapeDrawerInitFunction, RecursivePartial, SingleOrMultiple } from "./Types";
import type { Particle } from "./Core/Particle";
import type { IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer } from "./Core/Interfaces";
/**
 * Main class for creating the singleton on window.
 * It's a singleton proxy to the static [[Loader]] class for initializing [[Container]] instances
 * @category Main
 */
export declare class Main {
    #private;
    constructor();
    /**
     * init method, used by imports
     */
    init(): void;
    /**
     * Loads an options object from the provided array to create a [[Container]] object.
     * @param tagId The particles container element id
     * @param options The options array to get the item from
     * @param index If provided gets the corresponding item from the array
     * @returns A Promise with the [[Container]] object created
     */
    loadFromArray(tagId: string, options: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId The particles container element id
     * @param options The options object to initialize the [[Container]]
     * @returns A Promise with the [[Container]] object created
     */
    load(tagId: string | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>>): Promise<Container | undefined>;
    /**
     * Loads the provided option to create a [[Container]] object using the element parameter as a container
     * @param id The particles container id
     * @param element The dom element used to contain the particles
     * @param options The options object to initialize the [[Container]]
     */
    set(id: string | HTMLElement, element: HTMLElement | RecursivePartial<IOptions>, options?: RecursivePartial<IOptions>): Promise<Container | undefined>;
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param pathConfigJson the json path (or paths array) to use in the GET request
     * @param index the index of the paths array, if a single path is passed this value is ignored
     * @returns A Promise with the [[Container]] object created
     */
    loadJSON(tagId: string | SingleOrMultiple<string>, pathConfigJson?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    /**
     * Loads the provided option to create a [[Container]] object using the element parameter as a container
     * @param id The particles container id
     * @param element The dom element used to contain the particles
     * @param pathConfigJson the json path (or paths array) to use in the GET request
     * @param index the index of the paths array, if a single path is passed this value is ignored
     * @returns A Promise with the [[Container]] object created
     */
    setJSON(id: string | HTMLElement, element: HTMLElement | SingleOrMultiple<string>, pathConfigJson?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback The function called after the click event is fired
     */
    setOnClickHandler(callback: (e: Event, particles?: Particle[]) => void): void;
    /**
     * All the [[Container]] objects loaded
     * @returns All the [[Container]] objects loaded
     */
    dom(): Container[];
    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index The object index
     * @returns The [[Container]] object at specified index, if present or not destroyed, otherwise undefined
     */
    domItem(index: number): Container | undefined;
    /**
     * Reloads all existing tsParticles loaded instances
     */
    refresh(): Promise<void>;
    /**
     * addShape adds shape to tsParticles, it will be available to all future instances created
     * @param shape the shape name
     * @param drawer the shape drawer function or class instance that draws the shape in the canvas
     * @param init Optional: the shape drawer init function, used only if the drawer parameter is a function
     * @param afterEffect Optional: the shape drawer after effect function, used only if the drawer parameter is a function
     * @param destroy Optional: the shape drawer destroy function, used only if the drawer parameter is a function
     */
    addShape(shape: string, drawer: IShapeDrawer | ShapeDrawerDrawFunction, init?: ShapeDrawerInitFunction, afterEffect?: ShapeDrawerAfterEffectFunction, destroy?: ShapeDrawerDestroyFunction): Promise<void>;
    /**
     * addPreset adds preset to tsParticles, it will be available to all future instances created
     * @param preset the preset name
     * @param options the options to add to the preset
     * @param override if true, the preset will override any existing with the same name
     */
    addPreset(preset: string, options: RecursivePartial<IOptions>, override?: boolean): Promise<void>;
    /**
     * addPlugin adds plugin to tsParticles, if an instance needs it it will be loaded
     * @param plugin the plugin implementation of [[IPlugin]]
     */
    addPlugin(plugin: IPlugin): Promise<void>;
    /**
     * addPathGenerator adds a named path generator to tsParticles, this can be called by options
     * @param name the path generator name
     * @param generator the path generator object
     */
    addPathGenerator(name: string, generator: IMovePathGenerator): Promise<void>;
    /**
     *
     * @param name
     * @param interactorInitializer
     */
    addInteractor(name: string, interactorInitializer: (container: Container) => IInteractor): Promise<void>;
    /**
     *
     * @param name
     * @param updaterInitializer
     */
    addParticleUpdater(name: string, updaterInitializer: (container: Container) => IParticleUpdater): Promise<void>;
}
