<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const livros = ref([]); 

const buscarLivros = async () => { 
  try {
    const resposta = await axios.get('https://daarii-ni11-dev.fl0.io/livros');
    livros.value = resposta.data; 
  } catch (erro) {
    console.error('Erro ao buscar os livros:', erro);
  }
}

onMounted(() => {
  buscarLivros();
});
</script>

<template>
  <div class="grid grid-cols-3 gap-4 mb-4 mt-5">
    <div v-for="livro in livros" :key="livro.id" class="flex items-center justify-center h-30 rounded bg-gray-50 dark:bg-gray-800">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure class="w-56">
          <img :src="livro.capa" alt="Capa do Livro" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ livro.titulo || 'Título não disponível' }}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
