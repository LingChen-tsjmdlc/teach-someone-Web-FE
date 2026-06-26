<template>
  <div
    class="w-64 rounded-xl shadow-lg overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out"
  >
    <!-- 上半部分 -->
    <div :class="'bg-blue-500 p-4 text-white h-15 ' + addFirst">
      <h2 class="text-xl font-bold">卡片标题</h2>
    </div>
    <!-- 下半部分 -->
    <div :class="'bg-white p-4 text-gray-800 h-80 ' + addSecond">
      <p>这里是卡片的下半部分内容，可以放置描述文字或操作按钮。</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  addFirst: String,
  addSecond: String,
})
</script>
