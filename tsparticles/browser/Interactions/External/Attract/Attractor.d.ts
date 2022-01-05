import type { Container } from "../../../Core/Container";
import { ExternalInteractorBase } from "../../../Core/ExternalInteractorBase";
/**
 * Particle attract manager
 * @category Interactions
 */
export declare class Attractor extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): void;
    private hoverAttract;
    private processAttract;
    private clickAttract;
}
