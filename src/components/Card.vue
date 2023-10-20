<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const livros = ref([]); 

const buscarLivros = async () => { 
  try {
    const resposta = await axios.get('https://daarii-ni11-dev.fl0.io/livros');
    livros.value = resposta.data; 
  } catch (erro) {
    console.error(erro);
  }
}

onMounted(() => {
  buscarLivros();
});
</script>

<template>
  <div class="grid grid-cols-3 gap-1 mb-6 mt-7  w-full">
    <div v-for="livro in livros" :key="livro.id" class="flex items-center justify-center ">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure class="w-full h-full">
          <img :src="livro.capa" alt="Capa do Livro" />
        </figure>
        <div class="card-body mr-1">
          <h2 class="card-title">{{ livro.titulo || 'Título não disponível' }}</h2>
          <p>Categoria: {{ livro.categoria.join(',') }}</p>
          <p>Autor(s): {{ livro.autores.join(',') }}</p>
          <p>Localização: {{ livro.localizacao }}</p>    
        </div>
      </div>
    </div>
  </div>
</template>
