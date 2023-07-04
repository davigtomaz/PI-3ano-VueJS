<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <div >
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>