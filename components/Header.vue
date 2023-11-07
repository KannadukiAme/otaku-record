<script setup>
import Config from '../configs/main'

const colorMode = useColorMode()

const onClick = () =>
  colorMode.value === 'light'
    ? (colorMode.preference = 'dark')
    : (colorMode.preference = 'light')
</script>

<template>
  <header class="flex p-4 bg-gray-50 dark:bg-gray-900">
    <div class="flex-1 flex space-x-6 items-center">
      <div class="text-gray-900 dark:text-gray-50 text-3xl hidden sm:block">
        {{ Config.title }}
      </div>
    </div>
    <div class="flex px-2 py-2 space-x-6 items-center">
      <div class="flex space-x-6 text-gray-300">
        <NuxtLink
          exactActiveClass="text-sora"
          class="font-bold hover:text-sora"
          v-for="{ name, href } in Config.nav"
          :to="href"
        >
          <span>{{ name }}</span>
        </NuxtLink>
      </div>
      <div
        class="flex space-x-6 text-gray-900 dark:text-gray-50 before:border-l before:mr-6"
      >
        <button @click="onClick">
          <ColorScheme placeholder="...">
            <template v-if="colorMode.value === 'light'">
              <Icon class="w-6 h-6 cursor-pointer" name="uil:moon" />
            </template>
            <template v-else>
              <Icon class="w-6 h-6 cursor-pointer" name="uil:sun" />
            </template>
          </ColorScheme>
        </button>
        <NuxtLink :to="Config.repoUrl" target="_blank">
          <Icon class="w-6 h-6" name="uil:github" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
