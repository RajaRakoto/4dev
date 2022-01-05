import type { Container } from "../../Core/Container";
import type { IContainerPlugin, ICoordinates, IDelta, IDimension } from "../../Core/Interfaces";
import { Particle } from "../../Core/Particle";
import type { ISvgPath } from "./Interfaces/ISvgPath";
import type { RecursivePartial } from "../../Types";
import { PolygonMask } from "./Options/Classes/PolygonMask";
import { OutModeDirection } from "../../Enums";
import type { IPolygonMaskOptions } from "./types";
/**
 * Polygon Mask manager
 * @category Polygon Mask Plugin
 */
export declare class PolygonMaskInstance implements IContainerPlugin {
    private readonly container;
    redrawTimeout?: number;
    raw?: ICoordinates[];
    paths?: ISvgPath[];
    dimension: IDimension;
    offset?: ICoordinates;
    readonly path2DSupported: boolean;
    readonly options: PolygonMask;
    private polygonMaskMoveRadius;
    constructor(container: Container);
    initAsync(options?: RecursivePartial<IPolygonMaskOptions>): Promise<void>;
    resize(): void;
    stop(): void;
    particlesInitialization(): boolean;
    particlePosition(position?: ICoordinates): ICoordinates | undefined;
    particleBounce(particle: Particle, delta: IDelta, direction: OutModeDirection): boolean;
    clickPositionValid(position: ICoordinates): boolean;
    draw(context: CanvasRenderingContext2D): void;
    private polygonBounce;
    private checkInsidePolygon;
    private parseSvgPath;
    /**
     * Deprecate SVGPathElement.getPathSegAtLength removed in:
     * Chrome for desktop release 62
     * Chrome for Android release 62
     * Android WebView release 62
     * Opera release 49
     * Opera for Android release 49
     */
    private downloadSvgPath;
    private drawPoints;
    private randomPoint;
    private getRandomPoint;
    private getRandomPointByLength;
    private getEquidistantPointByIndex;
    private getPointByIndex;
    private createPath2D;
    private initRawData;
}
