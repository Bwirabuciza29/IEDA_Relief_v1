<template>
  <div>
    <div class="mj-container mt-24">
      <!-- Section principale -->
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- Colonne gauche -->
        <div class="lg:w-1/2">
          <h1 class="text-3xl font-bold">
            Your Chance to Create
            <span class="font-sri">Opportunities</span> Today
          </h1>
          <p class="mt-2 text-gray-600">
            When you give to Vively you trust us to steward your donation
            thoughtfully toward maximum positive impact.
          </p>

          <!-- Liste des récents dons -->
          <div class="mt-6 space-y-4">
            <h1 class="text-2xl font-semibold">Recent Donation</h1>
            <div
              class="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-50 hover:bg-white hover:border-green-500 hover:scale-105 transition-transform duration-300 ease-in-out border"
              v-for="donation in recentDonations"
              :key="donation.id"
            >
              <p>{{ donation.description }}</p>
              <span class="text-xl font-semibold text-black"
                >${{ donation.amount }}</span
              >
            </div>
          </div>
        </div>

        <!-- Colonne droite -->
        <div class="lg:w-1/2">
          <!-- Boutons de bascule -->
          <div class="w-full flex flex-col-2 items-center mb-6 gap-2">
            <button
              :class="[
                'w-full px-4 py-2 text-center rounded-md transition duration-200',
                isGiveOnce ? 'bg-green-400 text-white' : 'bg-gray-50',
              ]"
              @click="toggleForm('giveOnce')"
            >
              Give Once
            </button>
            <button
              :class="[
                'w-full px-4 py-2 text-center rounded-md transition duration-200',
                isGiveOnce ? 'bg-gray-50' : 'bg-green-400 text-white',
              ]"
              @click="toggleForm('monthly')"
            >
              Monthly
            </button>
          </div>
          <div v-if="isGiveOnce" class="w-full">
            <form class="space-y-4 p-6 bg-gray-50">
              <!-- Boutons de sélection des montants -->
              <div class="flex flex-wrap gap-2 w-full">
                <button
                  v-for="option in options"
                  :key="option"
                  @click.prevent="setAmount(option)"
                  :class="[
                    'flex-1 py-2 text-center rounded-lg border transition duration-200',
                    selectedAmount === option
                      ? 'border-green-400 text-green-400'
                      : 'bg-gray-100',
                  ]"
                >
                  ${{ option }}
                </button>
              </div>

              <!-- Champs du formulaire -->
              <div
                class="relative w-full flex items-center border rounded focus-within:border-green-400"
              >
                <!-- Signe dollar -->
                <span class="absolute left-3 text-gray-500">$</span>

                <!-- Champ de saisie -->
                <input
                  v-model="amount"
                  type="number"
                  placeholder="Enter Amount"
                  class="w-full p-2 pl-8 pr-12 border-none focus:outline-none rounded"
                />

                <!-- Texte USD -->
                <span class="absolute right-3 text-gray-500">USD</span>
              </div>

              <!-- Champ de texte pour le nom -->
              <input
                type="text"
                placeholder="Your Name"
                class="w-full p-2 rounded border focus:outline-none focus:border-green-400"
              />

              <!-- Champ de texte pour l'email -->
              <input
                type="email"
                placeholder="Your Email"
                class="w-full p-2 rounded border focus:outline-none focus:border-green-400"
              />

              <!-- Zone de texte pour les commentaires -->
              <textarea
                placeholder="Comment"
                class="w-full p-2 rounded border focus:outline-none focus:border-green-400"
              ></textarea>

              <!-- Checkbox -->
              <div class="flex items-center gap-2">
                <!-- Première checkbox -->
                <input
                  type="checkbox"
                  id="hide-name"
                  class="h-4 w-4 text-green-500"
                />
                <label for="hide-name" class="text-gray-600 text-sm"
                  >Hide my name from the public.</label
                >

                <!-- Deuxième checkbox (avec un ID unique et un checkbox désactivé pour interdire le clic) -->
                <input
                  type="checkbox"
                  id="contact-me"
                  class="h-4 w-4 text-green-500"
                  disabled
                />
                <label for="contact-me" class="text-gray-600 text-sm"
                  >It's okay to contact me in the future.</label
                >
              </div>

              <!-- Bouton de soumission -->
              <button
                type="submit"
                class="w-full py-2 text-white bg-green-400 rounded-lg"
              >
                DONATE NOW
              </button>
            </form>
          </div>

          <!-- Formulaire mensuel -->
          <div v-else>
            <form class="space-y-4 p-6 bg-gray-50">
              <h3 class="text-xl font-semibold">Monthly</h3>

              <!-- Champ de saisie pour le montant mensuel -->
              <input
                v-model="amount"
                type="number"
                placeholder="Monthly Amount"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
              />

              <!-- Champ de texte pour le nom -->
              <input
                type="text"
                placeholder="Your Name"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
              />

              <!-- Champ de texte pour l'email -->
              <input
                type="email"
                placeholder="Your Email"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
              />

              <!-- Zone de texte pour les commentaires -->
              <textarea
                placeholder="Comment"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
              ></textarea>

              <!-- Checkbox -->
              <div class="flex items-center gap-2">
                <input type="checkbox" id="contact-future" />
                <label for="contact-future" class="text-gray-600"
                  >It's okay to contact me in the future.</label
                >
              </div>

              <!-- Bouton de soumission -->
              <button
                type="submit"
                class="w-full py-2 text-white bg-green-400 rounded"
              >
                DONATE NOW
              </button>
            </form>
          </div>
          <!-- Formulaires -->
        </div>
      </div>
    </div>
    <div class="my-16">
      <log />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isGiveOnce = ref(true);
const recentDonations = ref([
  {
    id: 1,
    description:
      "Michael R. made a one-time donation to support the Pet Pals Monthly Giving Circle.",
    amount: 40,
  },
  {
    id: 2,
    description:
      "Aurora C. made a one-time donation to support the Enriching Senior Lives.",
    amount: 500,
  },
  {
    id: 3,
    description:
      "Horizon P. made a one-time donation to support the Homeless Shelter Meals.",
    amount: 12,
  },
]);

const options = [25, 50, 75, 100, 250];
const selectedAmount = ref(null);
const amount = ref(0);

const toggleForm = (type) => {
  isGiveOnce.value = type === "giveOnce";
};

const setAmount = (value) => {
  amount.value = value;
  selectedAmount.value = value;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
