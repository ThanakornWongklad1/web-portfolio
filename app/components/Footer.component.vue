<template>
  <!-- footer -->
  <div class="w-full h-[0.5px] bg-white/20 hidden xl:flex mt-32"></div>
  <footer
    id="footer"
    class="flex justify-center mt-20 xl:mt-0 pb-7 px-10 bg-black/30 xl:bg-black/0"
  >
    <div
      class="w-full flex justify-center md:justify-evenly xl:justify-between gap-5 pt-7 xl:pt-0 text-sm md:text-base"
    >
      <!-- email,phone -->
      <div class="flex flex-col xl:flex-row gap-5">
        <div class="flex gap-2">
          <UIcon name="i-heroicons-envelope-solid" class="w-5 h-5" />
          <p class="text-white">wongkladt@gmail.com</p>
        </div>
        <div class="flex gap-2">
          <UIcon name="i-heroicons-phone-solid" class="w-5 h-5" />
          <p class="text-white">(+66) 92 894 3729</p>
        </div>
      </div>
      <!-- github,linkedIn, IG -->
      <div class="flex flex-col xl:flex-row gap-5">
        <a
          href="https://github.com/ThanakornWongklad1"
          target="_blank"
          class="flex gap-2 hover:underline"
        >
          <UIcon name="i-simple-icons-github" class="w-5 h-5" />
          <p class="text-white">GitHub</p>
        </a>
        <a
          href="https://linkedin.com/in/thanakorn-wongklad-401739289"
          target="_blank"
          class="flex gap-2 hover:underline"
        >
          <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
          <p class="text-white">linkedIn</p>
        </a>
        <a href="#" target="_blank" class="flex gap-2 hover:underline">
          <UIcon name="ri:instagram-fill" class="w-5 h-5" />
          <p class="text-white">Instagram</p>
        </a>
      </div>
    </div>
  </footer>
</template>
