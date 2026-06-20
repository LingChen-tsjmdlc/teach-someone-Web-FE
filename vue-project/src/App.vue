<template>
  <!-- count点击输出加重置 -->
  <div class="flex items-center flex-col">
    <p> :class="changeCoLor" class="flex justify-center">当前计数：{{ count }}</p>
    <button @click="addOne" class="text-center cursor-pointer">点击+1</button>
  </div>
  <div class="flex justify-center">
    <span class="bg-blue-200 text-2xl rounded-full px-2.5 py-1 cursor-pointer" @click="reset"
      >重置</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref, computed, resolveDirective } from 'vue'

// count点击输出
const count = ref(0)
const addOne = () => {
  count.value++
}

// 重置
const reset = () => {
  count.value = 0
}

// 颜色改变
const changeCoLor = computed(() => {
  if (count.value > 10) return 'text-red-300'

  if (count.value <= 10) return 'text-blue-300'
})

</script>
