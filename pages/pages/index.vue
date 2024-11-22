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
              <h1 class="text-4xl text-white font-bold mb-2">Our Operations</h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">Home/ </a>
                  <span>Our Operations</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/o2.jpg"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mj-container my-10">
      <div class="text-center">
        <p class="text-custom-green uppercase tracking-widest text-xs">
          OPERATIONS
        </p>
        <h1 class="text-3xl font-semibold">
          SOME OF OUR <span class="font-sri"> OPERATIONS</span>
        </h1>
      </div>
      <!-- cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex items-center bg-white shadow-md rounded-lg p-4 space-x-4"
        >
          <div class="w-32 h-32">
            <img
              :src="card.image"
              alt="card image"
              class="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800">
              {{ card.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {{ truncateText(card.description, 50) }}
            </p>

            <!-- Progress bar with animation -->
            <div
              class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2"
            >
              <div
                class="absolute h-full bg-custom-green transition-all duration-500 ease-in-out"
                :style="{ width: card.progress + '%' }"
              ></div>
            </div>

            <!-- Read more -->
            <nuxt-link
              :to="`/pages/${card.id}`"
              class="text-custom-green text-sm font-medium hover:underline"
            >
              Read more
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- end -->
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
      "IEDA Relief aims to ensure that people have access to adequate and appropriate health care and nutrition that allows them to live healthy lives as refugees and asylum seekers integrate into the Houston community.",
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
function truncateText(text, limit) {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}
</script>