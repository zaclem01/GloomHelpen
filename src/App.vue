<template>
  <div>
    <nav-bar />
    <h1 class="font-gloom">GloomHelpen</h1>
    <p>Welcome to GloomHelpen. Get started by choosing a character below.</p>
    <p>Want to save your information for your entire campaign?</p>
    <button>Sign Up</button>
    <a>Sign In</a>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

<style lang="postcss">

</style>
