<template>
  <section class="bg-green-50">
    <div
      class="relative bg-[url('/img/bby.png')] bg-cover bg-center bg-no-repeat py-8 mx-4 md:mx-8 lg:mx-16 rounded-lg mt-20 shadow-lg"
    >
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-40 h-full w-auto hidden sm:block z-10"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl text-white font-bold mb-2">Our Operations</h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold"
                    >Our Operations/
                  </a>
                  <span>Details</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <!-- <img
                src="/img/o2.jpg"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto my-24 p-4">
      <NuxtLink to="/pages" class="mb-8 bg-gray-200 px-4 py-2 rounded-lg">
        Back
      </NuxtLink>

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
  </section>
</template>

<script setup>
const route = useRoute();
const card = ref(null);

const cards = [
  {
    id: 1,
    title: "Camp Management",
    description: "Vel eros donec ac odio tempor orci dapibus ultrices in.",
    image: "/img/o3.png",
    progress: 30,
  },
  {
    id: 2,
    title: "Shelter and infrastructures",
    description: "Nibh cras pulvinar mattis nunc mi quis hendrerit.",
    image: "/img/o4.png",
    progress: 30,
  },
  {
    id: 3,
    title: "Health and community services",
    description: "Sit amet aliquam id diam maecenas ultricies mi eget.",
    image: "/img/o5.png",
    progress: 30,
  },
  {
    id: 4,
    title: "Food, Security and Livelihood",
    description: "Platea dictumst quisque sagittis purus suscipit tellus.",
    image: "/img/o6.png",
    progress: 30,
  },
  {
    id: 5,
    title: "Legal Assistance",
    description: "Malesuada bibendum arcu vitae elementum curabitur.",
    image: "/img/o7.png",
    progress: 30,
  },
  {
    id: 6,
    title: "Water, Sanitation & Hygiene (WASH)",
    description: "Eu sem integer vitae justo eget magna fermentum.",
    image: "/img/o8.png",
    progress: 30,
  },
  {
    id: 7,
    title: "Education and vocational training ",
    description:
      "Pellentesque habitant morbi tristique senectus et netus. Porta lorem …",
    image: "/img/o9.png",
    progress: 30,
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
