<!-- KitForm.vue -->
<template>
  <div ref="ckContainer">
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'KitForm',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const ckContainer = ref(null);

    onMounted(() => {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.dataset.uid = props.id;//props.id;
      script.src = 'https://usethewritingdesk.ck.page/'+props.id+'/index.js'; // Replace with your script URL
      script.type = 'application/javascript';

      ckContainer.value.appendChild(script);
    });

    return {
      ckContainer,
    };
  },
};
</script>