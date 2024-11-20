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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum
        modi doloremque fugit, porro quidem maxime a iure placeat officia optio
        libero aperiam illo consectetur sit alias ex quibusdam repellat? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Inventore harum modi
        doloremque fugit, porro quidem maxime a iure placeat officia optio
        libero aperiam illo consectetur sit alias ex quibusdam repellat? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Inventore harum modi
        doloremque fugit, porro quidem maxime a iure placeat officia optio
        libero aperiam illo consectetur sit alias ex quibusdam repellat? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Inventore harum modi
        doloremque fugit, porro quidem maxime a iure placeat officia optio
        libero aperiam illo consectetur sit alias ex quibusdam repellat? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Inventore harum modi
        doloremque fugit, porro quidem maxime a iure placeat officia optio
        libero aperiam illo consectetur sit alias ex quibusdam repellat? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Inventore harum modi
        doloremque fugit, porro quidem maxime a iure placeat officia optio
        libero aperiam illo consectetur sit alias ex quibusdam repellat?
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
</script>
