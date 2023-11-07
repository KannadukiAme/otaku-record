<script setup>
import Config from '../configs/main'
</script>

<template>
  <footer
    class="bg-gray-100 dark:bg-gray-800 flex flex-col items-center p-20 text-sm md:text-base text-gray-500 dark:text-gray-300"
  >
    <p>
      Powered by
      <NuxtLink
        class="font-bold hover:text-sora"
        target="_blank"
        to="https://content.nuxt.com/"
      >
        <Icon class="w-5 h-5" name="logos:nuxt-icon" />
        <span class="ml-1">NuxtContent</span>
      </NuxtLink>
    </p>
    <p>{{ Config.footer.copyright }}</p>
  </footer>
</template>
