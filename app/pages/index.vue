<template>
  <p class="text-3xl w-full mx-auto">Hello World</p>
  <NuxtMarquee
    class="text-3xl w-full mx-auto"
    :text="'Hello World'"
    :duration="10000"
    :delay="0"
    :direction="'left'"
  >
    <span class="text-3xl w-full mx-auto">Hello World</span>
    <span class="text-3xl w-full mx-auto">Hello World</span>
  </NuxtMarquee>
</template>
