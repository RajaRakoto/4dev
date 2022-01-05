import type { IOptions } from "./Options/Interfaces/IOptions";
import type { Container } from "./Core/Container";
import type { Main } from "./main";
import type { RecursivePartial } from "./Types";
export interface IParticlesJS {
    (tagId: string, options: RecursivePartial<IOptions>): Promise<Container | undefined>;
    load(tagId: string, pathConfigJson: string, callback: (container?: Container) => void): void;
    setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
}
declare const initPjs: (main: Main) => {
    particlesJS: IParticlesJS;
    pJSDom: Container[];
};
export { initPjs };
