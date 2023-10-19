import { GLOBALS } from "./globals";

/**
 * Check if the device is mobile or desktop
 */
if ('ontouchstart' in window) {
    GLOBALS.mobile = true;
    GLOBALS.H.classList.add('mobile');
} else {
    GLOBALS.H.classList.add('desktop');
}
