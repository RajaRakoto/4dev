import type { Container } from "./Container";
import type { Particle } from "./Particle";
import type { IContainerPlugin, ICoordinates, IDelta, IDimension, IParticle, IRgb } from "./Interfaces";
/**
 * Canvas manager
 * @category Core
 */
export declare class Canvas {
    private readonly container;
    /**
     * The particles canvas
     */
    element?: HTMLCanvasElement;
    /**
     * The particles canvas dimension
     */
    readonly size: IDimension;
    resizeFactor?: IDimension;
    /**
     * The particles canvas context
     */
    private context;
    private generatedCanvas;
    private coverColor?;
    private trailFillColor?;
    private originalStyle?;
    /**
     * Constructor of canvas manager
     * @param container the parent container
     */
    constructor(container: Container);
    /**
     * Initializes the canvas element
     */
    init(): void;
    loadCanvas(canvas: HTMLCanvasElement, generatedCanvas?: boolean): void;
    destroy(): void;
    /**
     * Paints the canvas background
     */
    paint(): void;
    /**
     * Clears the canvas content
     */
    clear(): void;
    windowResize(): void;
    /**
     * Calculates the size of the canvas
     */
    resize(): void;
    drawConnectLine(p1: IParticle, p2: IParticle): void;
    drawGrabLine(particle: IParticle, lineColor: IRgb, opacity: number, mousePos: ICoordinates): void;
    drawParticle(particle: Particle, delta: IDelta): void;
    drawPlugin(plugin: IContainerPlugin, delta: IDelta): void;
    drawParticlePlugin(plugin: IContainerPlugin, particle: Particle, delta: IDelta): void;
    initBackground(): void;
    draw<T>(cb: (context: CanvasRenderingContext2D) => T): T | undefined;
    private initCover;
    private initTrail;
    private getPluginParticleColors;
    private initStyle;
    private paintBase;
    private lineStyle;
}
