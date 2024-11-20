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
            <div class="flex-1">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="/img/icon_1.png" alt="Icon" class="w-10 h-10 mr-2" />
            <h3 class="text-xl font-semibold">Vision</h3>
          </div>
          <p class="text-gray-600">
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
            class="w-full h-full object-cover transition-all duration-300 hover:z-10 hover:scale-105"
          />
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="/img/icon_2.png" alt="Icon" class="w-10 h-10 mr-2" />
            <h3 class="text-xl font-semibold">Mission</h3>
          </div>
          <p class="text-gray-600">
            The mission of IEDA Relief is to alleviate the suffering of
            vulnerable people by tackling the underlying causes of poverty...
          </p>
        </div>

        <!-- Card 4 -->
        <div class="overflow-hidden border rounded-lg shadow-md">
          <img
            src="/img/c2.png"
            alt="Image 2"
            class="w-full h-full object-cover transition-all duration-300 hover:z-10 hover:scale-105"
          />
        </div>

        <!-- Card 5 -->
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="/img/icon_3.png" alt="Icon" class="w-10 h-10 mr-2" />
            <h3 class="text-xl font-semibold">Value</h3>
          </div>
          <p class="text-gray-600">
            We are committed to working in the most difficult conditions to
            reach the world's poorest and most vulnerable people...
          </p>
        </div>

        <!-- Card 6 -->
        <div class="overflow-hidden border rounded-lg shadow-md">
          <img
            src="/img/c3.png"
            alt="Image 3"
            class="w-full h-full object-cover transition-all duration-300 hover:z-10 hover:scale-105"
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
              class="w-20 h-20 transition-all duration-300 hover:z-10 hover:scale-105"
            />
          </button>
        </div>
      </div>

      <!-- Section d'informations -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <!-- Élément 1 -->
        <div>
          <h3 class="text-4xl font-bold text-custom-green">{{ count1 }}+</h3>
          <p class="text-gray-600">Countries and Territories Served</p>
        </div>
        <!-- Élément 2 -->
        <div>
          <h3 class="text-4xl font-bold text-custom-green">
            {{ (count2 / 1000000).toFixed(1) }} million
          </h3>
          <p class="text-gray-600">People in Our Programs Worldwide</p>
        </div>
        <!-- Élément 3 -->
        <div>
          <h3 class="text-4xl font-bold text-custom-green">{{ count3 }}</h3>
          <p class="text-gray-600">Year founded in Seattle, Washington</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
