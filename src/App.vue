<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <div class="flex-col" >
    <div>
    <NavBar />
  </div>
  <div>
    <main>
      <RouterView />
    </main>
  </div>
  </div>
</template>
