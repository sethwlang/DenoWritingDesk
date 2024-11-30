<template>
    <footer class="footer font-extrabold flex flex-wrap items-center justify-center">
        <span style="font-weight:500; margin-right:12px;">© Copyright 2024</span>The Writing Desk, LLC <span style="font-weight:500; margin-right:12px; margin-left:5px;">  | <router-link to="/disclaimer">Disclaimer</router-link> | <router-link to="/terms">Terms of Use</router-link> | <router-link to="/privacy">Privacy Policy</router-link></span>
    </footer>
</template>

<style scoped lang="scss">
  footer {
    height:72px;
    background:rgba(243,250,251,0.32);
    color:rgba(22, 86, 98, 0.82);
    position:relative;
    z-index:2;
  }
</style>