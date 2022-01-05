/**
 * [[include:Container.md]]
 * @packageDocumentation
 */
import { Canvas } from "./Canvas";
import { Particles } from "./Particles";
import { Retina } from "./Retina";
import type { IOptions } from "../Options/Interfaces/IOptions";
import { FrameManager } from "./FrameManager";
import type { RecursivePartial } from "../Types";
import { Options } from "../Options/Classes/Options";
import { Particle } from "./Particle";
import { Vector } from "./Particle/Vector";
import { IAttract, IBubble, IContainerInteractivity, IContainerPlugin, IMovePathGenerator, IRepulse, IShapeDrawer } from "./Interfaces";
/**
 * The object loaded into an HTML element, it'll contain options loaded and all data to let everything working
 * [[include:Container.md]]
 * @category Core
 */
export declare class Container {
    readonly id: string;
    /**
     * Check if the particles container is started
     */
    started: boolean;
    /**
     * Check if the particles container is destroyed, if so it's not recommended using it
     */
    destroyed: boolean;
    density: number;
    duration: number;
    pageHidden: boolean;
    lastFrameTime?: number;
    lifeTime: number;
    fpsLimit: number;
    interactivity: IContainerInteractivity;
    bubble: IBubble;
    repulse: IRepulse;
    attract: IAttract;
    zLayers: number;
    responsiveMaxWidth?: number;
    /**
     * The options used by the container, it's a full [[Options]] object
     */
    get options(): Options;
    get sourceOptions(): RecursivePartial<IOptions> | undefined;
    /**
     * The options loaded by the container, it's a full [[Options]] object
     */
    actualOptions: Options;
    readonly retina: Retina;
    readonly canvas: Canvas;
    /**
     * The particles manager
     */
    readonly particles: Particles;
    readonly drawer: FrameManager;
    /**
     * All the shape drawers used by the container
     */
    readonly drawers: Map<string, IShapeDrawer>;
    /**
     * All the plugins used by the container
     */
    readonly plugins: Map<string, IContainerPlugin>;
    readonly pathGenerator: IMovePathGenerator;
    private _options;
    private _sourceOptions;
    private readonly _initialSourceOptions;
    private paused;
    private firstStart;
    private currentTheme?;
    private drawAnimationFrame?;
    private readonly presets;
    private readonly eventListeners;
    private readonly intersectionObserver?;
    /**
     * This is the core class, create an instance to have a new working particles manager
     * @constructor
     * @param id the id to identify this instance
     * @param sourceOptions the options to load
     * @param presets all the presets to load with options
     */
    constructor(id: string, sourceOptions?: RecursivePartial<IOptions>, ...presets: string[]);
    /**
     * Starts animations and resume from pause
     * @param force
     */
    play(force?: boolean): void;
    /**
     * Pauses animations
     */
    pause(): void;
    /**
     * Draws a frame
     */
    draw(force: boolean): void;
    /**
     * Gets the animation status
     * @returns `true` is playing, `false` is paused
     */
    getAnimationStatus(): boolean;
    /**
     * Customise path generation
     * @deprecated Use the new setPath
     * @param noiseOrGenerator the [[IMovePathGenerator]] object or a function that generates a [[Vector]] object from [[Particle]]
     * @param init the [[IMovePathGenerator]] init function, if the first parameter is a generator function
     * @param update the [[IMovePathGenerator]] update function, if the first parameter is a generator function
     */
    setNoise(noiseOrGenerator?: IMovePathGenerator | ((particle: Particle) => Vector), init?: () => void, update?: () => void): void;
    /**
     * Customise path generation
     * @param pathOrGenerator the [[IMovePathGenerator]] object or a function that generates a [[Vector]] object from [[Particle]]
     * @param init the [[IMovePathGenerator]] init function, if the first parameter is a generator function
     * @param update the [[IMovePathGenerator]] update function, if the first parameter is a generator function
     */
    setPath(pathOrGenerator?: IMovePathGenerator | ((particle: Particle) => Vector), init?: () => void, update?: () => void): void;
    /**
     * Destroys the current container, invalidating it
     */
    destroy(): void;
    /**
     * @deprecated this method is deprecated, please use the exportImage method
     * @param callback The callback to handle the image
     */
    exportImg(callback: BlobCallback): void;
    /**
     * Exports the current canvas image, `background` property of `options` won't be rendered because it's css related
     * @param callback The callback to handle the image
     * @param type The exported image type
     * @param quality The exported image quality
     */
    exportImage(callback: BlobCallback, type?: string, quality?: number): void;
    /**
     * Exports the current configuration using `options` property
     * @returns a JSON string created from `options` property
     */
    exportConfiguration(): string;
    /**
     * Restarts the container, just a [[stop]]/[[start]] alias
     */
    refresh(): Promise<void>;
    reset(): Promise<void>;
    /**
     * Stops the container, opposite to `start`. Clears some resources and stops events.
     */
    stop(): void;
    /**
     * Loads the given theme, overriding the options
     * @param name the theme name, if `undefined` resets the default options or the default theme
     */
    loadTheme(name?: string): Promise<void>;
    /**
     * Starts the container, initializes what are needed to create animations and event handling
     */
    start(): Promise<void>;
    addClickHandler(callback: (evt: Event, particles?: Particle[]) => void): void;
    updateActualOptions(): boolean;
    init(): Promise<void>;
    private intersectionManager;
}
