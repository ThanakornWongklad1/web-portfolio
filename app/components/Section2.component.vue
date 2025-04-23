<style>
.screen {
  margin: 0;
  width: 100%;
  background: rgb(193, 193, 193);
  background: radial-gradient(
    circle at -80% 50%,
    rgba(198, 252, 166, 0.4) 0%,
    rgba(167, 252, 238, 0.2) 26%,
    rgba(0, 0, 0, 0) 52%
  );
}

.noise {
  background-image: url("/assets/image/noise.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
<template>
  <div
    id="projects"
    class="absolute -z-20 h-svh w-full bg-linear-to-t from-new-blue-500/10 from-20% to-black px-7"
  ></div>
  <div class="px-7 screen">
    <!-- header -->
    <div class="w-full flex flex-col items-center">
      <p
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="400"
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
        :delay="300"
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
        :delay="400"
        :duration="600"
        class="text-center text-white/40"
      >
        Compilation of projects that evoke my sense of pride
      </p>
    </div>

    <!-- card project -->
    <div
      v-motion
      :initial="{ y: 30, scale: 0.8, opacity: 0 }"
      :enter="{ y: 0, scale: 1, opacity: 1 }"
      :visible="{ y: 0, scale: 1, opacity: 1 }"
      :duration="500"
      class="flex flex-col gap-y-10 items-center mt-16"
    >
      <div
        v-for="item in content"
        :class="item.decorate_class"
        class="noise w-[330px] h-[600px] md:w-[700px] md:h-[450px] xl:w-[1024px] rounded-3xl sticky"
      >
        <div
          class="pt-5 flex flex-col md:flex-row justify-start md:justify-between w-full h-full relative"
        >
          <div
            class="w-full md:w-7/12 pl-5 pr-5 md:pl-5 md:pr-0 xl:pl-20 h-full flex flex-col md:justify-center gap-5"
          >
            <div class="flex gap-3 text-sm md:text-base font-semibold">
              <p class="text-gradient">{{ item.name }}</p>
              <div
                class="w-1.5 h-1.5 my-auto rounded-full gradient-background"
              ></div>
              <p class="text-gradient">{{ item.year }}</p>
            </div>
            <h2 class="text-3xl md:text-[40px] font-medium">
              {{ item.title }}
            </h2>
            <div class="w-full h-0.5 bg-white/10 rounded-full"></div>
            <article
              class="font-light text-sm md:text-base text-white/80 leading-6 md:leading-7 xl:leading-9"
            >
              {{ item.description }}
            </article>
            <a
              v-if="item.button"
              :href="item.button"
              target="_blank"
              class="bg-white hover:scale-105 transition text-black p-2 w-[270px] md:w-[200px] rounded-xl flex justify-center gap-2 group"
            >
              Visit website
              <UIcon
                name="i-heroicons-arrow-up-right"
                class="w-5 h-5 my-auto group-hover:rotate-45 group-hover:translate-x-1.5 transition"
              />
            </a>
          </div>
          <div :class="item.image_style" class="absolute">
            <img
              :src="item.image"
              :alt="item.title + ' image'"
              class="mx-auto w-full object-cover rounded-3xl"
            />
          </div>
        </div>
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
<script setup lang="ts">
const content = [
  {
    name: "Integrated Project",
    title: "SIT Announcement",
    year: 2023,
    description:
      "SIT Announcement project is a web application for announcing news of IT students. The project is a web application that allows administrators to post news and students to view the news. The project was developed using Vue3, Java, and MySQL. Authentication is done using JWT",
    decorate_class: "top-[80px] bg-[#315539]",
    image: "/images/sas_mac.png",
    image_style:
      "w-full md:w-[500px] xl:w-[600px] bottom-0 md:bottom-1/2 md:translate-y-1/2 md:-right-56 xl:-right-48",
    button: undefined,
  },
  {
    name: "Internship",
    title: "Safetify",
    year: 2024,
    description:
      "Safetify is an E-stamp Online System for village or condominium. Notify visitors via Line Official in Real-time. The system is developed using Vue3, Nest.js, PostgreSQL, and LINE Liff.",
    decorate_class: "top-[120px] bg-[#224336]",
    image: "/images/safetify.png",
    image_style:
      "w-11/12 -bottom-24 right-3 md:w-[250px] md:bottom-1/2 md:translate-y-1/2 md:right-3 xl:w-[400px] xl:-bottom-16 xl:right-3 xl:translate-y-0",
    button: "https://www.safetify.app/",
  },
  {
    name: "Internship",
    title: "Line Messaging Service",
    year: "2024",
    description:
      "SIT Announcement project is a system for announcing news of IT students. It was developed in the third year of the INT222-Integrated Project. The project is a web application that allows administrators to post news and students to view the news. The project was developed using Vue3, Java, and MySQL.",
    decorate_class: "top-[160px] bg-[#112e29]",
    image: "/images/emoji.png",
    image_style:
      "w-[250px] bottom-0 right-10 md:w-[300px] md:right-0 md:bottom-0 xl:w-[400px] xl:right-0 xl:bottom-0",
    button: undefined,
  },
  {
    name: "Capstone Project",
    title: "Order Swift",
    year: "2024-2025",
    description:
      "SIT Announcement project is a system for announcing news of IT students. It was developed in the third year of the INT222-Integrated Project. The project is a web application that allows administrators to post news and students to view the news. The project was developed using Vue3, Java, and MySQL.",
    decorate_class: "top-[160px] bg-[#153e3e]",
    image: "/images/orderswift-cv.png",
    image_style:
      "w-11/12 -bottom-24 right-3 md:w-[250px] md:bottom-1/2 md:translate-y-1/2 md:right-3 xl:w-[400px] xl:-bottom-16 xl:right-3 xl:translate-y-0",
    button: undefined,
  },
];
</script>
