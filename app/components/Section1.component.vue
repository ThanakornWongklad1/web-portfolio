<template>
  <div
    id="home"
    class="relative overflow-hidden w-full flex flex-col justify-center gap-20 h-screen bg-linear-to-b from-new-blue-500/10 from-20% to-black px-7"
  >
    <div class="text-center flex justify-center">
      <div class="flex flex-col items-center gap-7 h-full">
        <div
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
          :duration="300"
          class="flex flex-col"
        >
          <img
            src="../assets/image/emoji.png"
            alt="my emoji image"
            class="w-[60px] mx-auto"
          />
          <div
            class="w-fit flex gap-3 justify-center bg-black/30 px-3 py-2 rounded-xl border border-[#6ABE5E]/10"
          >
            <div class="w-3 h-3 pulse rounded-full bg-[#6ABE5E] my-auto"></div>
            <p class="text-[14px]">Available for opportunities</p>
          </div>
        </div>
        <div>
          <div
            class="text-[30px] md:text-[40px] font-medium text-white leading-[1.2]"
          >
            <h1
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1 }"
              :visible="{ opacity: 1 }"
              :delay="300"
              :duration="300"
            >
              Welcome to
            </h1>
            <h1
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1 }"
              :visible="{ opacity: 1 }"
              :delay="400"
              :duration="600"
            >
              my personal portfolio
            </h1>
          </div>
          <p
            v-motion
            :initial="{ opacity: 0, y: 60 }"
            :enter="{ opacity: 1, y: 0 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="400"
            :duration="700"
            class="mt-4 text-white/40 font-light text-sm md:text-lg w-[250px] md:w-[500px] mx-auto"
          >
            Hi, I'm Thanakorn Wongklad. I'm incredibly passionate about web
            applications & UI/UX design
          </p>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 60 }"
          :enter="{ opacity: 1, y: 0 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
          :duration="1000"
          class="flex flex-col gap-3 md:flex-row md:gap-6 z-20"
        >
          <button
            class="bg-white text-black p-2 w-[270px] md:w-[180px] rounded-xl hover:scale-105 transition"
          >
            Get in touch
          </button>
          <button
            class="bg-black/20 hover:scale-105 transition text-white border border-white/30 p-2 w-[270px] md:w-[180px] rounded-xl flex justify-center gap-2"
          >
            Download CV
            <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5 my-auto" />
          </button>
        </div>
      </div>
    </div>

    <NuxtMarquee
      class="overflow-hidden"
      :direction="'left'"
      :gradient="true"
      :gradientColor="'#000'"
      :gradient-width="'100px'"
    >
      <div v-for="skill in skills">
        <div class="flex gap-2 justify-center mx-5">
          <UIcon :name="skill.icon" class="w-8 h-8 my-auto" />
          <p class="my-auto font-bold text-2xl">{{ skill.name }}</p>
        </div>
      </div>
    </NuxtMarquee>

    <!-- circle -->
    <div
      class="-z-10 absolute top-32 md:top-28 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[550px] md:h-[550px] rounded-full border border-[#C6FCA6]/4 bg-radial from-white/0 from-40% to-[#C6FCA6]/10"
    ></div>
    <div
      class="-z-10 absolute top-20 md:top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full border border-[#C6FCA6]/4 bg-radial from-white/0 from-40% to-[#C6FCA6]/10"
    ></div>
    <div
      class="-z-10 absolute top-10 md:-top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[850px] md:h-[850px] rounded-full border border-[#C6FCA6]/4 bg-radial from-white/0 from-40% to-[#C6FCA6]/10"
    ></div>

    <!-- light source -->
    <img
      src="../assets/image/lightSource.svg"
      alt="light source"
      class="absolute top-0 left-0 w-full mask-b-from-20% mask-b-to-80% opacity-30"
    />
  </div>
</template>
<script setup lang="ts">
const skills = [
  {
    name: "HTML",
    icon: "ri:html5-fill",
  },
  {
    name: "CSS",
    icon: "ri:css3-fill",
  },
  {
    name: "JavaScript",
    icon: "ri:javascript-fill",
  },
  {
    name: "TypeScript",
    icon: "lineicons:typescript",
  },
  {
    name: "Vue.js",
    icon: "ri:vuejs-fill",
  },
  {
    name: "Nuxt.js",
    icon: "lineicons:nuxt",
  },
  {
    name: "Tailwind CSS",
    icon: "ri:tailwind-css-fill",
  },
  {
    name: "Git",
    icon: "iconoir:git-solid",
  },
  {
    name: "node.js",
    icon: "ri:nodejs-fill",
  },
  {
    name: "Express.js",
    icon: "skill-icons:expressjs-light",
  },
  {
    name: "Nest.js",
    icon: "file-icons:nestjs",
  },
  {
    name: "MySQL",
    icon: "ri:database-2-fill",
  },
  {
    name: "PostgreSQL",
    icon: "akar-icons:postgresql-fill",
  },
];
</script>
