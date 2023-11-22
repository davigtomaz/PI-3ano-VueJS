<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

import BottonT from "./BottonT.vue";
import Loading from "../components/Loading.vue";

import livroService from "../services/livros";

const livros = ref([]);
const loading = ref(true);

const handleDeleteLivro = async (livro) => {
  try {
    await livroService.deleteLivro(livro);
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
  }
};
const buscarLivros = async () => {
  try {
    const resposta = await axios.get("https://daarii.4.us-1.fl0.io/livros");
    livros.value = resposta.data;
  } catch (erro) {
    console.error(erro);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  buscarLivros();
});
</script>

<template>
  <div class="loading1">
    <Loading v-if="loading" />
  </div>
  <div class="container">
    <div
      class="card"
      :style="{ '--clr': cardColor }"
      v-for="(livro, index) in livros"
      :key="index"
    >
      <div class="img-box">
        <img :src="livro.capa" alt="Imagem" />
      </div>
      <div class="content">
        <div class="title-background">
          <h2>{{ livro.titulo }}</h2>
        </div>
        <p>Categoria: {{ livro.categoria.join(",") }}</p>
        <p>Autor(s): {{ livro.autores.join(",") }}</p>
        <p>Localização: {{ livro.localizacao }}</p>
        <p>Editora: {{ livro.editora }}</p>
        <div class="buttonT">
          <BottonT @click="handleDeleteLivro(livro)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 110px 50px;
  padding: 50px 150px;
}
.buttonT {
  display: flex;
  justify-content: center;
  padding-top: 10px;
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
  height: 440px;
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
    width: 260px;
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

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }
}
</style>
