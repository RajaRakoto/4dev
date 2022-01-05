import type { Container } from "../Core/Container";
/**
 * Particles container event listeners manager
 * @category Utils
 */
export declare class EventListeners {
    private readonly container;
    private readonly mouseMoveHandler;
    private readonly touchStartHandler;
    private readonly touchMoveHandler;
    private readonly touchEndHandler;
    private readonly mouseLeaveHandler;
    private readonly touchCancelHandler;
    private readonly touchEndClickHandler;
    private readonly mouseDownHandler;
    private readonly mouseUpHandler;
    private readonly visibilityChangeHandler;
    private readonly themeChangeHandler;
    private readonly oldThemeChangeHandler;
    private readonly resizeHandler;
    private canPush;
    private resizeTimeout?;
    private resizeObserver?;
    /**
     * Events listener constructor
     * @param container the calling container
     */
    constructor(container: Container);
    /**
     * Adding all listeners
     */
    addListeners(): void;
    /**
     * Removing all listeners
     */
    removeListeners(): void;
    /**
     * Initializing event listeners
     */
    private manageListeners;
    private handleWindowResize;
    private handleVisibilityChange;
    private mouseDown;
    /**
     * Mouse/Touch move event
     * @param e the event arguments
     */
    private mouseTouchMove;
    /**
     * Mouse/Touch event finish
     */
    private mouseTouchFinish;
    /**
     * Mouse/Touch click/tap event
     * @param e the click event arguments
     */
    private mouseTouchClick;
    /**
     * Mouse/Touch click/tap event implementation
     * @param e the click event arguments
     */
    private doMouseTouchClick;
    private handleThemeChange;
    private handleClickMode;
}
