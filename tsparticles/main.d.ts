import type { IOptions } from "./Options/Interfaces/IOptions";
import type { Container } from "./Core/Container";
import type { ShapeDrawerAfterEffectFunction, ShapeDrawerDestroyFunction, ShapeDrawerDrawFunction, ShapeDrawerInitFunction, RecursivePartial, SingleOrMultiple } from "./Types";
import type { Particle } from "./Core/Particle";
import type { IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer } from "./Core/Interfaces";
export declare class Main {
    #private;
    constructor();
    init(): void;
    loadFromArray(tagId: string, options: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    load(tagId: string | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>>): Promise<Container | undefined>;
    set(id: string | HTMLElement, element: HTMLElement | RecursivePartial<IOptions>, options?: RecursivePartial<IOptions>): Promise<Container | undefined>;
    loadJSON(tagId: string | SingleOrMultiple<string>, pathConfigJson?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    setJSON(id: string | HTMLElement, element: HTMLElement | SingleOrMultiple<string>, pathConfigJson?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    setOnClickHandler(callback: (e: Event, particles?: Particle[]) => void): void;
    dom(): Container[];
    domItem(index: number): Container | undefined;
    refresh(): Promise<void>;
    addShape(shape: string, drawer: IShapeDrawer | ShapeDrawerDrawFunction, init?: ShapeDrawerInitFunction, afterEffect?: ShapeDrawerAfterEffectFunction, destroy?: ShapeDrawerDestroyFunction): Promise<void>;
    addPreset(preset: string, options: RecursivePartial<IOptions>, override?: boolean): Promise<void>;
    addPlugin(plugin: IPlugin): Promise<void>;
    addPathGenerator(name: string, generator: IMovePathGenerator): Promise<void>;
    addInteractor(name: string, interactorInitializer: (container: Container) => IInteractor): Promise<void>;
    addParticleUpdater(name: string, updaterInitializer: (container: Container) => IParticleUpdater): Promise<void>;
}
