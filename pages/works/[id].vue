<template>
  <div class="container mx-auto p-4">
    <button
      class="mb-4 bg-gray-200 px-4 py-2 rounded-lg"
      @click="router.push('/works')"
    >
      Back
    </button>

    <!-- Vérification que card existe -->
    <div v-if="card" class="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        :src="card.image"
        alt="Card Image"
        class="w-full h-60 object-cover"
      />
      <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">{{ card.title }}</h1>
        <p class="text-gray-600 mb-4">{{ card.description }}</p>
        <p class="text-gray-500">
          Additional details about {{ card.title }}...
        </p>
      </div>
    </div>

    <!-- Afficher un message de chargement si card est null -->
    <div v-else class="text-center">
      <p class="text-gray-600">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const card = ref(null);

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

onMounted(() => {
  const id = parseInt(route.params.id);
  card.value = cards.find((c) => c.id === id);

  if (!card.value) {
    console.error("Card not found");
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
