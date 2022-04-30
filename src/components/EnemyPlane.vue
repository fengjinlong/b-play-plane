<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import enemyPlaneImg from "../assets/enemyPlane.png";
import { EnemyPlane } from "../game";
defineProps({
  enemyPlane: {
    type: Object as PropType<EnemyPlane>,
    required: true
  }
})
</script>
<style scoped></style>
