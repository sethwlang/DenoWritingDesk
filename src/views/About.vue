<template>
  <div class="about">

    <div class="flex columns header">
      <div class="image">
        <picture>
          <source type="image/webp" srcset="../assets/images/AboutMe.webp">
          <source type="image/jpeg" srcset="../assets/images/AboutMe.jpg">
            <img   src="../assets/images/AboutMe.jpg" />
        </picture>
      </div>
      <div class="flex vertical center content">
        <div class="text-content">
          <h1 class="handwriting  ">Hi! I’m Bailey Lang</h1>
          <p  >As comedian, writer, and musician Steve Martin said, “Some people have a way with words, and other 
            people…not have way.” </p>

          <p  >I have a way of helping people find their way with words. </p>

          <p  >If you feel like you’re one of the “not have way” types—or need some help figuring 
            out a way—you’ve come to the right place. </p>

          <p  >Here at The Writing Desk, you’ll find everything you need to get from draft to done. </p>
        </div>
      </div>
    </div>
    <section id="twd" class="insights bg-primary-light">
      <ul class="list-disc ml-5">
        <li>
          Are you in need of writing support? 
          I’ve got your back—<router-link class="link" to="/write">head here to learn more about copywriting and ghostwriting opportunities</router-link>. 
        </li>
        <li>Do you have existing materials that need a little TLC? Whether you’re looking for edits on a technical document or a novel, I can help. <router-link class="link" to="/edit">Check out my editing packages for businesses and writers</router-link>.
        </li>
        <li>Do you need help making progress on your book? You might be interested in my <router-link class="link" to="/unstuck">coaching packages</router-link>!
        </li>
      </ul>
      <div class="text-content">
      <p>I started my career as a marketing analyst but quickly fell in love with rhetoric and writing studies while 
        working on a master’s degree. Before I knew it, I’d <a href="https://www.nebraskapress.unl.edu/potomac-books/9781612347660/">written a book</a> and left my corporate job for a Ph.D. program.</p>
        <p>By the time I finished my dissertation, I realized that helping other writers is what I was meant to do.</p>
        <p><b>Now, I help businesses and writers tell stories that matter. </b></p>
        <p>That said, I’ll be the first one to admit it: Writing is hard!</p>
        <p>You’ve probably already experienced the terror of a blank page, a blinking cursor, and a looming deadline. </p>
        <p>Whether you’re launching a new website or trying to finish a book, getting words (much less the right words) onto the page can be a challenge. </p>
        <p>Finding the right support doesn’t have to be. Here’s what it’s like to work with me!</p>
      </div>
      <VueSlickCarousel v-bind="settings" class="carousel">
        <div v-for="slide in slides" :key="slide.quote">
          <p class="quote white-bg" v-html="slide.quote"></p>
        </div>
      </VueSlickCarousel>
    
      
    </section>
    <section id="twd">
  <div class="flex vertical center content">
        <div>
          <p class="text-content">In addition to working with businesses and helping writers one-on-one, I give 10% of The Writing Desk’s profits to local and national organizations supporting literacy, writing education, and writers from marginalized groups.</p>
          <p class="text-content mb-20">I’d love to stay in touch and learn about your projects. Sign up for my free newsletter, Word to the Wise, and get writing tips and author interviews delivered right to your inbox.</p>
          <h3 class="text-center">Get the Newsletter!</h3>
          <KitForm id="972b5da60a"/>
          <!--<script async data-uid="972b5da60a" src="https://usethewritingdesk.ck.page/972b5da60a/index.js" type="application/javascript"></script>-->
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import KitForm from "../components/KitForm.vue";
export default {
  data() {
    return {
      slides: [
        {
          quote: '“Bailey provided me with invaluable tips and tricks that I now use with every session.”<strong>—Milena Velez, SC, YA and Children’s Author—Coaching Program.</strong>'
        },
        {
          quote: '“Bailey is fast, professional, and talented.”<strong>—Sara Blackstock, East Hartford, CT—Copywriting.</strong>'
        },
        {
          quote: '“Great editor—timely work, understood what I’m doing, and made helpful suggestions. Highly recommended!”<strong>—Plum' +
              '      White Press, LLC—Copy editing.</strong>'
        },
        {
          quote: '“Bailey was friendly and easy to work with. It was a joy!”<strong>—Crystal B., Romance Author—Proofreading.</strong>'
        },
        {
          quote:'Her writing skills are excellent. Additionally, she is warm, catches on quickly, and clearly cares about her work and our clients. She communicated clearly with our team and met all deadlines. I highly recommend her!”<strong>—Mary Cullen, Founder of Instructional Solutions—Writing, Editing, and Coaching. </strong>'
        },
        {
          quote: '"I cannot express how happy I am with the end result."<strong>—Rey, Science Fiction Author—Developmental editing.</strong>'
        },
        {
          quote: '"Bailey\'s editing and proofreading tightened up our messaging across the board. She is incredibly thorough and accurate." <strong>—Laralee Harkleroad, Associate Vice President of Marketing and Learning, enrollmentFUEL—Editing and Proofreading.</strong '
        }
      ],
       settings: {
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          slidesToShow: 2,
          responsive: [
          {
            "breakpoint": 1024,
            "settings": {
            "slidesToShow": 1,
        
        }
    }],

        },
    }
  },
  components: { KitForm,/*VueSlickCarousel*/ },
  methods: {
    next() {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous() {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
    isEven(id){
      let remainder = id % 2;
      if(remainder == 0){
        return true;
      }
      return false;
    }
  }
}
</script>