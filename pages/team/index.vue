<template>
  <section class="bg-green-50 relative">
    <img
      src="/img/droite.png"
      alt="Filigrane supérieur droit"
      class="absolute top-80 right-0 w-40 pointer-events-none hidden sm:block"
    />
    <img
      src="/img/gauche.png"
      alt="Filigrane inférieur gauche"
      class="absolute bottom-0 left-0 w-40 opacity-100 pointer-events-none hidden sm:block"
    />

    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
      <!-- Image vectorielle (positionnée au-dessus du conteneur) -->
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
              <h1 class="text-4xl text-white font-bold mb-2">Team</h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">Home </a>
                  /
                  <span>Team</span>
                </div>
              </nav>
            </div>

            <!-- Image (à droite sur grand écran) -->
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/t.jpg"
                alt="About Us Section"
                class="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Images de fond (filigrane) -->

    <!-- contenu de l'about -->
    <div class="mj-container my-4">
      <div class="py-8 px-4">
        <!-- Titre Principal -->
        <div class="text-center my-6">
          <p class="text-custom-green uppercase tracking-widest text-xs">
            Team
          </p>
          <h1 class="text-3xl font-semibold">
            Notre <span class="font-sri"> Equipe</span>
          </h1>
        </div>

        <!-- Navigation des catégories -->
        <div class="flex justify-center space-x-4 mb-8">
          <button
            v-for="(category, index) in categories"
            :key="index"
            :class="[
              'px-4 py-2 text-lg font-medium border-b-2',
              activeCategory === category
                ? 'border-custom-green text-custom-green'
                : 'border-transparent text-gray-600 hover:text-gray-800',
            ]"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>

        <!-- Section : Management -->
        <div
          v-show="activeCategory === 'Leadership Staff'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="(member, index) in team"
            :key="index"
            class="relative group bg-white shadow-md rounded-lg overflow-hidden hover:bg-custom-green transition"
          >
            <!-- Effet de Hover -->
            <div
              class="absolute inset-0 bg-custom-green opacity-0 group-hover:opacity-90 transition"
            ></div>

            <!-- Contenu des cartes -->
            <div class="relative p-4 text-center group-hover:text-white z-10">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-custom-green"
              />
              <h2 class="text-lg font-semibold">{{ member.name }}</h2>
              <p class="text-sm">{{ member.role }}</p>

              <!-- Icônes -->
              <!-- Icônes -->
              <div class="flex justify-center space-x-2 mt-4">
                <a
                  :href="member.social.linkedin"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  :href="member.social.twitter"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-x-twitter"></i>
                </a>
                <a
                  :href="member.social.facebook"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Section : Design UI/UX -->
        <div
          v-show="activeCategory === 'Board of Direction'"
          class="text-center text-gray-600"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Aenean vitae enim non eros placerat venenatis.
          </p>
        </div>

        <!-- Section : Marketing -->
        <div
          v-show="activeCategory === 'Financial Repport'"
          class="text-center text-gray-600"
        >
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
// Les catégories
const categories = [
  "Leadership Staff",
  "Board of Direction",
  "Financial Repport",
];

// Catégorie active
const activeCategory = ref("Leadership Staff");

// Membres de l'équipe (uniquement pour "Management")
const team = [
  {
    name: "Phil MAANULWA",
    role: "Founder, President & CEO",
    image: "/img/av1.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
  },
  {
    name: "Christine MAMBO",
    role: "Director of Operations",
    image: "/img/av2.jpg",
    social: {
      linkedin: "https://linkedin.com/in/emmarussel",
      twitter: "https://twitter.com/emmarussel",
      facebook: "https://facebook.com/emmarussel",
    },
  },
  {
    name: "Timothy MUKULE",
    role: "Marketing and Media Associate",
    image: "/img/av3.jpg",
    social: {
      linkedin: "https://linkedin.com/in/alexberil",
      twitter: "https://twitter.com/alexberil",
      facebook: "https://facebook.com/alexberil",
    },
  },
  {
    name: "Another ONE",
    role: "Don't know",
    image: "/img/av4.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
];

// Fonction pour changer de catégorie
const setActiveCategory = (category) => {
  activeCategory.value = category;
};
</script>
