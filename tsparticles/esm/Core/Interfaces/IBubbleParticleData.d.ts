import type { IHsl } from "./Colors";
export interface IBubbleParticleData {
    inRange: boolean;
    opacity?: number;
    radius?: number;
    color?: IHsl;
    finalColor?: IHsl;
    div?: HTMLElement;
}
