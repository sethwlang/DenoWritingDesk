//import CircleType from './circletype.min.js';
import './circletype.min';
import $ from "jquery";

export function rotateTitles() {
    $('h2 .title:nth-of-type(1)').addClass('active');
    setTimeout(function(){
      var titles = $("h2 .title"),
      currentTitle = 0;
      var N = 4; //interval in seconds
      setInterval(function() {
        currentTitle = (currentTitle + 1) % titles.length;
        titles.removeClass('active').removeClass('hidden').eq(currentTitle).addClass('active');
        setTimeout(() => {
          $('h2 .title:not(".active")').addClass('hidden');
        }, 250);
      }, N * 1000);
    },4000);
}

export function circleText() {

    setTimeout(() => {
        if ($(".circular-text")[0]) {
            const circleText = document.querySelector(".circular-text")
            const rotate = new CircleType(circleText).radius(120);
            window.addEventListener("scroll", function(){
                circleText.style.transform=`rotate(${window.scrollY * -0.15}deg)`
            })
        }
    }, 1000);

}

