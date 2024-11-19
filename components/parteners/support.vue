<template>
  <section class="mj-container">
    <div class="container mx-auto px-4">
      <div class="text-center my-6">
        <p class="text-custom-green uppercase tracking-widest text-xs">
          {{ t1 }}
        </p>
        <h1 class="text-3xl font-semibold">
          {{ t2 }}
          <span class="font-sri"> {{ t3 }}</span>
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Card 1 -->
        <div
          class="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div class="w-full md:w-1/2">
            <img
              src="/img/enf.png"
              alt="Empowering Lives"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6 w-full md:w-1/2">
            <img src="/img/Quote.png" alt="Icon" class="mb-4" />
            <h3 class="text-lg font-semibold mb-2">{{ title_1 }}</h3>
            <p class="text-gray-600">
              {{ desc_1 }}
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div class="w-full md:w-1/2">
            <img
              src="/img/po.png"
              alt="Overcoming Adversity"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6 w-full md:w-1/2">
            <img src="/img/Quote.png" alt="Icon" class="mb-4" />
            <h3 class="text-lg font-semibold mb-2">{{ title_2 }}</h3>
            <p class="text-gray-600">
              {{ desc_2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
// Initialiser les variables avant de les utiliser
const t1 = ref(t("support.t1"));
const t2 = ref(t("support.t2"));
const t3 = ref(t("support.t3"));
const title_1 = ref(t("support.title_1"));
const title_2 = ref(t("support.title_2"));
const desc_1 = ref(t("support.desc_1"));
const desc_2 = ref(t("support.desc_2"));
</script>
