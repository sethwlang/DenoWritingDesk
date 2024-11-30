<template>
  <div id="app" class="flex flex-col justify-between">
    <TopNav class="h-50"/>
    <router-view class="mb-auto h-auto"/>
    <Footer class="h-16"/>
    <div class="background-gradient">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="1080" viewBox="0 0 1920 1080">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_1" data-name="Rectangle 1" width="1920" height="1080" fill="#fff" stroke="#707070" stroke-width="1"/>
          </clipPath>
          <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#5aa1af" stop-opacity="0.431"/>
            <stop offset="1" stop-color="#5aa1af" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="radial-gradient-2" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#5a68af" stop-opacity="0.431"/>
            <stop offset="1" stop-color="#5a68af" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
          <g id="Group_1" data-name="Group 1">
            <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="1137" cy="1024" rx="1137" ry="1024" transform="translate(648 -73)" fill="url(#radial-gradient)"/>
            <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="1137" cy="1024" rx="1137" ry="1024" transform="translate(-791 286)" fill="url(#radial-gradient-2)"/>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    TopNav,
    Footer
  }
}
</script>

<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>
