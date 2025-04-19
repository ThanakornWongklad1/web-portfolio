<style>
.screen {
  margin: 0;
  width: 100%;
  background: rgb(193, 193, 193);
  background: radial-gradient(
    circle at -50% 50%,
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
        class="noise bg-[#315539] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[80px]"
      >
        <div class="flex flex-col md:flex-row justify-between w-full h-full">
          <div
            class="w-full md:w-1/2 h-full flex flex-col justify-center gap-5"
          >
            <div class="flex gap-3 text-sm md:text-base font-bold">
              <p class="text-gradient">Integrated Project</p>
              <div
                class="w-1.5 h-1.5 my-auto rounded-full gradient-background"
              ></div>
              <p class="text-gradient">2023</p>
            </div>
            <h2 class="text-3xl md:text-4xl font-medium">SIT Announcement</h2>
            <article class="font-light text-sm md:text-base">
              SIT Announcement project is a system for announcing news of IT
              students. It was developed in the third year of the
              INT222-Integrated Project. The project is a web application that
              allows administrators to post news and students to view the news.
              The project was developed using Vue3, Java, and MySQL.
            </article>
          </div>
          <div>
            <img
              src="/assets/image/emoji.png"
              alt="section2"
              class="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div
        class="noise bg-[#224336] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[120px]"
      >
        <div class="flex flex-col md:flex-row justify-between w-full h-full">
          <div
            class="w-full md:w-1/2 h-full flex flex-col justify-center gap-5"
          >
            <div class="flex gap-3 text-sm md:text-base font-bold">
              <p class="text-gradient">Internship</p>
              <div
                class="w-1.5 h-1.5 my-auto rounded-full gradient-background"
              ></div>
              <p class="text-gradient">2024</p>
            </div>
            <h2 class="text-3xl md:text-4xl font-medium">Safetify</h2>
            <!-- vue3, nest.js , postgresql, lineliff -->
            <article class="font-light text-sm md:text-base">
              Safetify is an E-stamp Online system designed to increase
              convenience and safety in dealing with residents' visitors. Notify
              visitors via Line Official in Real-time. The system is developed
              using Vue3, Nest.js, PostgreSQL, and LINE Liff.
            </article>
            <a
              href="https://www.safetify.app/"
              target="_blank"
              class="bg-white hover:scale-105 transition text-black p-2 w-[270px] md:w-[200px] rounded-xl flex justify-center gap-2"
            >
              Visit website
              <UIcon
                name="i-heroicons-arrow-up-right"
                class="w-5 h-5 my-auto"
              />
            </a>
          </div>
          <div>
            <img
              src="/assets/image/emoji.png"
              alt="section2"
              class="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div
        class="noise bg-[#112e29] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[160px]"
      >
        <div class="flex flex-col md:flex-row justify-between w-full h-full">
          <div
            class="w-full md:w-1/2 h-full flex flex-col justify-center gap-5"
          >
            <div class="flex gap-3 text-sm md:text-base font-bold">
              <p class="text-gradient">Internship</p>
              <div
                class="w-1.5 h-1.5 my-auto rounded-full gradient-background"
              ></div>
              <p class="text-gradient">2024</p>
            </div>
            <h2 class="text-3xl md:text-4xl font-medium">
              Line Messaging Service
            </h2>
            <article class="font-light text-sm md:text-base">
              I was assigned to develop a Line messaging service for my
              internship company to be used for sending Line messages for the
              company's products. The system is developed using Vue3, Nest.js,
              PostgreSQL, and LINE Liff. The system is designed to be easy to
              use.
            </article>
          </div>
          <div>
            <img
              src="/assets/image/emoji.png"
              alt="section2"
              class="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div
        class="noise bg-[#153e3e] p-5 w-[330px] h-[600px] md:w-[700px] xl:w-[900px] md:h-[360px] rounded-3xl sticky top-[200px]"
      >
        <div class="flex flex-col md:flex-row justify-between w-full h-full">
          <div
            class="w-full md:w-1/2 h-full flex flex-col justify-center gap-5"
          >
            <div class="flex gap-3 text-sm md:text-base font-bold">
              <p class="text-gradient">Capstone Project</p>
              <div
                class="w-1.5 h-1.5 my-auto rounded-full gradient-background"
              ></div>
              <p class="text-gradient">2024 - 2025</p>
            </div>
            <h2 class="text-3xl md:text-4xl font-medium">Order Swift</h2>
            <!-- nuxt3, nestjs, postgresql, lineliff, socket.io -->
            <article class="font-light text-sm md:text-base">
              Order Swift is a web application for restaurants to manage their
              orders and customers can order food from the restaurant. The
              system is developed using Nuxt3, Nest.js, PostgreSQL, LINE Liff,
              and Socket.io.
            </article>
          </div>
          <div>
            <img
              src="/assets/image/emoji.png"
              alt="section2"
              class="w-full h-full object-cover rounded-3xl"
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
