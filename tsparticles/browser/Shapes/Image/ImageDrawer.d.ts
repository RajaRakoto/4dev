import type { IParticle, IShapeDrawer } from "../../Core/Interfaces";
import type { Container } from "../../Core/Container";
import type { IImage } from "./Utils";
import { Particle } from "../../Core/Particle";
interface ContainerImage {
    id: string;
    images: IImage[];
}
/**
 * @category Shape Drawers
 */
export declare class ImageDrawer implements IShapeDrawer {
    #private;
    constructor();
    getSidesCount(): number;
    getImages(container: Container): ContainerImage;
    addImage(container: Container, image: IImage): void;
    init(container: Container): Promise<void>;
    destroy(): void;
    private loadImagesFromParticlesOptions;
    private loadImageShape;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number): void;
    loadShape(particle: Particle): void;
}
export {};
