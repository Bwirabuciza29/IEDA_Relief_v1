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
          </div>
        </div>
      </div>
    </div>
    <div class="mj-container my-12">
      <!-- Détails en haut avec icône -->
      <div class="flex items-center space-x-4 text-gray-600 text-sm">
        <div class="relative group inline-block">
          <!-- Texte principal -->
          <div
            class="bg-custom-green text-white px-3 py-1 rounded-full font-medium"
          >
            Operations 1
          </div>
        </div>

        <div class="flex items-center space-x-1 relative group">
          <i class="fa-solid fa-user-tie"></i>
          <span>ieda Admin</span>
          <!-- Ligne animée -->
          <div
            class="absolute left-0 -bottom-2 h-1 w-0 pt-1 bg-custom-green transition-all duration-700 group-hover:w-full"
          ></div>
        </div>

        <div class="flex items-center space-x-1 relative group">
          <i class="fas fa-calendar-alt"></i>
          <span>Jun 12, 2024</span>
          <!-- Ligne animée -->
          <div
            class="absolute left-0 -bottom-2 h-1 w-0 bg-custom-green transition-all duration-700 group-hover:w-full"
          ></div>
        </div>
      </div>

      <!-- Grand Titre -->
      <h1 class="text-5xl font-bold mt-4">Camp Management</h1>

      <!-- Petit Titre -->
      <h2 class="text-xl font-medium text-gray-700 mt-2">
        Defending Nature for Generations to Come
      </h2>

      <!-- Description -->
      <p class="text-gray-600 mt-4 leading-relaxed">
        Since 2008, IEDA Relief has been designing and implementing humanitarian
        aid and sustainable development solutions that allow individuals and
        communities to become self-sufficient.
      </p>

      <!-- Section des images -->
      <div class="mt-8 space-y-6">
        <!-- Grande Image -->
        <div class="w-full h-64 overflow-hidden rounded-lg">
          <img
            src="/img/p1.png"
            alt="Main camp scene"
            class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <!-- Petites Images -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="h-40 overflow-hidden rounded-lg">
            <img
              src="/img/p2.png"
              alt="Child looking into distance"
              class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="h-40 overflow-hidden rounded-lg">
            <img
              src="/img/p3.png"
              alt="Mother and children"
              class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="h-40 overflow-hidden rounded-lg">
            <img
              src="/img/p4.png"
              alt="Group of smiling kids"
              class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <!-- Contenu supplémentaire sous les images -->
      <div class="mt-12">
        <!-- Listes alignées -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <!-- Liste à puces -->
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Leo a diam sollicitudin tempor. Mauris pellentesque pulvinar
              pellentesque habitant.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
              Lorem ipsum dolor sit amet.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Lacus vel facilisis volutpat est velit egestas dui ornare. Mauris
              rhoncus aenean vel elit.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Sed blandit libero volutpat sed cras ornare arcu dui. Non enim
              praesent elementum facilisis leo vel.
            </li>
          </ul>

          <!-- Liste ordonnée -->
          <ol class="space-y-2 list-decimal list-inside">
            <li>
              Facilisis volutpat est velit egestas dui id ornare arcu odio.
              Risus commodo viverra maecenas.
            </li>
            <li>
              Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Dolor
              morbi non arcu risus quis.
            </li>
            <li>
              Vulputate ut pharetra sit amet aliquam id diam. Purus non enim
              praesent elementum.
            </li>
            <li>
              Fames ac turpis egestas integer eget aliquet nibh. Maecenas
              pharetra convallis posuere morbi.
            </li>
          </ol>
        </div>

        <!-- Titre supplémentaire -->
        <h2 class="text-2xl font-bold mt-8">
          Defending Nature for Generations to Come
        </h2>
        <p class="text-gray-600 mt-4">
          Iaculis eu non diam phasellus vestibulum lorem. Id consectetur purus
          ut faucibus pulvinar elementum integer enim. Netus et malesuada fames
          ac turpis egestas. Et tortor at risus viverra adipiscing at in tellus.
          Turpis in eu mi bibendum neque egestas congue quisque egestas.
        </p>

        <!-- Citation -->
        <blockquote
          class="border-l-4 border-blue-500 pl-4 mt-6 text-gray-700 font-sri"
        >
          <p>
            "To defend earth's future, we must rewrite our relationship with the
            environment — from devastation to preservation. The choice is to
            squander our world or sustain its majesty for generations ahead."
          </p>
          <footer class="text-gray-600 font-medium mt-2">Willow Brook</footer>
        </blockquote>

        <!-- Texte final -->
        <p class="text-gray-600 mt-6">
          Urna duis convallis convallis tellus id interdum velit laoreet. Amet
          consectetur adipiscing elit pellentesque. Consectetur adipiscing elit
          pellentesque habitant morbi. Nec nam aliquam sem et tortor. Penatibus
          et magnis dis parturient montes nascetur ridiculus mus.
        </p>

        <!-- Hashtags et icônes -->
        <div class="flex items-center justify-between mt-8">
          <div class="space-x-2">
            <span
              class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >#SocialImpact</span
            >
            <span
              class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >#ChangingLives</span
            >
          </div>
          <div class="flex space-x-4 text-green-700 text-lg">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-x-twitter"></i>
            <i class="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <!-- The dernier -->
      <div
        class="flex flex-col sm:flex-row justify-between items-center my-16 border-t border-gray-200 pt-8 space-y-8 sm:space-y-0"
      >
        <!-- Lien Previous -->
        <div class="flex items-center space-x-4">
          <a
            href="#"
            class="flex items-center space-x-2 group hover:underline decoration-green-500"
          >
            <img
              src="/img/p5.png"
              alt="Shelter and infrastructures"
              class="w-16 h-16 rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h3 class="text-gray-800 font-semibold hover:underline">
                Shelter and infrastructures
              </h3>
              <div class="flex items-center space-x-1 text-sm text-gray-500">
                <i class="fas fa-calendar-alt text-green-500"></i>
                <span>Jun 21, 2024</span>
              </div>
            </div>
          </a>
        </div>

        <!-- Ligne verticale au centre sur les grands écrans -->
        <div class="hidden sm:block w-px bg-gray-300 h-16"></div>

        <!-- Lien Next -->
        <div class="flex items-center space-x-4">
          <a
            href="#"
            class="flex items-center space-x-2 group hover:underline decoration-green-500"
          >
            <div class="text-right">
              <h3
                class="text-gray-800 font-medium group-hover:decoration-green-500"
              >
                Health and community...
              </h3>
              <div
                class="flex items-center justify-end space-x-1 text-sm text-gray-500"
              >
                <i class="fas fa-calendar-alt text-green-500"></i>
                <span>Sep 30, 2024</span>
              </div>
            </div>
            <img
              src="/img/p6.png"
              alt="Health and community support"
              class="w-16 h-16 rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
      </div>

      <!-- Formulaire "Leave a Reply" -->
      <div class="mt-8 flex justify-center">
        <div class="w-full max-w-md">
          <!-- Réduit la largeur et centre le contenu -->
          <h2 class="text-4xl font-bold mb-4 text-center">Leave a Reply</h2>
          <form class="space-y-2">
            <!-- Champ Message -->
            <textarea
              placeholder="Please type your message here..."
              class="w-full p-2 rounded-lg resize-none"
              rows="5"
            ></textarea>

            <!-- Champs Nom et Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                class="p-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                class="p-2 rounded-lg"
              />
            </div>

            <!-- Bouton Envoyer -->
            <button
              type="submit"
              class="mt-4 px-4 py-2 w-full bg-green-500 text-white font-medium rounded-lg"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Footers -->
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
const route = useRoute();
const card = ref(null);

const cards = [
  {
    id: 1,
    title: "Camp Management",
    description:
      "Since 2008, IEDA Relief has been designing and implementing humanitarian aid and sustainable development solutions that allow individuals and communities to become self-sufficient.",
    descriptions:
      "Our programs combat the root causes of poverty, uphold basic human rights and provide individuals with support to help them fulfill their full potential. Below is a summary of IEDA Relief’s current program offerings and expertise. Visit the “Where We Work” section for more detailed project descriptions, and to see our programs in action. If you are interested in supporting any of the programs below, please explore our Causes, Partnership, Career and/or Volunteer/Internship options and opportunities.",
    image: "/img/o3.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 2,
    title: "Shelter and infrastructures",
    description:
      "Shelter is one of the most basic and prevalent needs for health, security and dignity in the wake of conflict or natural disasters. In international operations, IEDA Relief assesses shelter needs and provides families with temporary or semi-permanent solutions that give residents a sense of security after fleeing their homes. With help from other humanitarian partners, IEDA Relief also provides non-food items (NFIs) such as clothing, bedding and cooking sets to ensure more than just a roof overhead. Constructing and/or rebuilding infrastructure is key to providing sustainable solutions for displaced populations. Internationally, IEDA Relief often carries out infrastructure projects that facilitate access to disadvantaged populations, such as the opening or reopening of rural roads. In camps, IEDA Relief constructs and maintains community structures for food distribution, community gatherings, and the storage of materials. When the crisis has subsided, we also assist returnees and other vulnerable households with the reconstruction and/or rehabilitation of homes and public institutions (e.g. schools and hospitals) that were damaged or destroyed by conflict or natural disasters.",
    descriptions:
      "Since January 2015, IEDA Relief and Shelter Box signed a partnership to provide emergency shelter to Nigerian refugees who fled Boko Haram and fled to Cameroon looking for asylum. In 2014, Shelter Box sent a team of volunteers to Yaounde to train IEDA Relief staff in the installation of these tents. Since then, IEDA Relief has installed 1224 tents in the Camp of Minawao, delivering emergency assistance in the refugee camp of the Far North region of Cameroon.",
    image: "/img/o4.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 3,
    title: "Health and community services",
    description:
      "EDA Relief aims to ensure that people have access to adequate and appropriate health care and nutrition that allows them to live healthy lives as refugees and asylum seekers integrate into the Houston community.",
    descriptions:
      "Overseas, displaced populations and refugees are often vulnerable to an array of health risk factors while living in camps or residing in host communities.  IEDA Relief works to mitigate these vulnerabilities by offering a variety of services to prevent and treat illness and disease, combat malnutrition, facilitate access to health services, and mobilize the community to promote healthy and hygienic behaviors.",
    image: "/img/o5.png",
    image_2: "/img/h1.jpg",
    image_3: "/img/h2.jpg",
    image_4: "/img/h3.jpg",
    progress: 30,
  },
  {
    id: 4,
    title: "Food, Security and Livelihood",
    description:
      "In Houston, IEDA Relief places a top priority on ensuring that vulnerable populations and the communities that host them have sustainable access to appropriate, nutritious food as well as opportunities for growth and autonomy. In addition to capacity-building programs, IEDA Relief hosts job fairs to allow for refugees and immigrants to find meaningful jobs in the Houston area.",
    descriptions:
      "Around the world, IEDA Relief promotes and facilitates short- and long-term food security through a variety of programs. These range from the direct distribution of food aid and nutritional supplements in refugee camps, to mobilizing and training communities to make efficient use of available environmental resources to achieve optimal outcomes in agricultural production, livestock management, and other food-related activities. In addition, IEDA Relief conducts capacity-building programs that train and equip individuals to carry out income-generating activities, boosting their purchasing power and helping to mitigate the risk of food insecurity.",
    image: "/img/o6.png",
    image_2: "/img/f1.jpg",
    image_3: "/img/f2.jpg",
    image_4: "/img/f3.jpg",
    progress: 30,
  },
  {
    id: 5,
    title: "Legal Assistance",
    description:
      "In Houston, IEDA Relief’s provides quality, affordable legal assistance for clients regarding immigration and other legal issues. Led by IEDA Relief’s own BIA-accredited representative, the program provides service both in-house and through external partnerships with attorneys, university clinics, and local organizations. In its international programs, IEDA Relief promotes legal rights of displaced populations and vulnerable host communities and facilitates access to legal services. Examples of such activities include providing guidance regarding the judicial process to victims of human rights violations, and ensuring that displaced individuals receive proper documentation of their legal status (e.g. birth certificates, refugee identification) to help them access basic services.  ",
    descriptions:
      "Guided by our mission and accumulated experience as a humanitarian actor, IEDA Relief works to inform and educate the United States public about the plight of refugees, returnees, and internally displaced persons (IDPs) and to advocate for the rights of all humans through awareness events as well as our on-campus IEDA Relief Ambassadors Program. Overseas, IEDA Relief regularly joins our partners to advocate for the rights and well-being of refugees, returnees, internally displaced persons (IDPs) and the communities that host them around the world. We also strongly advocate for the continued education of young girls and the plight of child marriage.    ",
    image: "/img/o7.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 6,
    title: "Water, Sanitation & Hygiene (WASH)",
    description:
      "Sufficient water, sanitation, and hygiene (WASH) services and facilities are essential for people’s health and survival, particularly for displaced populations and the communities that host them. In IEDA Relief’s international operations, our WASH programs ensure that these groups have access to adequate potable water, latrines and washing facilities. IEDA Relief also mobilizes the community to raise awareness about effective sanitation and hygiene practices that help prevent illnesses and epidemics, and to make sure the community adopts these practices. ",
    descriptions: "",
    image: "/img/o8.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 7,
    title: "Education and vocational training ",
    description:
      "In Houston, IEDA Relief has established an adult education program that offers free English as a second language (ESL) classes for refugees, asylum seekers, new immigrants and other Limited English Proficiency (LEP) populations. Courses are developed in partnership with other adult literacy agencies and designed to address different proficiency levels. IEDA Relief’s Houston programs are constantly expanding and will soon include computer literacy, financial literacy, citizenship, driver’s education and other courses that can further increase and facilitate self-sufficiency.",
    description:
      "Overseas, IEDA Relief often leads programs focusing on literacy and skills training for youth and adults within displaced populations and their host communities. This training allows beneficiaries to access livelihoods opportunities that would otherwise be unavailable to them, and succeed in sustaining and expanding their own income-generating activities. Additionally, IEDA Relief often facilitates access to education as a camp management agency, working with responsible humanitarian actors to negotiate access to local schools for children residing in camps or to build schools inside camp premises.",
    image: "/img/o9.png",
    image_2: "/img/jpg1.jpg",
    image_3: "/img/jpg2.jpg",
    image_4: "/img/jpg3.jpg",
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
