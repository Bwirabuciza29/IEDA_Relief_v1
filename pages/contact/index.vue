<template>
  <section class="bg-green-50">
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-16">
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
    <div class="mj-container">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-8 lg:p-16 space-y-8 space-x-8 lg:space-y-0"
      >
        <!-- Section gauche -->
        <div class="lg:w-1/2 space-y-6">
          <h1 class="text-3xl lg:text-4xl font-bold">
            Your Chance to Create
            <span class="font-sri text-green-600">Opportunities</span> Today
          </h1>
          <p class="text-gray-600">
            Hi, please complete the form below to let us know how we can help
            you, or check the Frequently Asked Questions first to see if your
            question has already been answered.
          </p>
          <div class="space-y-4 p-4 bg-white rounded-lg">
            <p class="flex items-center space-x-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600"
              >
                <i class="fas fa-envelope"></i>
              </span>
              <span>name@domain.com</span>
            </p>
            <p class="flex items-center space-x-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600"
              >
                <i class="fas fa-phone-alt"></i>
              </span>
              <span>+123 45 67 123</span>
            </p>
            <p class="flex items-center space-x-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600"
              >
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>123 Main Street, Anytown, USA</span>
            </p>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="lg:w-1/2 p-8 w-full">
          <form class="space-y-2">
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
      <div class="mj-container mt-24">
        <div
          class="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0"
        >
          <!-- Section gauche -->
          <div class="grid grid-cols-2 gap-4 lg:w-1/3 relative">
            <div class="space-y-4 absolute left-20 -top-40 hidden lg:block">
              <img
                src="/img/co1.png"
                alt="Image 1"
                class="w-24 rounded-lg object-cover"
              />
              <img
                src="/img/co3.png"
                alt="Image 2"
                class="w-16 rounded-lg object-cover"
              />
            </div>
            <img
              src="/img/co2.png"
              alt="Image 3"
              class="absolute -top-32 left-48 w-24 rounded-lg object-cover hidden lg:block"
            />
          </div>

          <!-- Section centre -->
          <div class="lg:w-1/3 text-center">
            <div class="flex justify-center space-x-4 lg:flex">
              <img
                src="/img/co4.png"
                alt="Image 4"
                class="w-12 h-12 lg:w-10 lg:h-10 rounded-full object-cover"
              />
              <img
                src="/img/co5.png"
                alt="Image 5"
                class="w-16 h-16 lg:w-16 lg:h-16 rounded-full object-cover"
              />
              <img
                src="/img/co6.png"
                alt="Image 6"
                class="w-12 h-12 lg:w-10 lg:h-10 rounded-full object-cover"
              />
            </div>
            <p class="text-gray-800 font-sri text-lg mt-4 w-full">
              "Vively doesn't just talk about making a difference - they live it
              every day, profoundly changing lives with their initiatives."
            </p>
            <p class="mt-4 text-gray-600 font-bold">Borely Bavis</p>
          </div>

          <!-- Section droite -->
          <div class="lg:w-1/3 relative">
            <div class="space-y-4 absolute right-36 -top-40 hidden lg:block">
              <img
                src="/img/co7.png"
                alt="Image 7"
                class="w-24 rounded-lg object-cover"
              />
              <img
                src="/img/co8.png"
                alt="Image 8"
                class="w-24 rounded-lg object-cover"
              />
            </div>
            <img
              src="/img/co9.png"
              alt="Image 9"
              class="absolute -top-16 -right-18 w-20 rounded-lg object-cover hidden lg:block"
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