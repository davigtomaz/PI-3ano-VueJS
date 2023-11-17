<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

import Loading from '../components/Loading.vue'

const livros = ref([])
const loading = ref(true)

const buscarLivros = async () => {
  try {
    const resposta = await axios.get('https://daarii.4.us-1.fl0.io/livros')
    livros.value = resposta.data
  } catch (erro) {
    console.error(erro)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  buscarLivros()
})
</script>

<template>
  <div class="loading1">
    <Loading v-if="loading" />
  </div>
  <div class="container">
    <div class="card" :style="{ '--clr': cardColor }" v-for="(livro, index) in livros" :key="index">
      <div class="img-box">
        <img :src="livro.capa" alt="Imagem" />
      </div>
      <div class="content">
        <div class="title-background">
          <h2>{{ livro.titulo }}</h2>
        </div>
        <p>Categoria: {{ livro.categoria.join(',') }}</p>
        <p>Autor(s): {{ livro.autores.join(',') }}</p>
        <p>Localização: {{ livro.localizacao }}</p>
        <p>Editora: {{ livro.editora }}</p>
        <button class="button">
          <svg viewBox="0 0 448 512" class="svgIcon">
            <path
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 110px 50px;
  padding: 50px 50px;
}
.loading1 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container .card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  max-width: 100%;
  height: 300px;
  background: white;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
}

.container .card:hover {
  height: 400px;
  cursor: pointer;
}

.container .card .img-box {
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.4s;
  z-index: 1;
}

.container .card:hover .img-box {
  top: -100px;
  scale: 0.75;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
}

.container .card .img-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container .card .content .title-background {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.container .card .content {
  position: absolute;
  top: 265px;
  width: 100%;
  height: 35px;
  padding: 0 30px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;
}

.container .card:hover .content {
  top: 240px;
  height: 250px;
}

.container .card .content h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--clr);
  margin: 0;
}

.container .card .content p {
  color: #333;
}

.container .card .content a:hover {
  opacity: 0.8;
}

@media (max-width: 480px) {
  .container .card {
    width: 240px;
    border-radius: 15px;
  }

  .container .card .img-box {
    width: 185px;
    border-radius: 10px;
  }

  .container .card .content p {
    font-size: 0.8rem;
  }

  .container .card .content a {
    font-size: 0.9rem;
  }
  .button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: .3s;
  overflow: hidden;
  position: relative;
}

.svgIcon {
  width: 12px;
  transition-duration: .3s;
}

.svgIcon path {
  fill: white;
}

.button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: .3s;
  background-color: rgb(255, 69, 69);
  align-items: center;
}

.button:hover .svgIcon {
  width: 50px;
  transition-duration: .3s;
  transform: translateY(60%);
}

.button::before {
  position: absolute;
  top: -20px;
  content: "Delete";
  color: white;
  transition-duration: .3s;
  font-size: 2px;
}

.button:hover::before {
  font-size: 13px;
  opacity: 1;
  transform: translateY(30px);
  transition-duration: .3s;
}
}
</style>
