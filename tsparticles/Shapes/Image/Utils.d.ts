import type { IHsl, IParticle } from "../../Core/Interfaces";
export interface IImage {
    source: string;
    type: string;
    element?: HTMLImageElement;
    svgData?: string;
}
export interface IParticleImage {
    source: string;
    data: IImage;
    ratio: number;
    element?: HTMLImageElement;
    loaded?: boolean;
    replaceColor: boolean;
}
export interface ContainerImage {
    id: string;
    images: IImage[];
}
export declare type IImageParticle = IParticle & {
    image: IParticleImage;
};
export declare function loadImage(source: string): Promise<IImage | undefined>;
export declare function downloadSvgImage(source: string): Promise<IImage | undefined>;
export declare function replaceColorSvg(imageShape: IImage, color: IHsl, opacity: number): string;
