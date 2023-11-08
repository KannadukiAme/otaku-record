<script setup>
import { format } from 'date-fns'

const route = useRoute()

const { data } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent(route.path).findOne()
)

const { data: surround } = await useAsyncData(`surround-${route.path}`, () =>
  queryContent('blog').sort({ pubDate: -1 }).findSurround(data.value._path)
)

const [next, prev] = surround.value
</script>

<template>
  <div class="flex">
    <div class="max-w-screen-lg mx-auto mb-[80px] md:flex gap-10">
      <div class="bg-white dark:bg-gray-800">
        <img class="w-full" :src="data.heroImage" />
        <div class="p-8 sm:p-12">
          <h1
            class="text-gray-900 dark:text-gray-50 text-3xl lg:text-5xl font-bold"
          >
            {{ data.title }}
          </h1>
          <div class="mt-4 flex gap-x-4 text-sm lg:text-base">
            <template v-for="tag in data.tags">
              <NuxtLink class="text-sora" :to="`/tags/${tag}`">
                {{ tag }}
              </NuxtLink>
            </template>
            <div class="border-l border-gray-300 dark:border-gray-500"></div>
            <span class="text-gray-300 dark:text-gray-500">{{
              format(new Date(data.pubDate), 'yyyy . MM . dd')
            }}</span>
          </div>
          <div
            class="mt-8 md:flex-shrink prose marker:text-sora max-w-none hover:prose-a:text-sora prose-a:no-underline dark:prose-invert lg:prose-xl"
          >
            <h2>目录</h2>
            <TableOfContents :toc="data.body.toc.links" />
            <ContentDoc />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="w-1/2">
            <NuxtLink
              v-if="prev"
              class="text-xl inline-block px-6 py-3 hover:text-sora"
              :to="prev._path"
            >
              <Icon
                class="w-8 h-8"
                name="ic:sharp-keyboard-double-arrow-left"
              />
              <span class="ml-1">{{ prev.title }}</span>
            </NuxtLink>
          </div>
          <div class="w-1/2 flex justify-end">
            <NuxtLink
              v-if="next"
              class="text-xl inline-block px-6 py-3 hover:text-sora"
              :to="next._path"
            >
              <span class="mr-1">{{ next.title }}</span>
              <Icon
                class="w-8 h-8"
                name="ic:sharp-keyboard-double-arrow-right"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <BackToTop />
  </div>
</template>
