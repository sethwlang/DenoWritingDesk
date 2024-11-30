<template>
  <div class="edit">
    <div class="flex columns header">
      <div class="image">
        <picture>
          <source type="image/webp" srcset="../assets/images/writing.webp">
          <source type="image/jpeg" srcset="../assets/images/writing.jpg">
            <img   src="../assets/images/writing.jpg" />
        </picture>
       
      </div>
      <div class="flex vertical center content">
        <div class="text-content">
          <h1 class="handwriting">Editing Services</h1>
          <p >When you’re thinking about putting your work out into the world, I’ll help you develop your best ideas—and
             avoid going to print with any pesky typos still hanging around.</p>
            <p>Whether you’re working on the first draft of a book or putting the final touches in place for a 
              marketing campaign, I’ve got an editing service to match.</p>

        </div>
      </div>
    </div>

    <section id="twd" class="bg-primary-light">
      <div class="text-content">
        <h2 class="handwriting">Developmental Editing</h2>
        <p>Developmental editing takes two forms: ongoing coaching and feedback as you work on a draft, or an in-depth
           review of a completed manuscript. Whether you’re writing shorter works (articles, blog posts, thought 
           leadership) or books, a thorough developmental edit can sharpen your ideas and help you identify plot 
           holes before you stumble into them. </p>
 
        <p>Choosing developmental editing means you’ll get a professional editorial perspective on your manuscript 
          and specific, actionable feedback. Developmental editing provides insight into big-picture items 
          like argument, pacing, dialogue, and structure.</p>
 
        <p>If you have a book draft in progress, I’ll read your work as you go—and you’ll get regular feedback from me 
          with clear, in-depth suggestions.</p>
 
        <p>If you have a draft in progress, we’ll meet regularly to discuss your writing, assess your writing habits, and figure out how to overcome any roadblocks. 
          I’ll read your work as you go and make suggestions.</p>
 
        <p>If you have a completed manuscript, you’ll receive in-line comments and specific recommendations for your 
          revision. We can also meet virtually to answer your questions and do a deep dive into my suggestions.</p>

        <p class="quote white-bg"><i>“I cannot express how happy I am with the end result. I would not hesitate to work with Bailey again.”
        <strong>—Rey, Science Fiction Author.</strong></i></p>
        <p> I bring more than a decade of writing and editing experience to the table. I provide developmental edits for
          writers working on:</p>
          <ul class="list-disc ml-5">
            <li class="indent-1">Fiction—especially science fiction, fantasy, and romance novels</li>
            <li>Nonfiction—with an emphasis on business and finance books and articles</li>
            <li>Academic monographs and articles—particularly in the humanities</li>
            </ul>

        <p>Developmental editing is an investment in your growth as a writer and the worth of your writing.</p>
    
        <p><a href="https://calendly.com/the-writing-desk/free-consultation"  target="_blank">Contact me</a> to schedule
           a free 30-minute consultation and let’s talk about your project.</p><br/>

        <a href="https://calendly.com/the-writing-desk/free-consultation" class="primary-button" ><span>Contact Bailey</span></a>

        <div class="hidden">
          <h3 class="handwriting">Client Projects</h3>
        <!--<VueSlickCarousel v-bind="settings" class="carousel">
        <div v-for="project in projects" :key="project.id">
          <a :href="project.url">
          <p  v-html="project.title"></p>
          <img src=""/>
        </a>
          
        </div>
      </VueSlickCarousel>-->
      </div>
      </div>
    </section>


      
    <section id="twd" class="flex columns editing-proofreading">
      <div class="content mt-5">
        <picture>
          <source type="image/webp" srcset="../assets/images/writing3.webp">
          <source type="image/jpeg" srcset="../assets/images/writing3.jpg">
          <img class="" src="../assets/images/writing3.jpg"/>
        </picture>
      </div>
      <div class="content">
        <h2 class="handwriting mt-0">Copyediting and Proofreading</h2>
        <p>
        Developmental editing helps you identify big-picture items for revision, but doesn’t focus on style,
        technical considerations, or typos. However, your work also deserves close attention at the sentence level!</p>
        <p>
        Spell check and grammar tools are useful, but they’re still no match for a human editor who understands
        context—as well as how, when, and why to break the rules.
        </p>
       <p>When your project is ready to spread its wings and fly, copyediting and proofreading clear the runway.</p>
       <p>Your website copy, marketing collateral, books, and other writing projects will benefit from copyediting and proofreading alike.</p>
       <h5>Copyediting</h5>
       <p>Copyediting emphasizes technical considerations like grammar, spelling, punctuation, and sentence structure. 
        I also focus on content, style, and language use. If you’re using an in-house style guide or APA, MLA, or 
        Chicago style, I’ll ensure your project adheres to those guidelines.</p>
        <h5>Proofreading</h5>
        <p>Proofreading is the last edit before a project is published—this is where I'll check your work for any 
          lingering typos or other small issues. </p>
          <p>At the end of the editing process, you’ll receive an edited copy of your document, along with a summary 
            explaining what changes I made, why I made them, and any patterns I noticed.</p>
            <p>The cost of putting poorly edited work out into the world is astronomical—investing in edits ahead of 
              time saves time, money, and embarrassment.</p>
              <p><a href="https://calendly.com/the-writing-desk/free-consultation"  target="_blank">Contact me</a> 
                to get started!</p><br/>
                <a href="https://calendly.com/the-writing-desk/free-consultation" class="primary-button" ><span>Contact Bailey</span></a>
      </div>
    </section>
      <div><div>
          <p class="quote white-bg"><i>"I couldn't be more pleased to work with Bailey! She's an amazing editor—really knows her stuff and also so
            quick and efficient. I loved that she was very responsive and answered all my questions quickly. Bailey is an
            amazing find"<br/><strong>—Mish S., Cookbook Author.</strong></i></p>
        </div>

      </div>
  

  </div>
</template>

<script>
//import VueSlickCarousel from 'vue-slick-carousel'
//import 'vue-slick-carousel/dist/vue-slick-carousel.css';
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "home",
  data() {
    return {
      projects: [
      {id: 1, title:"Free Yourself to Work on Your Business", img:"",url:"https://www.amazon.com/gp/product/B0BN6J4Z2F/ref=dbs_a_def_rwt_bibl_vppi_i2"},
      {id: 2, title:"Winning Virtually", img:"",url:"https://www.amazon.com/gp/product/B08YS388TX/ref=dbs_a_def_rwt_bibl_vppi_i0"},
      {id: 3, title:"Octane", img:"",url:"https://www.enrollmentfuel.com/octane-library/"},
      {id: 4, title:"The Life Transformation Workbook", img:"",url:"https://www.amazon.com/gp/product/B09PHV8X53/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0"},
      {id: 5, title:"The Adventures of Hercules: A New Friend", img:"",url:"https://www.amazon.com/Adventures-Hercules-New-Friend/dp/B0BXN7K1XP/ref=sr_1_1?crid=3D7CDIRXWSKME&keywords=milena+velez&qid=1678718203&sprefix=milena+velez%2Caps%2C317&sr=8-1"},
      {id: 6, title:"What Do You Really Own in the Ownership Economy?", img:"",url:"https://www.coindesk.com/layer2/2022/11/22/what-do-you-really-own-in-the-ownership-economy/"},
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
  components: { /*VueSlickCarousel*/ },
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