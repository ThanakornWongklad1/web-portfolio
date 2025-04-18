<template>
  <div
    id="projects"
    class="absolute -z-20 h-svh w-full bg-linear-to-t from-new-blue-500/10 from-20% to-black px-7"
  ></div>
  <div
    id="projects"
    class="absolute translate-y-1/5 -z-10 -left-10/12 opacity-50 overflow-hidden h-[120rem] md:h-[80rem] w-full blur-[100px] md:blur-[300px] bg-linear-to-t from-[#C6FCA6] to-[#A7FCEE]/74 rounded-full px-7"
  ></div>
  <div class="px-7 mt-5 md:mt-44">
    <!-- header -->
    <div class="w-full flex flex-col items-center">
      <p
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
        :duration="300"
        class="text-sm md:text-[16px] text-gradient tracking-[0.3rem]"
      >
        EXPERIENCES
      </p>
      <h1
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :visible="{ opacity: 1 }"
        :delay="100"
        :duration="300"
        class="text-[30px] md:text-[40px] font-medium text-white"
      >
        My Projects
      </h1>
      <p
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :visible="{ opacity: 1 }"
        :delay="200"
        :duration="600"
        class="text-center text-white/40"
      >
        Compilation of projects that evoke my sense of pride
      </p>
    </div>

    <!-- card project -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :visible="{ opacity: 1 }"
      :duration="300"
      :delay="200"
      class="flex flex-col gap-y-10 items-center mt-16"
    >
      <div
        class="bg-[#2B423F] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[80px]"
      >
        A
      </div>
      <div
        class="bg-[#334D3C] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[120px]"
      >
        B
      </div>
      <div
        class="bg-[#334d4d] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[160px]"
      >
        C
      </div>
      <div
        class="bg-[#334d4d] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[200px]"
      >
        D
      </div>
    </div>
  </div>
  <NuxtMarquee
    class="overflow-hidden mt-32 md:mt-44 -rotate-1 bg-linear-to-br from-[#C6FCA6] to-[#A7FCEE]/74"
    :direction="'left'"
    :gradient="true"
    :gradientColor="'#c6fca6'"
    :gradient-width="'100px'"
    :auto-fill="true"
  >
    <div class="flex gap-3 justify-center py-2 text-black">
      <UIcon name="i-heroicons-bolt-solid" class="w-5 h-5 my-auto" />
      <p class="my-auto font-medium text-2xl mx-5">Thanakorn</p>
    </div>
  </NuxtMarquee>
</template>
