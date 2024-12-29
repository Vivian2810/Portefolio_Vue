<script>
import { ref, onMounted } from "vue";

export default {
  name: "HomePage",
};

</script>

<template>
    <div class="border-solid p-4 rounded-md">
      <h1 class="home_title">{{ $t("home.bienvenue_message") }}</h1>
    </div>

    
</template>

<style scoped>
.home_title {
  color: #fee;
  text-shadow: 0 0 20px rgba(206, 0, 255, 0.7), 0 0 40px rgba(206, 0, 255, 0.7),
    0 0 100px rgba(206, 0, 255, 0.7);
}
</style>
>
