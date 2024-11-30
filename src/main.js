import {createApp} from 'vue'
import {createRouter} from 'vue-router'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from './router'
import "./scss/main.scss";

// Cursor
//import {cursorElement, cursorCheck} from './js/cursor-element.js';
//Viewport Type/Size Detection
import {viewportSize, viewportType } from './js/viewport.js';

createApp(App).use(router).mount('#app')


//////////////////////////////////////////
// One Time Functions
//////////////////////////////////////////

/*$(document).ready(onLoadFunction);

$(document).ready(function() {

  window.addEventListener('load', () => {

    document.addEventListener("scroll", scrollEvent); 

    var prevScrollPosition = 0;
    function scrollEvent() {
      var currentScrollPosition = $(document).scrollTop();
      if (currentScrollPosition > 136 && !$('.nav-links').hasClass('active')) {
        $('nav').addClass('scrolled');
        if (prevScrollPosition < currentScrollPosition) {
          $('nav').addClass('hide');
        } else {
          $('nav').removeClass('hide');
        }
      } else {
        $('nav').removeClass('scrolled');
      }
      prevScrollPosition = currentScrollPosition;
    }
    setTimeout(function(){
      cursorElement();
      cursorCheck();
    }, 2000);

  });

});*/



//////////////////////////////////////////
// Functions On Every Page and AJAX Page
//////////////////////////////////////////

/*function onLoadFunction() {

  $('nav a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    setTimeout(function(){ // Todo: ensure this fires after vue-router dom load
      cursorCheck();
    }, 200);
  });
  $('.logo a').click(function(){
      $('nav a').removeClass('active');
  
      setTimeout(function(){ // Todo: ensure this fires after vue-router dom load
        cursorCheck();
      }, 200);
  });

}*/

//////////////////////////////////////////
// Resize Functions
//////////////////////////////////////////

/*$(window).resize(function() {
  var fireResizeFunctions;
  clearTimeout(fireResizeFunctions);
  fireResizeFunctions = setTimeout(resizeFunctions, 140);

  $('nav').addClass('resizing');
  function resizeFunctions() {
    //smoothScroll();
    viewportSize();
    viewportType();
    setTimeout(function(){
      $('nav').removeClass('resizing');
    }, 400);
  }
});*/
