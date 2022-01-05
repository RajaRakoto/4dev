import type { IColor, IHsl, IHsla, IHsv, IHsva, IParticle, IParticleHslAnimation, IRgb, IRgba } from "../Core/Interfaces";
import type { HslAnimation } from "../Options/Classes/HslAnimation";
/**
 * Gets the particles color
 * @param input the input color to convert in [[IRgb]] object
 * @param index the array index, if needed
 * @param useIndex set to false to ignore the index parameter
 */
export declare function colorToRgb(input?: string | IColor, index?: number, useIndex?: boolean): IRgb | undefined;
/**
 * Gets the particles color
 * @param color the input color to convert in [[IHsl]] object
 * @param index the array index, if needed
 * @param useIndex set to false to ignore the index parameter
 */
export declare function colorToHsl(color: string | IColor | undefined, index?: number, useIndex?: boolean): IHsl | undefined;
export declare function rgbToHsl(color: IRgb): IHsl;
export declare function stringToAlpha(input: string): number | undefined;
/**
 * Converts hexadecimal string (HTML color code) in a [[IRgb]] object
 * @param input the hexadecimal string (#f70 or #ff7700)
 */
export declare function stringToRgb(input: string): IRgb | undefined;
/**
 * Converts a Hue Saturation Lightness ([[IHsl]]) object in a [[IRgb]] object
 * @param hsl
 */
export declare function hslToRgb(hsl: IHsl): IRgb;
export declare function hslaToRgba(hsla: IHsla): IRgba;
export declare function hslToHsv(hsl: IHsl): IHsv;
export declare function hslaToHsva(hsla: IHsla): IHsva;
export declare function hsvToHsl(hsv: IHsv): IHsl;
export declare function hsvaToHsla(hsva: IHsva): IHsla;
export declare function hsvToRgb(hsv: IHsv): IRgb;
export declare function hsvaToRgba(hsva: IHsva): IRgba;
export declare function rgbToHsv(rgb: IRgb): IHsv;
export declare function rgbaToHsva(rgba: IRgba): IHsva;
export declare function getRandomRgbColor(min?: number): IRgb;
export declare function getStyleFromRgb(color: IRgb, opacity?: number): string;
export declare function getStyleFromHsl(color: IHsl, opacity?: number): string;
export declare function getStyleFromHsv(color: IHsv, opacity?: number): string;
export declare function colorMix(color1: IRgb | IHsl, color2: IRgb | IHsl, size1: number, size2: number): IRgb;
export declare function getLinkColor(p1: IParticle, p2?: IParticle, linkColor?: string | IRgb): IRgb | undefined;
export declare function getLinkRandomColor(optColor: string | IColor, blink: boolean, consent: boolean): IRgb | string | undefined;
export declare function getHslFromAnimation(animation?: IParticleHslAnimation): IHsl | undefined;
export declare function getHslAnimationFromHsl(hsl: IHsl, animationOptions: HslAnimation | undefined, reduceFactor: number): IParticleHslAnimation;
