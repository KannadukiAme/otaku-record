<script setup>
const props = defineProps([
  'pubDate',
  'heroImage',
  'title',
  'path',
  'description',
  'tags',
])
</script>

<template>
  <div class="shadow-md rounded bg-white dark:bg-gray-800">
    <NuxtLink :to="path">
      <img class="rounded-t" :src="heroImage" />
    </NuxtLink>
    <div class="p-8 sm:p-12">
      <div class="flex gap-x-4 text-sm">
        <template v-for="tag in tags">
          <NuxtLink class="text-sora" :to="`/tags/${tag}`">
            {{ tag }}
          </NuxtLink>
        </template>
        <div class="border-l border-gray-300 dark:border-gray-500"></div>
        <span class="text-gray-300 dark:text-gray-500">{{ pubDate }}</span>
      </div>
      <h2 class="mt-8">
        <NuxtLink
          class="text-gray-900 text-2xl dark:text-white hover:text-sora dark:hover:text-sora font-bold"
          :to="path"
        >
          {{ title }}
        </NuxtLink>
      </h2>
      <p class="mt-8 leading-8 dark:text-gray-50 text-gray-900">
        {{ description }}
      </p>
      <div class="mt-8">
        <NuxtLink
          class="inline-block border hover:border-sora dark:hover:border-sora px-8 py-2 font-thin border-gray-300 dark:border-gray-500 text-gray-300 dark:text-gray-500 hover:text-white hover:bg-sora dark:hover:text-white"
          :to="path"
        >
          阅 读
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
