<template>
  <div class="flex flex-col relative overflow-hidden">
    <div id="about" class="w-full flex justify-center mb-20">
      <div class="pt-32 w-[330px] md:w-[700px] xl:w-[1050px]">
        <div class="flex flex-col md:flex-row justify-between gap-5">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="300"
            :duration="300"
            class="flex md:hidden flex-col mb-5"
          >
            <p class="text-sm md:text-[16px] text-gradient tracking-[0.3rem]">
              ABOUT ME
            </p>
            <h1 class="text-[30px] md:text-[40px] font-medium text-white">
              Know who am I
            </h1>
            <p class="text-white">My journey in few words</p>
          </div>
          <div class="w-full flex flex-col items-start order-2 md:order-1">
            <div
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="300"
              :duration="300"
              class="hidden md:flex flex-col"
            >
              <p class="text-sm md:text-[16px] text-gradient tracking-[0.3rem]">
                ABOUT ME
              </p>
              <h1 class="text-[30px] md:text-[40px] font-medium text-white">
                Know who am I
              </h1>
              <p class="text-white text-lg">My journey in few words</p>
            </div>
            <article
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="400"
              :duration="300"
              class="pt-5 indent-5 text-white/60 text-[16px] lg:text-lg"
            >
              Hi, I'm Thanakorn Wongklad. You can call me “Af”. I'm graduated
              from KMUTT, Faculty of Information Technology. I'm incredibly
              passionate about web applications & UI/UX design - I became
              interested in Frontend when I learned about creating web
              applications using HTML, CSS, javascript and vue3. I am eager to
              gain exposure to new knowledge about Frontend and new technologies
              in the future.
            </article>
          </div>
          <img
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="400"
            :duration="300"
            src="../assets/image/PosterProfile.png"
            alt="My profile poster"
            class="w-[300px] md:w-[300px] xl:w-[350px] object-contain order-1 md:order-2 hover:scale-110 hover:-rotate-[10deg] transition duration-400"
          />
        </div>
      </div>
    </div>
    <NuxtMarquee
      class="overflow-hidden mb-20 rotate-1 bg-linear-to-br from-[#C6FCA6] to-[#A7FCEE]/74"
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
    <div id="skills" class="w-full flex flex-col gap-8">
      <div class="flex justify-center">
        <div class="w-[330px] md:w-[700px] xl:w-[1050px]">
          <div class="flex flex-col gap-5">
            <p
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="200"
              :duration="300"
              class="text-sm md:text-[16px] text-gradient tracking-[0.3rem]"
            >
              MY SKILLS
            </p>
            <h1
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="100"
              :duration="300"
              class="text-[30px] md:text-[40px] font-medium text-white leading-6"
            >
              Technology Stack
            </h1>
            <div class="w-full h-[1px] bg-white/30"></div>
            <div class="flex flex-col gap-5" v-for="(side, index) in mySkills">
              <p
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :enter="{ opacity: 1, x: 0 }"
                :visible="{ opacity: 1, x: 0 }"
                :delay="200"
                :duration="300"
                class="text-white/70 text-lg font-light"
              >
                {{ index }}
              </p>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="(skill, index) in side"
                  :key="skill.name"
                  class="bg-black/20 border border-white/20 w-[158px] md:w-[165px] xl:w-[200px] text-sm p-3 rounded-xl flex gap-2"
                  v-motion
                  :initial="{ opacity: 0, x: -30 }"
                  :enter="{ opacity: 1, x: 0 }"
                  :visible="{ opacity: 1, x: 0 }"
                  :delay="100 + index * 50"
                  :duration="300"
                >
                  <div
                    :class="skill.bgCOlor"
                    class="rounded-[10px] flex justify-center items-center w-8 h-8"
                  >
                    <UIcon :name="skill.icon" class="w-5 h-5" />
                  </div>
                  <p class="my-auto">{{ skill.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
<script setup lang="ts">
const mySkills = {
  Frontend: [
    {
      name: "HTML",
      icon: "vscode-icons:file-type-html",
      bgCOlor: "bg-[#DD4B25]/20",
    },
    {
      name: "CSS",
      icon: "devicon:css3",
      bgCOlor: "bg-[#264DE4]/20",
    },
    {
      name: "JavaScript",
      icon: "logos:javascript",
      bgCOlor: "bg-[#F7DF1E]/20",
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
      bgCOlor: "bg-[#007ACC]/20",
    },
    {
      name: "Vue.js",
      icon: "logos:vue",
      bgCOlor: "bg-[#41B883]/20",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      bgCOlor: "bg-[#06B6D4]/20",
    },
    {
      name: "Nuxt.js",
      icon: "logos:nuxt-icon",
      bgCOlor: "bg-[#00DC82]/20",
    },
  ],
  Backend: [
    {
      name: "NestJS",
      icon: "logos:nestjs",
      bgCOlor: "bg-[#E0234E]/20",
    },
    {
      name: "Node.js",
      icon: "material-icon-theme:nodejs-alt",
      bgCOlor: "bg-[#8CC84B]/20",
    },
    {
      name: "Express.js",
      icon: "skill-icons:expressjs-light",
      bgCOlor: "bg-[#ffffff]/20",
    },
    {
      name: "Inertia.js",
      icon: "devicon:inertiajs",
      bgCOlor: "bg-[#4B5563]/20",
    },
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
      bgCOlor: "bg-[#336791]/20",
    },
    {
      name: "MySQL",
      icon: "vscode-icons:file-type-mysql",
      bgCOlor: "bg-[#4479A1]/20",
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
      bgCOlor: "bg-[#47A248]/20",
    },
    {
      name: "firebase",
      icon: "logos:firebase",
      bgCOlor: "bg-[#FFCA28]/20",
    },
  ],
  Tools_Others: [
    {
      name: "GitHub",
      icon: "devicon:github",
      bgCOlor: "bg-[#ffffff]/80",
    },
    {
      name: "GitLab",
      icon: "vscode-icons:file-type-gitlab",
      bgCOlor: "bg-[#E24329]/20",
    },
    {
      name: "Figma",
      icon: "logos:figma",
      bgCOlor: "bg-[#F24E1]/20",
    },
    {
      name: "Postman",
      icon: "logos:postman-icon",
      bgCOlor: "bg-[#FF6C37]/20",
    },
    {
      name: "Docker",
      icon: "logos:docker-icon",
      bgCOlor: "bg-[#2496ED]/20",
    },
  ],
};
</script>
