<template>
  <div class="mj-container mx-auto px-4 py-8">
    <!-- Boutons alignés horizontalement -->
    <div class="flex justify-center space-x-4 mb-8">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'px-4 py-3 font-medium rounded-lg transition-colors duration-300',
          activeTab === index
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- Contenu dynamique -->
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      v-show="activeTab === index"
      class="flex flex-col md:flex-row items-center justify-center text-center md:text-left transition-opacity duration-500"
      :class="activeTab === index ? 'opacity-100' : 'opacity-0 hidden'"
    >
      <!-- Texte au centre -->
      <div class="md:w-1/2 mb-6">
        <h2 class="text-5xl font-bold text-gray-800">{{ tab.title }}</h2>
        <p class="text-gray-600 mt-4">
          {{ tab.description }}
        </p>
        <button
          class="mt-6 px-6 py-3 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          View More
        </button>
      </div>

      <!-- Image à droite -->
      <div class="md:w-1/2 flex justify-center relative">
        <!-- Image principale -->
        <div class="relative">
          <!-- Image principale -->
          <img
            :src="tab.image"
            alt="Image"
            class="w-full max-w-sm rounded-lg shadow-md"
          />
          <!-- Gradient en dessous -->
          <div
            class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-500 to-transparent rounded-b-lg pointer-events-none"
          ></div>
        </div>

        <!-- Image superposée -->
        <img
          src="/img/rectori.png"
          alt="Overlay"
          class="absolute -bottom-24 w-auto h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  {
    title: "Our Mission",
    description:
      "To alleviate the suffering of vulnerable people by addressing the underlying causes of poverty so that they can become self-sufficient and capable of achieving their full potential.",
    image: "/img/v3.jpeg",
  },
  {
    title: "Our Vision",
    description:
      "To create a stable environment with sustainable solutions that benefit people in need.",
    image: "/img/vision.jpg",
  },
  {
    title: "Our Values",
    description:
      "We are committed to working in the most difficult conditions and areas in order to reach the world's poorest and most vulnerable people regardless of their faith, culture, language, custom, ethnic origin or political affiliation.",
    image: "/img/v2.jpeg",
  },
  {
    title: "Latest News",
    description: "Check Back for Latest News:  IEDA Relief ",
    image: "/img/v1.jpeg",
  },
];

const activeTab = ref(0);
</script>

<style>
/* Facultatif : Ajout d'une transition CSS personnalisée */
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>
