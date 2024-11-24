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
      class="absolute bottom-80 left-0 w-40 opacity-100 pointer-events-none hidden sm:block"
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

        <!-- Section : Board of Direction -->
        <div
          v-show="activeCategory === 'Board of Direction'"
          class="text-center text-gray-600"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(member, index) in board"
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
        </div>

        <!-- Section : Financial Repport -->
        <div
          v-show="activeCategory === 'Financial Repport'"
          class="text-center text-gray-600"
        >
          <div class="mj-container">
            <h2 class="text-2xl font-bold text-center mb-8">
              Nous croyons en un avenir meilleur
            </h2>
            <p class="text-center text-gray-600 mb-12">
              Nous donnons aux communautés les moyens de devenir autonomes et de
              décider comment améliorer et sauver des vies tout en apportant un
              changement culturellement acceptable et basé sur les efforts et
              réussites existants.
            </p>

            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              <!-- Carte 1 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i class="fas fa-history text-blue-500 text-3xl mb-4"></i>
                <p class="font-medium text-xs mb-2">
                  De 2010 à 2017, nous avons aidé des réfugiés à se relocaliser
                  et à construire une vie meilleure pour eux et leurs enfants.
                </p>
              </div>
              <!-- Carte 2 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i class="fas fa-file-alt text-green-500 text-3xl mb-4"></i>
                <h3 class="font-semibold text-xs mb-2">Rapport Annuel 2017</h3>
                <p class="text-gray-600 text-xs">
                  Consultez notre rapport annuel pour plus de détails sur nos
                  actions.
                </p>
              </div>
              <!-- Carte 3 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i
                  class="fas fa-globe-americas text-yellow-500 text-3xl mb-4"
                ></i>
                <h3 class="font-semibold text-xs mb-2">
                  International Emergency and Development Aid
                </h3>
                <p class="text-gray-600 text-xs">
                  IEDA Relief Inc. est une organisation exonérée d'impôts
                  501(c)(3). Votre don est déductible des impôts aux États-Unis.
                </p>
              </div>
              <!-- Carte 4 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i
                  class="fas fa-file-contract text-indigo-500 text-3xl mb-4"
                ></i>
                <h3 class="font-semibold text-xs mb-2">
                  États Financiers Audités
                </h3>
                <p class="text-gray-600 text-xs">
                  Années fiscales disponibles : 2017, 2016, 2015, 2014.
                </p>
              </div>
              <!-- Carte 5 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i class="fas fa-file-invoice text-red-500 text-3xl mb-4"></i>
                <h3 class="font-semibold text-xs mb-2">Formulaire IRS 990</h3>
                <p class="text-gray-600 text-xs">
                  Années fiscales disponibles : 2017, 2016, 2015, 2014.
                </p>
              </div>
              <!-- Carte 6 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i class="fas fa-archive text-purple-500 text-3xl mb-4"></i>
                <h3 class="font-semibold text-xs mb-2">
                  Rapports Annuels Passés
                </h3>
                <p class="text-gray-600 text-xs">
                  Années disponibles : 2016, 2015, 2014, 2013, 2012, 2011, 2010.
                </p>
              </div>
              <!-- Carte 7 -->
              <div
                class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                <i
                  class="fas fa-hand-holding-heart text-teal-500 text-3xl mb-4"
                ></i>
                <h3 class="font-semibold text-xs mb-2">
                  Soutenez Notre Travail
                </h3>
                <p class="text-gray-600 text-xs">
                  Aidez-nous à continuer d'impacter des vies à travers le monde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mj-container my-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Liste des drapeaux -->
        <div class="col-span-1 bg-white p-4 rounded-lg">
          <h2 class="text-lg font-bold text-center mb-4">
            Sélectionnez un pays
          </h2>
          <ul class="space-y-2">
            <li
              v-for="(country, index) in countries"
              :key="index"
              @click="selectCountry(index)"
              :class="[
                'flex items-center space-x-2 p-2 rounded-lg cursor-pointer',
                activeCountry === index
                  ? 'bg-custom-green text-white'
                  : 'hover:bg-gray-200',
              ]"
            >
              <img
                :src="country.flag"
                :alt="country.name"
                class="w-8 h-8 rounded-full"
              />
              <a
                :class="[
                  'text-sm font-medium',
                  activeCountry === index ? 'text-white' : 'text-gray-800',
                ]"
                href="#"
              >
                {{ country.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Détails du pays -->
        <div
          class="col-span-2 bg-white p-6 rounded-lg flex flex-col items-start space-y-4"
        >
          <!-- Nom du pays -->
          <h2 class="text-2xl font-bold mb-4">
            {{ countries[activeCountry].name }}
          </h2>

          <!-- Image du pays -->
          <div class="w-full mb-4 border-b-4 pb-4">
            <img
              :src="countries[activeCountry].image"
              alt="Image du pays"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <h2 class="text-lg font-bold text-center mb-4">Ou Nous trouver</h2>
          <!-- Détails de contact -->
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Adresse -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-map-marker-alt bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span class="text-gray-700 font-medium">
                {{ countries[activeCountry].details.address }}
              </span>
            </div>

            <!-- Téléphone -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-phone-alt bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span class="text-gray-700 font-medium">
                {{ countries[activeCountry].details.tel }}
              </span>
            </div>

            <!-- GSM -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-mobile-alt bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span class="text-gray-700 font-medium">
                {{ countries[activeCountry].details.gsm }}
              </span>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-envelope bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span
                class="text-gray-700 font-medium hover:underline hover:text-custom-green"
              >
                {{ countries[activeCountry].details.email }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mj-container" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
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
const board = [
  {
    name: "Alex Anderson",
    role: "CHAIRMAN OF BOARD",
    image: "/img/avatar6.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
  },
  {
    name: "Floresa S. Hervey ",
    role: "DIRECTOR",
    image: "/img/avatar5.jpg",
    social: {
      linkedin: "https://linkedin.com/in/emmarussel",
      twitter: "https://twitter.com/emmarussel",
      facebook: "https://facebook.com/emmarussel",
    },
  },
  {
    name: "Blaise B. Lolika",
    role: "BOARD MEMBER",
    image: "/img/avatar3.jpg",
    social: {
      linkedin: "https://linkedin.com/in/alexberil",
      twitter: "https://twitter.com/alexberil",
      facebook: "https://facebook.com/alexberil",
    },
  },
  {
    name: "Phil Maanulwa",
    role: "PRESIDENT",
    image: "/img/avatar4.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
  {
    name: "Richard Ngombe",
    role: "SECRETARY OF THE BOARD",
    image: "/img/avatar9.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
  {
    name: "Dr. Edouard Kabazimya",
    role: "DM DIRECTOR",
    image: "/img/avatar2.jpg",
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
const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    image: "/img/pa1.jpg",
    details: {
      address: "10103 Foundren Road, Houston, TX",
      tel: "+1 555 1234",
      gsm: "+1 555 6789",
      email: "hustonsoffice@iedarelief.org",
    },
  },
  {
    name: "Belgique",
    flag: "https://flagcdn.com/be.svg",
    image: "https://via.placeholder.com/300x200?text=Belgium",
    details: {
      address: "Rue des Hirondelles, 1 1000 Bruxelles / BELGIQUE",
      tel: "+32(0) 497 15 92 98",
      gsm: "+32(0) 439 40 59 99",
      email: "brusselsoffice@iedarelief.org",
    },
  },
  {
    name: "Burkina Faso",
    flag: "https://flagcdn.com/bf.svg",
    image: "https://via.placeholder.com/300x200?text=Burkina+Faso",
    details: {
      address:
        "05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi, secteur 53, Section PLot 17, Parcelle No 6 Ouaga2000",
      tel: "+226 25374622",
      gsm: "+226  65584909",
      email: "burkinafasooffice@iedarelief.org",
    },
  },
  {
    name: "Rép. Centrafricaine",
    flag: "https://flagcdn.com/cf.svg",
    image: "https://via.placeholder.com/300x200?text=Central+African+Republic",
    details: {
      address:
        "Av. Barthélemy BOGANDA, Quartier SICA III, 3ème Arrondissement Bangui, Centrafrique, BP 1774 Bangui",
      tel: "+236 72510065",
      gsm: "+236 72510065",
      email: "caroffice@iedarelief.org",
    },
  },
  {
    name: "Cameroun",
    flag: "https://flagcdn.com/cm.svg",
    image: "https://via.placeholder.com/300x200?text=Cameroun",
    details: {
      address: "BP 7694 Yaoundé, Bastos, Derrière Laboratoire Meka",
      tel: "+237 682315370",
      gsm: "+237 682315370",
      email: "cameroonoffice@iedarelief.org",
    },
  },
  {
    name: "Rép. Dém. du Congo",
    flag: "https://flagcdn.com/cd.svg",
    image: "https://via.placeholder.com/300x200?text=DR+Congo",
    details: {
      address:
        "Avenue O.U.A, N°17, Quartier Basoko/GB, Commune de Ngaliema, ville de Kinshasa, RDC ",
      tel: "+243 980375904",
      gsm: "+243 995614803 ",
      email: "drcmission@iedarelief.org, drcoffice@iedarelief.org",
    },
  },
  {
    name: "Niger",
    flag: "https://flagcdn.com/ne.svg",
    image: "https://via.placeholder.com/300x200?text=Niger",
    details: {
      address:
        "Quartier Koubia/Route Tillabérie, Parcelle N° F de l'Ilot 8099 Commune I,Ville de Niamey",
      tel: "+227 94702963",
      gsm: "+227 94702963",
      email: "nigeroffice@iedarelief.org",
    },
  },
  {
    name: "Mali",
    flag: "https://flagcdn.com/ml.svg",
    image: "https://via.placeholder.com/300x200?text=Mali",
    details: {
      address: "BP 3113 Bamako, Hamdallay, ACI 2000, 5eme Arrondissement",
      tel: "+223 74613901",
      gsm: "+223 74613901",
      email: "malioffice@iedarelief.org",
    },
  },
];

// Pays actif
const activeCountry = ref(0);

// Fonction pour changer de pays
const selectCountry = (index) => {
  activeCountry.value = index;
};
</script>
