<script setup>
import { format } from 'date-fns'
import Config from '../configs/main'

const { data: articles } = await useAsyncData('navigation', () =>
  queryContent('blog').sort({ pubDate: -1 }).find()
)

useHead({
  title: `BLOG | ${Config.title}`,
})
</script>

<template>
  <div class="flex">
    <div class="mx-auto max-w-screen-md mt-8 mb-32">
      <!-- <Pagination currentPage={page.currentPage} lastPage={page.lastPage} /> -->
      <div
        class="grid gap-y-4 mx-2 grid-cols-1 mt-4"
        v-for="{
          title,
          _path,
          pubDate,
          description,
          heroImage,
          tags,
        } in articles"
      >
        <AritcleCard
          :title="title"
          :description="description"
          :pubDate="format(new Date(pubDate), 'yyyy . MM . dd')"
          :heroImage="heroImage"
          :tags="tags"
          :path="_path"
        />
      </div>
    </div>
  </div>
</template>
