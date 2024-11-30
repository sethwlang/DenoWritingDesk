<template>
  <div id="home" class="home">
    <div class="flex columns bg-twd-blue-secondary-light header">
      <div class="company-description">
        <div class="text-content">
          <h1 class="handwriting mt-10">Welcome to<br> The Writing Desk!</h1>
          <p >I’m Bailey Lang: writer, editor, coach, and founder of The Writing Desk. </p>
          <p>I work with businesses to develop high-impact thought leadership and marketing materials, including blog posts, books and ebooks, and more.</p>
          <p>I help writers build, test, and customize sustainable, enjoyable writing practices that will get you from draft to done. </p>
          <h4 >The Writing Desk exists to help you tell stories that matter.</h4>
          <p >I’m excited you’re here! Let’s talk about what I can do for you.</p>
        </div>
      </div>
      <div class="image" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    </div>

    <div class="flex flex-wrap writing-services">
      <h1 class="handwriting">The Writing Desk Services</h1>
      <div class="w-full services-panel tab-panel">
        <ul class="flex mb-0 list-none flex-wrap flex-row">
          <li class="-mb-px last:mr-0 text-center">
            <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(1)"
               v-bind:class="{'active': openTab === 1}">
              Writing
            </a>
          </li>
          <li class="-mb-px last:mr-0 text-center">
            <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(2)"
               v-bind:class="{'active': openTab === 2}">
              Editing
            </a>
          </li>
          <li class="-mb-px last:mr-0 text-center">
            <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(3)"
               v-bind:class="{'active': openTab === 3}">
              Coaching
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded bg-twd-blue-secondary-light services-descriptions panel-content">
          <div class="py-5 flex vertical center">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div class="flex vertical items-center justify-center bg-twd-blue-secondary-light">
                  <p>
                    Are you struggling to find the right words? I specialize in copywriting and ghostwriting for education, finance, and technology businesses.
                    Are you wrestling with your content strategy? I can help with that, too! 
                  </p>
                </div>
                <router-link class="primary-button" to="/write">
                  <span>Learn More</span>
                </router-link>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <div class="flex vertical items-center justify-center">
                  <p>
                    It’s time to take your writing to the next level! Whether you need developmental editing, copyediting, or proofreading, I’ve got you covered.
                  </p>
                </div>
                <router-link class="primary-button" to="/edit">
                  <span>Learn More</span>
                </router-link>
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <div class="flex vertical items-center justify-center">
                  <p>
                    If you’re a writer who needs additional support in making real progress on your writing goals, look no further! 
                    I offer a live writing group, writing strategy audits, and one-on-one coaching.
                  </p>
                </div>
                <router-link class="primary-button" to="/unstuck">
                  <span>Learn More</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-and-testimonials">
      <div id="signup">
        <KitForm id="12d0a0d491"/>
        <!--<script async data-uid="12d0a0d491" type="application/javascript" src="https://usethewritingdesk.ck.page/12d0a0d491/index.js" defer></script>-->
      </div>
      <div class="testimonials">
        <div id="testimonies">
          <div>
            <p class="quote white-bg">
              “Bailey has been a key part of refining our website copy, creating several key product announcements, and
              creating concise user-help guides.”
              <strong>
              — Sara Blackstock. East Hartford, CT. Virtual Reality Training Software Company. 
              </strong>
            </p>
          </div>
          <div>
            <p class="quote white-bg">
              “Bailey is the consummate professional. She provided clear, concise, and informative feedback to my work. When
              you are writing a large and meandering novel such as mine, it takes a keen and sensitive eye to catch all the
              discrepancies and an avid lover of words to really grasp the heart of your intention. Bailey did all this and
              more.”
              <strong>—Rey, Science Fiction Author.</strong>
            </p>
          </div>
          <div>
            <p class="quote white-bg">
              “Making sure our copy fit our brand was important to our university. We needed to trust that whoever was writing our content understood who we were. 
              Bailey was on target from the start! Bailey is friendly, attentive, and understands our needs. She is such a joy to work with.” 
              <strong>—Jennifer Walker. Director of Marketing, Southern Wesleyan University</strong>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/images/LandingPage.webp';
import KitForm from "../components/KitForm.vue";
export default {
  name: "home",
  components: {KitForm},
  data() {
    return {
      openTab: 1,
      backgroundImage,
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>