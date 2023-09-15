<script setup>
import Card from '../components/Card.vue'
import RegistroLivro from '../components/RegistroLivros.vue'

// import LivroService from '@/services/livros.js'

// const livros = ref([])
// const currentLivro = ref({
//   name: ''
// })

// onMounted(async () => {
//   const data = await LivroService.getAllLivros()
//   livros.value = data
// })

// async function save() {
//   await LivroService.saveLivro(currentLivro.value)
//   const data = await LivroService.getAllGenres()
//   livros.value = data
//   currentLivro.value = { name: '' }
// }

// async function deleteLivro(livro) {
//   await LivroService.deleteGenre(livro)
//   const data = await LivroService.getAllGenres()
//   livros.value = data
// }

// function editLivro(livro) {
//   currentLivro.value = { ...livro }
// }
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="flex justify-start">
        <button class="btn btn-wide" onclick="my_modal_5.showModal()">Registrar Livro</button>
        <RegistroLivro />
      </div>
      <Card />
      <Card />
      
    </div>
  </div>
</template>
