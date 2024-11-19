<template>
  <section class="mj-container relative z-10">
    <div class="text-center my-6">
      <p class="text-custom-green uppercase tracking-widest text-xs">
        Inspiring Stories, Changing Lives
      </p>
      <h1 class="text-3xl font-semibold">
        <span class="font-sri"> Testimonials</span> from Our Community
      </h1>
    </div>
    <div class="grid gap-6 p-4 md:grid-cols-3">
      <!-- Premier Grid -->
      <div class="relative">
        <img
          src="/img/filles.png"
          alt="Image principale"
          class="w-full rounded-lg shadow-md"
        />
        <div
          class="absolute bottom-2 right-2 w-16 h-16 bg-yellow-500 rounded shadow-lg"
        ></div>
      </div>

      <!-- Deuxième Grid -->
      <div class="flex flex-col items-center text-center">
        <div class="flex items-center gap-4 mb-4">
          <img
            src="/img/bf.jpg"
            alt="Avatar 1"
            class="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <img
            src="/img/bf.jpg"
            alt="Avatar 2"
            class="w-20 h-20 rounded-full border-4 border-gray-500"
          />
          <img
            src="/img/bf.jpg"
            alt="Avatar 3"
            class="w-16 h-16 rounded-full border-2 border-gray-300"
          />
        </div>
        <p class="text-gray-700">
          “"Thanks to IEDA Relief, I am no longer at risk of forced marriages."
          ~ Central-African refugee child, Borgop refugee site, Adamauoua
          region, Cameroon. Beneficiary of IEDA Relief community Service”
        </p>
      </div>

      <!-- Troisième Grid -->
      <div class="relative">
        <img
          src="/img/bro.png"
          alt="Deuxième image"
          class="w-full rounded-lg shadow-md"
        />
        <div
          class="absolute top-2 right-2 w-16 h-16 bg-green-500 rounded shadow-lg"
        ></div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
// Initialiser les variables avant de les utiliser
const t1 = ref(t("logo.t1"));
const t2 = ref(t("logo.t2"));
const t3 = ref(t("logo.t3"));
</script>
