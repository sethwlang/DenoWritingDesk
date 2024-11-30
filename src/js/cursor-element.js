import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
import $ from "jquery";

export function cursorElement() {

    $(document).ready(function() {

        $('body').prepend('<div class="cursor-element"><div class="cursor-wrapper"><div class="cursor-effect"></div><span></span></div></div>');
        $("body").mousemove(function() {
          gsap.to(".cursor-element", {delay:0.18, duration:0.4});
          gsap.to(".cursor-element", {delay:0.4, opacity:1, duration:0.8});
        });
      
        var circle = document.querySelector(".cursor-element");
    
        gsap.set(circle, {
            xPercent: -50,
            yPercent: -50
        });
        
        window.addEventListener("mousemove", moveCircle);
        
        function moveCircle(e) {
            gsap.to(circle, 1.4, {
                ease:CustomEase.create("cubic", ".14,.8,.28,.99"),
                x: e.clientX,
                y: e.clientY
            });
        }

    });

}

export function cursorCheck() {

  //Check Cursor
  $("a, button, code, input, select, textarea").hover(
    function() {
      if ($(this).hasClass('active') || $(this).hasClass('logo')) {
        return
      } else {
        $(".cursor-effect, .cursor-element").addClass("active");
      }
    }, function() {
      $(".cursor-effect, .cursor-element").removeClass("active");
    })
  .mouseleave(function() {
    $(".cursor-effect, .cursor-element").removeClass("active");
  })
  .click(function() {
    $(".cursor-effect, .cursor-element").removeClass("active");
  });
  $("a, button, code, input, select, textarea").mouseover(
    function() {
      if ($(this).hasClass('active')) {
        return
      } else {
        $(".cursor-effect, .cursor-element").addClass("active");
      }
  });

  //Click Animation
  $("body").mousedown(function() {
    $('.cursor-element').addClass('mouse-down');
  });
  $("body").mouseup(function() {
    $('.cursor-element').removeClass('mouse-down');
  });

  $("a:not('.active'), button, input, select, textarea").on( "click", function() {

    $(".cursor-effect").removeClass("active");

    $('.cursor-element').addClass('clicked');
    setTimeout(function(){
      $('.cursor-element').removeClass('clicked');
    }, 800);
  });

  $("a, button").on( "click", function() {
    if ($(this).hasClass('active')) {
      event.preventDefault();
      return
    }
  });


  $("a, button, code, input, select, textarea").hover(
      function() {
        if ($(this).hasClass('active')) {
          return
        } else {
        $(".cursor-effect").addClass("active");
        }
      }, function() {
        $(".cursor-effect").removeClass("active");
      })
    .mouseleave(function() {
      $(".cursor-effect").removeClass("active");
    })
    .click(function() {
      $(".cursor-effect").removeClass("active");
  });
}