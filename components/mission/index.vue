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
          {{ $t("mission.btn", "View More") }}
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
          :src="imageSrc"
          alt="Overlay"
          class="absolute -bottom-24 w-auto h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const imageSrc = ref("/img/rectori.png");
// Initialiser les variables avant de les utiliser
const title_1 = ref(t("mission.title_1"));
const title_2 = ref(t("mission.title_2"));
const title_3 = ref(t("mission.title_3"));
const title_4 = ref(t("mission.title_4"));
const desc_1 = ref(t("mission.desc_1"));
const desc_2 = ref(t("mission.desc_2"));
const desc_3 = ref(t("mission.desc_3"));
const desc_4 = ref(t("mission.desc_4"));
const btn = ref(t("mission.btn"));

// Ensuite, vous pouvez utiliser ces variables dans le tableau
const tabs = [
  {
    title: title_1,
    description: desc_1,
    image: "/img/v3.jpeg",
  },
  {
    title: title_2,
    description: desc_2,
    image: "/img/vision.jpg",
  },
  {
    title: title_3,
    description: desc_3,
    image: "/img/v2.jpeg",
  },
  {
    title: title_4,
    description: desc_4,
    image: "/img/v1.jpeg",
  },
];

const activeTab = ref(0);
</script>

<style>
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>
