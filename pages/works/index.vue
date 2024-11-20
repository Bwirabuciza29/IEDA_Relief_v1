<template>
  <section>
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
      <!-- Image vectorielle (positionnée au-dessus du conteneur) -->
      <div></div>
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto z-10 hidden sm:block"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <!-- Texte (à gauche sur grand écran) -->
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl font-bold mb-2">Where we work</h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">Home</a> /
                  <span>Where we work</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/w1.jpg"
                alt="About Us Section"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:z-10 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contenu du work -->
    <div class="mj-container my-16 relative">
      <!-- Image filigranne au coin supérieur à gauche -->
      <div class="absolute -top-8 -left-24 w-28 h-28 hidden sm:block">
        <img
          src="/img/Titik-titik.png"
          alt="Filigrane haut gauche"
          class="w-full h-full object-contain opacity-50"
        />
      </div>

      <!-- Contenu principal -->
      <div>
        <!-- Boutons -->
        <div class="flex justify-center space-x-4 mb-8">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              'px-4 py-2 rounded-lg',
              activeTab === tab
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700',
            ]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Contenu -->
        <div
          v-if="activeTab === 'Where we work'"
          class="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div class="relative">
              <img
                :src="card.image"
                alt="Card Image"
                class="w-full h-40 object-cover"
              />
              <span
                class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md"
              >
                {{ card.tag }}
              </span>
            </div>
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">{{ card.title }}</h2>
              <p class="text-gray-600 mb-4">{{ card.description }}</p>
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md"
                @click="goToDetails(card.id)"
              >
                More
              </button>
            </div>
          </div>
        </div>

        <div v-else class="text-center">
          <p class="text-gray-600">
            Content for {{ activeTab }} is not available yet.
          </p>
        </div>
      </div>

      <!-- Image filigranne au coin inférieur à droite -->
      <div class="absolute -bottom-8 -right-24 w-28 h-28 hidden sm:block">
        <img
          src="/img/Titik-titik.png"
          alt="Filigrane bas droite"
          class="w-full h-full object-contain opacity-50"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const tabs = ["Where we work", "Vision to work", "Partners"];
const activeTab = ref("Where we work");

const cards = [
  {
    id: 1,
    image: "/img/w1.png",
    tag: "Where we work",
    title: "Burkina Faso",
    description:
      "Empowering communities with essential knowledge and practices to promote health and prevent ...",
  },
  {
    id: 2,
    image: "/img/w2.png",
    tag: "Where we work",
    title: "Cameroun",
    description:
      "Providing Harper with the freedom and independence to navigate the world with ease ...",
  },
  {
    id: 3,
    image: "/img/w3.png",
    tag: "Where we work",
    title: "Central Africa Republic",
    description:
      "Join us in providing compassionate support and resources for Daniel as he embarks on his ...",
  },
];

const router = useRouter();

const goToDetails = (id) => {
  router.push(`/works/${id}`);
};
</script>
