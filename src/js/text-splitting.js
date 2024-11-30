import "../scss/packages/splitting.css";
import "../scss/packages/splitting-cells.css";
import Splitting from "splitting";
import $ from 'jquery';

export default function splitText() {

    Splitting({
        /* target: String selector, Element, Array of Elements, or NodeList */
        target: "[data-splitting], .split-chars",
        /* by: String of the plugin name */
        by: "chars",
        /* key: Optional String to prefix the CSS variables */
        key: null
    });

    Splitting({
        target: ".split-lines",
        by: "lines",
    });

    document.querySelectorAll('.splitting.lines .word').forEach(word => {
        word.addEventListener("animationend", function () {
            $(this).contents().unwrap();
        });
    })

    //document.querySelectorAll('#search-panel .product').forEach(el => {

    //});

}

