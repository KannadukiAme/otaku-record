<script setup>
import { format } from 'date-fns'

const route = useRoute()

const tags = route.params.slug

const { data: articles } = await useAsyncData('tags', () =>
  queryContent('blog')
    .where({ tags: { $in: tags } })
    .sort({ pubDate: -1 })
    .find()
)

const count = articles.value.length
</script>

<template>
  <div class="max-w-screen-lg min-h-[600px] mx-auto mb-[80px] px-4">
    <div class="text-2xl mb-2">
      <Icon name="uil:tag-alt"></Icon>
      <span class="ml-2">{{ `${tags[0]} (${count})` }}</span>
    </div>
    <template v-for="article in articles">
      <NuxtLink
        class="mb-2 flex justify-between hover:text-sora"
        :to="article._path"
      >
        <span>{{ article.title }}</span>
        <span class="text-gray-500">{{
          format(new Date(article.pubDate), 'yyyy-MM-dd')
        }}</span>
      </NuxtLink>
    </template>
  </div>
</template>
