let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let screenType = 'error: undetected';

export function viewportType() {

    // Get Screen Type (Default, Touch, or Cursor & Touch)

    if ((window.matchMedia("(pointer: coarse)").matches) && (window.matchMedia("(hover: none)").matches)) {
        screenType = 'touch';
        console.log('Screentype is: '+screenType);
        return screenType;

    } else if((window.matchMedia("(any-pointer: fine)").matches) && (window.matchMedia("(pointer: coarse)").matches) ) {
        screenType = 'cursorTouch';
        console.log('Screentype is: '+screenType);
        return screenType;

    } else {
        screenType = 'default';
        console.log('Screentype is: '+screenType);
        return screenType;
    }
  
}

export function viewportSize() {
    // Get Screen Dimensions
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    console.log('Viewport width is: '+viewportWidth);
    console.log('Viewport height is: '+viewportHeight);
    return [viewportWidth, viewportHeight];
}
