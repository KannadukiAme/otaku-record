<script setup>
onMounted(() => {
  const backToTop = document.querySelector('#backToTop')

  if (backToTop) {
    backToTop.style.display = 'none'
    backToTop.addEventListener('click', () => {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    })

    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTop.style.display = 'block'
      } else {
        backToTop.style.display = 'none'
      }
    })
  }
})
</script>

<template>
  <div
    class="fixed right-8 bottom-8 text-4xl cursor-pointer text-gray-500 hover:text-sora"
    id="backToTop"
  >
    <Icon class="w-16 h-16" name="ic:outline-keyboard-arrow-up"></Icon>
  </div>
</template>
