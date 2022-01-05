import type { IShape } from "../../../Interfaces/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums";
import type { RecursivePartial, ShapeData, SingleOrMultiple } from "../../../../Types";
import { Stroke } from "../Stroke";
import type { IPolygonShape } from "../../../Interfaces/Particles/Shape/IPolygonShape";
import type { IImageShape } from "../../../Interfaces/Particles/Shape/IImageShape";
import type { ICharacterShape } from "../../../Interfaces/Particles/Shape/ICharacterShape";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
/**
 * [[include:Options/Particles/Shape.md]]
 * @category Options
 */
export declare class Shape implements IShape, IOptionLoader<IShape> {
    /**
     * @deprecated this property was integrated in custom shape management
     */
    get image(): SingleOrMultiple<IImageShape>;
    /**
     * @deprecated this property was integrated in custom shape management
     * @param value
     */
    set image(value: SingleOrMultiple<IImageShape>);
    /**
     * @deprecated This options has been renamed options
     */
    get custom(): ShapeData;
    /**
     * @deprecated This options has been renamed options
     * @param value
     */
    set custom(value: ShapeData);
    /**
     * @deprecated the property images is deprecated, please use the image property, it works with one and many
     */
    get images(): SingleOrMultiple<IImageShape>;
    /**
     * @deprecated the property images is deprecated, please use the image property, it works with one and many
     */
    set images(value: SingleOrMultiple<IImageShape>);
    /**
     * @deprecated this property was moved to particles section
     */
    get stroke(): SingleOrMultiple<Stroke>;
    /**
     * @deprecated this property was moved to particles section
     */
    set stroke(_value: SingleOrMultiple<Stroke>);
    /**
     * @deprecated this property was integrated in custom shape management
     */
    get character(): SingleOrMultiple<ICharacterShape>;
    /**
     * @deprecated this property was integrated in custom shape management
     */
    set character(value: SingleOrMultiple<ICharacterShape>);
    /**
     * @deprecated this property was integrated in custom shape management
     */
    get polygon(): SingleOrMultiple<IPolygonShape>;
    /**
     * @deprecated this property was integrated in custom shape management
     */
    set polygon(value: SingleOrMultiple<IPolygonShape>);
    type: SingleOrMultiple<ShapeType | keyof typeof ShapeType | string>;
    options: ShapeData;
    constructor();
    load(data?: RecursivePartial<IShape>): void;
    private loadShape;
}
