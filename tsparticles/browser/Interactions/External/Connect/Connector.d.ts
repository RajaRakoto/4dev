import type { Container } from "../../../Core/Container";
import { ExternalInteractorBase } from "../../../Core/ExternalInteractorBase";
/**
 * Particle connection manager
 * @category Interactions
 */
export declare class Connector extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    /**
     * Connecting particles on hover interactivity
     */
    interact(): void;
}
