<template>
  <div class="mj-container">
    <div class="text-center my-6">
      <p class="text-green-500 uppercase tracking-widest text-xs">
        Our mission of aid and support
      </p>
      <h1 class="text-3xl font-semibold">
        Joining Forces to Make the <span class="font-sri">World Better</span>
      </h1>
    </div>
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
const title_1 = ref(t("parteners.title_1"));
const title_2 = ref(t("parteners.title_2"));
const title_3 = ref(t("parteners.title_3"));
const title_4 = ref(t("parteners.title_4"));
const desc_1 = ref(t("parteners.desc_1"));
const desc_2 = ref(t("parteners.desc_2"));
const desc_3 = ref(t("parteners.desc_3"));
const desc_4 = ref(t("parteners.desc_4"));
const tit_1 = ref(t("parteners.tit_1"));
const tit_2 = ref(t("parteners.tit_2"));
const tit_3 = ref(t("parteners.tit_3"));
const ct1 = ref(t("parteners.ct1"));
const ct2 = ref(t("parteners.ct2"));
const ct3 = ref(t("parteners.ct3"));
const cd1 = ref(t("parteners.cd1"));
const cd2 = ref(t("parteners.cd2"));
const cd3 = ref(t("parteners.cd3"));
const desc_title_2 = ref(t("parteners.desc_title_2"));
const desc_desc_2 = ref(t("parteners.desc_desc_2"));
const desc_list_1 = ref(t("parteners.desc_list_1"));
const desc_list_2 = ref(t("parteners.desc_list_2"));

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
    s_title: desc_title_2,
    s_desc: desc_desc_2,
    desc_list_1: desc_list_1,
    desc_list_2: desc_list_2,
  },
  {
    title: title_3,
    description: desc_3,
    image: "/img/v2.jpeg",
    desc_btn_1: desc_btn_1,
    desc_btn_2: desc_btn_2,
  },
];

const activeTab = ref(0);
</script>

<style>
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>
