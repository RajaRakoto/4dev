import type { Container } from "../../../Core/Container";
import { ExternalInteractorBase } from "../../../Core/ExternalInteractorBase";
/**
 * Particle grab manager
 * @category Interactions
 */
export declare class Grabber extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): void;
}
