import type { Container } from "../Core/Container";
import type { RecursivePartial } from "../Types";
import type { IOptions } from "../Options/Interfaces/IOptions";
import type { Options } from "../Options/Classes/Options";
import type { IContainerPlugin, IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer } from "../Core/Interfaces";
/**
 * @category Utils
 */
export declare class Plugins {
    static getPlugin(plugin: string): IPlugin | undefined;
    static addPlugin(plugin: IPlugin): void;
    static getAvailablePlugins(container: Container): Map<string, IContainerPlugin>;
    static loadOptions(options: Options, sourceOptions: RecursivePartial<IOptions>): void;
    static getPreset(preset: string): RecursivePartial<IOptions> | undefined;
    static addPreset(presetKey: string, options: RecursivePartial<IOptions>, override?: boolean): void;
    static addShapeDrawer(type: string, drawer: IShapeDrawer): void;
    static getShapeDrawer(type: string): IShapeDrawer | undefined;
    static getSupportedShapes(): IterableIterator<string>;
    static getPathGenerator(type: string): IMovePathGenerator | undefined;
    static addPathGenerator(type: string, pathGenerator: IMovePathGenerator): void;
    static getInteractors(container: Container, force?: boolean): IInteractor[];
    static addInteractor(name: string, initInteractor: (container: Container) => IInteractor): void;
    static getUpdaters(container: Container, force?: boolean): IParticleUpdater[];
    static addParticleUpdater(name: string, initUpdater: (container: Container) => IParticleUpdater): void;
}
