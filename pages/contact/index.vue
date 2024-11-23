<template>
  <section class="bg-green-50">
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto hidden sm:block z-10"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl text-white font-bold mb-2">
                Let's Get in Touch
              </h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">Home/ </a>
                  <span>Contacts</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/c1.jpg"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mj-container my-10">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0"
      >
        <!-- Section gauche -->
        <div class="lg:w-1/2 space-y-6">
          <h1 class="text-3xl lg:text-4xl font-bold">
            Your Chance to Create
            <span class="italic text-green-600">Opportunities</span> Today
          </h1>
          <p class="text-gray-600">
            Hi, please complete the form below to let us know how we can help
            you, or check the Frequently Asked Questions first to see if your
            question has already been answered.
          </p>
          <div class="space-y-4">
            <p class="flex items-center space-x-3">
              <span class="text-green-600">&#9993;</span>
              <span>merkulove@template.com</span>
            </p>
            <p class="flex items-center space-x-3">
              <span class="text-green-600">&#9743;</span>
              <span>+123 45 67 123</span>
            </p>
            <p class="flex items-center space-x-3">
              <span class="text-green-600">&#127970;</span>
              <span>123 Main Street, Anytown, USA</span>
            </p>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg w-full">
          <form class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option>Choose a Contact Reason</option>
              <option>Support</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>
            <textarea
              rows="4"
              placeholder="Message"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <button
              type="submit"
              class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <!-- Carte Google Maps -->
      <div class="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345094977!2d144.95592831538247!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1668644382983!5m2!1sen!2s"
          width="100%"
          height="300"
          class="rounded-lg shadow-lg"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <!-- Section des images et citation -->
      <div class="mt-12 bg-gray-100 py-8 px-4 lg:px-16">
        <div
          class="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0"
        >
          <!-- Images alignées à gauche -->
          <div class="grid grid-cols-3 gap-2 lg:gap-4 lg:w-1/3">
            <img
              src="/img/co1.png"
              alt="Image 1"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 2"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 3"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 4"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 5"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 6"
              class="w-full rounded-lg object-cover"
            />
          </div>

          <!-- Citation au centre -->
          <div class="lg:w-1/3 text-center">
            <p class="text-gray-800 italic text-lg">
              "Vively doesn't just talk about making a difference - they live it
              every day, profoundly changing lives with their initiatives."
            </p>
            <p class="mt-4 text-gray-600 font-bold">Borely Bavis</p>
          </div>

          <!-- Images alignées à droite -->
          <div class="grid grid-cols-3 gap-2 lg:gap-4 lg:w-1/3">
            <img
              src="/img/co1.png"
              alt="Image 7"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 8"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 9"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 10"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 11"
              class="w-full rounded-lg object-cover"
            />
            <img
              src="/img/co1.png"
              alt="Image 12"
              class="w-full rounded-lg object-cover"
            />
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
</script>