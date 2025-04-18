<template>
  <nav class="flex justify-center w-full">
    <div
      class="w-[330px] z-50 hidden shadow-xl md:flex fixed top-4 bg-white/10 backdrop-blur-md rounded-full border border-white/10 py-2 justify-around"
    >
      <a href="/" class="hover:text-[#c6fca6]">Home</a>
      <a href="#projects" class="hover:text-[#c6fca6]">Projects</a>
      <a href="#about" class="hover:text-[#c6fca6]">About</a>
      <a href="#skills" class="hover:text-[#c6fca6]">Skills</a>
    </div>

    <div
      class="w-[330px] z-50 px-5 md:hidden shadow-xl fixed top-4 bg-white/10 backdrop-blur-md rounded-full border border-white/10 py-2 flex justify-between"
    >
      <a href="#home" class="hover:text-[#c6fca6]">Welcome</a>
      <UModal
        v-model:open="openModal"
        :ui="{
          overlay: 'bg-blue-charcoal-950/50 ',
          content:
            'bg-white/10 backdrop-blur-xl ring-0 shadow-none rounded-3xl',
        }"
      >
        <UIcon
          v-if="!openModal"
          name="i-heroicons-bars-3"
          class="w-5 h-5 my-auto"
        />
        <UIcon v-else name="i-heroicons-x-mark" class="w-5 h-5 my-auto" />
        <template #content>
          <div
            @click="openModal = false"
            class="text-center flex flex-col gap-5 py-5 text-xl font-bold text-gradient underline decoration decoration-[#A7FCEE]/60"
          >
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
          </div>
        </template>
      </UModal>
    </div>
  </nav>
  <slot />
</template>

<script setup lang="ts">
const openModal = ref(false);
</script>
