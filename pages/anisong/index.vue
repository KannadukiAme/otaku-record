<script setup>
const { data } = await useAsyncData('anisong', () =>
  queryContent('/other/anisong-list').findOne()
)
</script>

<template>
  <div class="max-w-screen-lg min-h-[600px] mx-auto mt-8 mb-[80px] px-4">
    <template v-for="item in data.body">
      <div class="flex hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="mr-8">{{ item.id }}</div>
        <div>
          <div class="mb-2">{{ item.title }}</div>
          <div class="mb-2 text-gray-500">
            {{ `${item.singer} - ${item.description}` }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
