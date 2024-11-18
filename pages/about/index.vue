<template>
  <div class="mt-44">{{ title_1 }}</div>
</template>
<script setup>
const { t } = useI18n();
const title_1 = ref(t("about.title_1"));
</script>
