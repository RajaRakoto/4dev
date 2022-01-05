import type { Container } from "./Container";
/**
 * @category Core
 */
export declare class FrameManager {
    private readonly container;
    constructor(container: Container);
    /**
     * Handles the rAF method preparing the next animation frame to be drawn
     * limiting it if it's needed by the current configuration
     * @param timestamp
     */
    nextFrame(timestamp: DOMHighResTimeStamp): void;
}
