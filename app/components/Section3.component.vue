<template>
  <div class="w-full flex justify-center mb-40">
    <div class="pt-32 w-[330px] md:w-[700px] xl:w-[1050px]">
      <div class="flex flex-col md:flex-row justify-between gap-5">
        <div class="flex md:hidden flex-col mb-5">
          <p class="text-[14px] md:text-[16px] text-gradient tracking-[0.3rem]">
            ABOUT ME
          </p>
          <h1 class="text-[30px] md:text-[40px] font-medium text-white">
            Know who am I
          </h1>
          <p class="text-white">My journey in few words</p>
        </div>
        <div class="w-full flex flex-col items-start order-2 md:order-1">
          <div class="hidden md:flex flex-col">
            <p
              class="text-[14px] md:text-[16px] text-gradient tracking-[0.3rem]"
            >
              ABOUT ME
            </p>
            <h1 class="text-[30px] md:text-[40px] font-medium text-white">
              Know who am I
            </h1>
            <p class="text-white text-[18px]">My journey in few words</p>
          </div>
          <article
            class="pt-5 indent-5 text-white/60 text-[16px] lg:text-[18px]"
          >
            Hi, I'm Thanakorn Wongklad. You can call me “Af”. I'm graduate from
            KMUTT, Faculty of Information Technology. I'm incredibly passionate
            about web applications & UI/UX design - I became interested in
            Frontend when I learned about creating web applications using HTML,
            CSS, javascript and vue3. I am eager to gain exposure to new
            knowledge about Frontend and new technologies in the future.
          </article>
        </div>
        <img
          src="../assets/image/PosterProfile.png"
          alt="My profile poster"
          class="w-full md:w-[300px] xl:w-[350px] object-contain order-1 md:order-2 hover:scale-110 hover:-rotate-[10deg] transition duration-400"
        />
      </div>
    </div>
  </div>
</template>
