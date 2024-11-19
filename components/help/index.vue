<template>
  <section class="bg-green-400 p-8 mx-4 rounded-lg">
    <!-- Titre -->
    <div class="mj-container relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-left mb-8">
        Help us create a better <span class="font-sri">World</span>
      </h2>
      <!-- Watermark -->
      <img
        src="/img/filigranne.png"
        alt="Background Watermark"
        class="absolute top-1/2 -left-24 transform -translate-y-1/3 -translate-x-1/4 w-full h-96 opacity-100 pointer-events-none hidden sm:block"
        style="z-index: 0"
      />

      <!-- Grille principale -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <!-- Image avec une image superposée -->
        <div class="relative">
          <img
            src="/img/mum.png"
            alt="Main Image"
            class="rounded-lg object-cover w-46 h-46 transition-all duration-300 hover:z-10 hover:scale-110"
          />
          <img
            src="/img/bf.jpg"
            alt="Overlay Image"
            class="absolute -bottom-3 -right-8 w-40 h-40 rounded-lg transition-all duration-300 hover:z-10 hover:scale-110"
          />
        </div>

        <!-- Texte -->
        <div>
          <p class="text-lg text-center">
            Helping others and making a difference in the world is what will
            help to make the world a better place by improving people’s lives.
            One person at a time, one day at a time, and one project at a time,
            you can make a difference that will leave a lasting impact on the
            world.
          </p>
          <!-- Carte arrondie en bas à droite -->
          <div class="relative">
            <img
              src="/img/Number.png"
              alt="Background Image"
              class="absolute -bottom-34 right-4 w-42 h-42 md:w-60 md:h-60 z-0 transition-all duration-300 hover:z-10 hover:scale-110 hidden sm:block"
            />
          </div>
        </div>

        <!-- Carte avec éléments -->
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div
            class="flex items-center space-x-4 border rounded-full border-green-500 p-2"
          >
            <img
              src="/img/food.png"
              alt="Food Assistance Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold">Food Assistance</h3>
          </div>
          <p class="hover:underline">
            Providing nutritious meals to food-insecure families; Delivering
            groceries to homebound seniors and the homeless.
          </p>

          <div
            class="flex items-center space-x-4 border rounded-full border-green-500 p-2"
          >
            <img
              src="/img/teach.png"
              alt="Education Support Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold">Education Support</h3>
          </div>
          <p class="hover:underline">
            Organization of Career Orientation Workshops for Youth; Provision of
            Free English Language Lessons for Immigrants.
          </p>

          <div
            class="flex items-center space-x-4 border rounded-full border-green-500 p-2"
          >
            <img
              src="/img/seedling.png"
              alt="Environmental Conservation Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold">Environmental Conservation</h3>
          </div>
          <p class="hover:underline">
            Planting trees and protecting forests; Cleaning up oceans, rivers
            and public lands; Environmental education and advocacy initiatives.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>