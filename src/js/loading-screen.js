import {revealSplitTexts, fadeInReveal} from './scroll-triggers.js';
import $ from "jquery";

export function loadingSplash() {
    var checkLoadReady = setInterval(function() {
      if ($('.load-bar-inner').length) {
        clearInterval(checkLoadReady);
        const loadingSplash = document.querySelector('#loading-splash');
        const loadingBar = document.querySelector('.load-bar-inner');
        $(loadingBar).addClass('loading');
        var loadingReadyCheck = setInterval(function() {
          if ($(loadingBar).hasClass('loading')) {
            clearInterval(loadingReadyCheck);
            loadingBar.addEventListener("animationend", () => {
              $('#loading-splash').addClass('loaded');
              $('.splitting .char').addClass('reveal-char');
              $(window).scrollTop(0);
              setTimeout(function(){
                $('body').addClass('loaded');
                revealSplitTexts();
                fadeInReveal();
                setTimeout(function(){
                  $('body').removeClass('loaded');
                }, 100);
              }, 800);
            });
          }
        }, 50);
        var loadingFinishedCheck = setInterval(function() {
          if ($(loadingSplash).hasClass('loaded')) {
            clearInterval(loadingFinishedCheck);
            loadingSplash.addEventListener("animationend", () => {
              
              setTimeout(function(){
                $('#loading-splash').remove();
                //$('body').removeClass('loaded');
                $('.splitting .char').removeClass('reveal-char');
              }, 500);
            });
          }
        }, 50);
      }
    }, 100); 
}