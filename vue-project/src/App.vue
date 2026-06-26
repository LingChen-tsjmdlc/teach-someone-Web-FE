<template>
  <div>
    <p class="bg-blue-300" :class="{ 'text-red-500': count >= 10 }">当前计数：{{ count }}</p>
    <button @click="addOne">点击+1</button>
  </div>
  <div class="flex flex-row">
    <card addFirst="bg-yellow-500" addSecond="bg-blue-300" /><card /><card />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import card from './components/card.vue'

const count = ref(0)
const addOne = () => {
  count.value = count.value + 1
}
</script>
