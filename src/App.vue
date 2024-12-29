<script setup>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Spinner from "./components/Spinner.vue";
import HomePage from "./pages/HomePage.vue";

defineComponent({
  components: {
    HomePage,
    Spinner,
  },
});

const { t } = useI18n();
</script>

<template>
  <HomePage />
  <Spinner 
    :size="100" 
    color="#00BFFF"
  />
</template>
