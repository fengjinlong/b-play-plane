<template>
  <Container>
    <Plane :plane="plane"/>
    <Bullet v-for="ele in bullets" :key="ele" :x="ele.x" :y="ele.y"/>
  </Container>
</template>

<script setup lang="ts">
import Plane from './components/Plane.vue'
import Bullet from './components/Bullet.vue';
import { initGame } from './game';
import { reactive } from 'vue';
const {plane, bullets} = initGame(reactive({}),reactive([]));

</script>
<style></style>