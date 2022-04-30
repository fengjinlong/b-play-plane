<template>
  <Container>
    <Plane :plane="plane" />
    <Bullet v-for="ele in bullets" :bullet="ele" />
    <EnemyPlane v-for="ele in enemyPlanes" :enemyPlane="ele" />
  </Container>
</template>

<script setup lang="ts">
import Plane from "./components/Plane.vue";
import Bullet from "./components/Bullet.vue";
import EnemyPlane from "./components/EnemyPlane.vue";
import { initGame } from "./game";
import { reactive } from "vue";
const { plane, bullets, enemyPlanes } = initGame(reactive({}), reactive([]), reactive([]));
</script>
<style></style>
