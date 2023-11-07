<script setup>
import Config from '../configs/main'
import avatar from '../assets/images/asuka-avatar.jpg'

const numOfArticles = await queryContent('blog').count()

useHead({
  title: `${Config.title}`,
})
</script>

<template>
  <div class="flex">
    <div class="mx-auto mt-32 mb-64 px-4">
      <div class="sm:flex gap-x-10">
        <img
          class="flex-none rounded-full mb-10 max-w-64 max-h-64"
          :src="avatar"
        />
        <div class="flex-auto">
          <p class="text-3xl mb-2">{{ Config.title }}</p>
          <p class="text-gray-500 text-base mb-2 font-thin italic">
            Created By
            <NuxtLink
              class="hover:text-sora font-bold"
              to="https://github.com/KannadukiAme"
              target="_blank"
              >@KannadukiAme</NuxtLink
            >
          </p>
          <p class="text-gray-500 text-base mb-8">
            {{ `已撰写 ${numOfArticles} 篇文章` }}
          </p>
          <p class="text-xl mb-8">{{ Config.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
