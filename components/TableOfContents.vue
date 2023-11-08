<script setup>
const props = defineProps({
  toc: Object,
})
</script>

<template>
  <ul v-if="toc">
    <li v-for="link in toc" :key="link.text" class="list-none">
      <a :href="`#${link.id}`">
        {{ link.text }}
      </a>
      <TableOfContents :toc="link.children" />
    </li>
  </ul>
</template>
