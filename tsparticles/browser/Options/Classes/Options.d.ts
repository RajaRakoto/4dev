import type { IOptions } from "../Interfaces/IOptions";
import { Interactivity } from "./Interactivity/Interactivity";
import { ParticlesOptions } from "./Particles/ParticlesOptions";
import { BackgroundMask } from "./BackgroundMask/BackgroundMask";
import type { RangeValue, RecursivePartial } from "../../Types";
import { Background } from "./Background/Background";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import { Theme } from "./Theme/Theme";
import { FullScreen } from "./FullScreen/FullScreen";
import { Motion } from "./Motion/Motion";
import { ManualParticle } from "./ManualParticle";
import { Responsive } from "./Responsive";
/**
 * [[include:Options.md]]
 * @category Options
 */
export declare class Options implements IOptions, IOptionLoader<IOptions> {
    #private;
    /**
     * @deprecated this property is obsolete, please use the new fpsLimit
     */
    get fps_limit(): number;
    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     * @param value
     */
    set fps_limit(value: number);
    /**
     * @deprecated this property is obsolete, please use the new retinaDetect
     */
    get retina_detect(): boolean;
    /**
     * @deprecated this property is obsolete, please use the new retinaDetect
     * @param value
     */
    set retina_detect(value: boolean);
    /**
     * @deprecated this property is obsolete, please use the new fullScreen
     */
    get backgroundMode(): FullScreen;
    /**
     * @deprecated this property is obsolete, please use the new fullScreen
     * @param value
     */
    set backgroundMode(value: FullScreen);
    autoPlay: boolean;
    background: Background;
    backgroundMask: BackgroundMask;
    detectRetina: boolean;
    duration: RangeValue;
    fpsLimit: number;
    fullScreen: FullScreen;
    interactivity: Interactivity;
    manualParticles: ManualParticle[];
    motion: Motion;
    particles: ParticlesOptions;
    pauseOnBlur: boolean;
    pauseOnOutsideViewport: boolean;
    preset?: string | string[];
    responsive: Responsive[];
    themes: Theme[];
    zLayers: number;
    defaultDarkTheme?: string;
    defaultLightTheme?: string;
    [name: string]: unknown;
    constructor();
    /**
     * This methods loads the source object in the current instance
     * @param data the source data to load into the instance
     */
    load(data?: RecursivePartial<IOptions>): void;
    setTheme(name?: string): void;
    setResponsive(width: number, pxRatio: number, defaultOptions: IOptions): number | undefined;
    private importPreset;
}
