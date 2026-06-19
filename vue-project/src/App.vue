<script setup lang="ts"></script>

<template>
 <div>
 <p>当前计数：{{count}}</p>
 <button @click="addOne">点击+1</button>
 </div>
 </template>
 
 <script setup>
 import{ref}from'vue';
const count=ref(0);
const addOne=()=>{
  count.value++;
}
</script>

<style scoped></style>
