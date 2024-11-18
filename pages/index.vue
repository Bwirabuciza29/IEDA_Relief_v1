<template>
  <div>
    <div class="relative mt-20">
      <!-- Contenu principal -->
      <div class="mj-container p-6 relative z-10">
        <div
          class="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-10"
        >
          <!-- Section de gauche -->
          <div class="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl">
              Helping <span class="text-green-500 font-sri">Communities</span>

              to become
              <span class="text-green-500 font-sri">SelfSufficient</span
              >....<img
                src="/img/Assets_1.png"
                class="w-8 h-8 md:w-12 md:h-12 -mt-4 inline-block ml-2"
              />
            </h1>
            <p class="text-gray-700 text-lg">
              Helping others and making a difference in the world is what will
              help to make the world a better place by improving people's lives.
              One person at a time, one day at a time, and one project at a
              time, you can make a difference that will leave a lasting impact
              on the world.
            </p>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
            >
              DONATE NOW
            </button>
          </div>

          <!-- Section de droite -->
          <div
            class="md:w-1/2 flex flex-wrap md:justify-end gap-4 mt-10 md:mt-0 relative"
          >
            <!-- Image principale -->
            <div class="relative md:w-3/4">
              <img
                src="/img/img_principal.png"
                alt="Community support"
                class="shadow-lg transform rounded-lg transition hover:scale-105"
              />
              <!-- Image en haut à gauche -->
              <img
                src="/img/img_1.png"
                alt="Volunteer"
                class="absolute top-[50%] left-[-40px] w-20 h-20 md:w-28 md:h-28 shadow-md transform rounded-lg transition hover:scale-105"
              />

              <!-- Image en haut à droite -->
              <img
                src="/img/img_2.png"
                alt="Child"
                class="absolute top-[20%] right-[-40px] w-20 h-20 md:w-28 md:h-28 shadow-md transform rounded-lg transition hover:scale-105"
              />
            </div>

            <!-- Carte en bas (superposée) -->
            <div
              class="bg-green-400 p-2 md:p-3 rounded-md flex items-center justify-center w-3/4 md:w-1/2 absolute -bottom-8 left-[13%] transform -translate-x-[50%] md:translate-x-[50%] transition hover:scale-105"
            >
              <div class="text-center">
                <p
                  class="text-2xl md:text-3xl font-semibold text-black font-sri"
                >
                  2.2 million
                </p>
                <p class="text-gray-700 text-sm md:text-base">
                  People in Our Programs Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image de filigrane, positionnée derrière le contenu -->
      <img
        src="/img/Vector_1.png"
        alt="Filigrane"
        class="absolute right-0 top-48 transform -translate-y-1/2 opacity-90 pointer-events-none w-64 sm:w-96 md:w-[25rem] lg:w-[35rem] h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] z-0"
      />
    </div>

    <div class="mj-container">
      <home />
    </div>
  </div>
</template>