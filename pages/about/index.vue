<template>
  <section>
    <!--  Top Title -->
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
              <h1 class="text-4xl font-bold mb-2">About Us</h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">Home</a> /
                  <span>About Us</span>
                </div>
              </nav>
            </div>

            <!-- Image (à droite sur grand écran) -->
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/cha.png"
                alt="About Us Section"
                class="w-full h-full object-cover rounded-lg transition-all duration-300 hover:z-10 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <!-- contenu de l'about -->
      </div>
    </div>
    <!-- Fin Top Title -->
    <div class="mj-container my-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Card 1 -->
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="/img/icon_1.png" alt="Icon" class="w-10 h-10 mr-2" />
            <h3 class="text-xl font-semibold">Vision</h3>
          </div>
          <p class="text-gray-600 hover:underline">
            Our vision is to establish a stable environment with sustainable
            solutions that benefit the population in need. We empower
            communities...
          </p>
        </div>

        <!-- Card 2 -->
        <div class="overflow-hidden border rounded-lg shadow-md">
          <img
            src="/img/c1.png"
            alt="Image 1"
            class="w-full h-48 object-cover transition-all duration-300 hover:z-10 hover:scale-105"
          />
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="/img/icon_2.png" alt="Icon" class="w-10 h-10 mr-2" />
            <h3 class="text-xl font-semibold">Mission</h3>
          </div>
          <p class="text-gray-600 hover:underline">
            The mission of IEDA Relief is to alleviate the suffering of
            vulnerable people by tackling the underlying causes of poverty...
          </p>
        </div>

        <!-- Card 4 -->
        <div class="overflow-hidden border rounded-lg shadow-md">
          <img
            src="/img/c2.png"
            alt="Image 2"
            class="w-full h-48 object-cover transition-all duration-300 hover:z-10 hover:scale-105"
          />
        </div>

        <!-- Card 5 -->
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="/img/icon_3.png" alt="Icon" class="w-10 h-10 mr-2" />
            <h3 class="text-xl font-semibold">Value</h3>
          </div>
          <p class="text-gray-600 hover:underline">
            We are committed to working in the most difficult conditions to
            reach the world's poorest and most vulnerable people...
          </p>
        </div>

        <!-- Card 6 -->
        <div class="overflow-hidden border rounded-lg shadow-md">
          <img
            src="/img/c3.png"
            alt="Image 3"
            class="w-full h-48 object-cover transition-all duration-300 hover:z-10 hover:scale-105"
          />
        </div>
      </div>
    </div>
    <div class="mj-container my-16">
      <!-- Image principale avec le texte en arrière-plan -->
      <div class="relative">
        <img
          src="/img/vid.png"
          alt="Groupe de personnes"
          class="w-full rounded-lg shadow-lg"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <button class="text-white">
            <img
              src="/img/Play.png"
              alt="Play"
              class="w-20 h-20 transition-all duration-300 hover:z-10 hover:scale-110"
            />
          </button>
        </div>
      </div>

      <!-- Section d'informations -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <!-- Élément 1 -->
        <div>
          <h3 class="text-4xl font-bold font-sri text-custom-green">
            {{ count1 }}+
          </h3>
          <p class="text-gray-600">Countries and Territories Served</p>
        </div>
        <!-- Élément 2 -->
        <div>
          <h3 class="text-4xl font-bold font-sri text-custom-green">
            {{ (count2 / 1000000).toFixed(1) }} million
          </h3>
          <p class="text-gray-600">People in Our Programs Worldwide</p>
        </div>
        <!-- Élément 3 -->
        <div>
          <h3 class="text-4xl font-bold font-sri text-custom-green">
            {{ count3 }}
          </h3>
          <p class="text-gray-600">Year founded in Seattle, Washington</p>
        </div>
      </div>
    </div>
    <div class="mj-container my-16">
      <h2 class="text-3xl font-bold text-gray-800 text-center">
        The Supporters Who Make
        <span class="text-green-500 font-sri">It Possible</span>
      </h2>
      <div class="hidden md:grid grid-cols-3 mt-8">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <img
            :src="member.image"
            :alt="member.alt"
            class="rounded-lg shadow-md w-56 transition-all duration-300 hover:z-10 hover:scale-105"
          />
          <h3 class="mt-4 text-lg font-medium">{{ member.title }}</h3>
          <p class="text-sm text-gray-600">{{ member.role }}</p>
        </div>
      </div>
    </div>
    <div class="mj-container my-16">
      <div
        class="relative bg-gray-50 h-64 rounded-lg overflow-hidden p-6 shadow-lg"
      >
        <!-- Filigrane haut gauche -->
        <div class="absolute top-0 left-0 opacity-50">
          <img
            src="/img/f.png"
            alt="Filigrane haut gauche"
            class="w-32 h-auto sm:w-48 md:w-56 lg:w-72 xl:w-80 filter grayscale"
          />
        </div>

        <!-- Filigrane bas droite -->
        <div class="absolute bottom-0 right-0 opacity-50">
          <img
            src="/img/ff.png"
            alt="Filigrane bas droite"
            class="w-32 h-auto sm:w-48 md:w-56 lg:w-72 xl:w-80 filter grayscale"
          />
        </div>

        <!-- Contenu principal -->
        <div
          class="relative z-10 mj-container text-center flex flex-col items-center justify-center"
        >
          <div class="mx-auto mb-4">
            <img
              src="/img/icon.png"
              alt="Icône"
              class="w-12 h-12 transition-all duration-300 hover:z-10 hover:scale-110"
            />
          </div>

          <p class="text-lg font-semibold text-gray-800">
            The purpose of life is not to be happy --
            <span class="italic font-bold text-gray-800">
              but to matter, <br />
              to be productive, to be useful,
            </span>
            to have it make some <br />
            difference that you lived at all.
          </p>
        </div>
      </div>
    </div>

    <div class="mj-container my-16">
      <h2 class="text-3xl font-bold text-gray-800 text-center">
        Your Questions <span class="text-green-500 font-sri">Answered</span>
      </h2>
      <!-- Description -->
      <p class="text-center text-gray-600 mt-2">
        Egestas quis suspendisse ultrices gravida. Consectetur lectus. Phasellus
        vestibulum lorem sed risus ultrices.
      </p>
      <!-- FAQ Section -->
      <div class="mt-10 space-y-4 max-w-xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full text-left flex justify-between items-center px-4 py-3 bg-white"
          >
            <span
              :class="{ 'text-green-500 font-medium': activeFAQ === index }"
              class="text-gray-800 text-lg"
            >
              {{ faq.question }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180 text-green-500': activeFAQ === index }"
              class="h-5 w-5 transform transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="activeFAQ === index"
            class="px-4 py-3 text-gray-600 bg-gray-100"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
      <hr class="my-4" />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    image: "/img/s.png",
    alt: "Volunteer Coordinator",
    title: "unknown name",
    role: "Volunteer Coordinator",
  },
  {
    image: "/img/ss.png",
    alt: "Outreach Specialist",
    title: "unknown name",
    role: "Outreach Specialist",
  },
  {
    image: "/img/sss.png",
    alt: "Project Lead",
    title: "unknown name",
    role: "Project Lead",
  },
];
// Data for FAQs
const faqs = ref([
  {
    question: "How are the donated funds utilized?",
    answer:
      "Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Sed nisi lacus sed viverra tellus in hac habitasse platea.",
  },
  {
    question: "What percentage of donations goes directly to aid programs?",
    answer:
      "Nulla facilisi etiam dignissim diam quis. Scelerisque in dictum non consectetur a erat nam at lectus.",
  },
  {
    question: "Can I donate goods or services instead of money?",
    answer:
      "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et.",
  },
  {
    question: "How can I verify the legitimacy of your organization?",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    question: "How can I become a volunteer or join your team?",
    answer:
      "Viverra justo nec ultrices dui sapien eget mi proin sed. Aliquam sem et tortor consequat.",
  },
]);
// State to track the active FAQ
const activeFAQ = ref(null);

// Toggle function
const toggleFAQ = (index) => {
  activeFAQ.value = activeFAQ.value === index ? null : index;
};
// Fonction d'animation des chiffres
function animateValue(target, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment = range / (duration / 10);
  const interval = setInterval(() => {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      current = end;
      clearInterval(interval);
    }
    target.value = Math.round(current);
  }, 10);
}

// Déclaration des données
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);

onMounted(() => {
  // Durée de 2s
  animateValue(count1, 0, 72, 2000);
  // Durée de 3s
  animateValue(count2, 0, 2200000, 3000);
  // Durée de 1.5s
  animateValue(count3, 0, 1999, 1500);
});
</script>
