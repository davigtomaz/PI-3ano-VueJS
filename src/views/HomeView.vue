<script setup>
import { ref, reactive } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import imageService from '../services/images.js'
import livrosService from '../services/livros.js'

const coverUrl = ref('')
const file = ref(null)
const currentLivro = reactive({
  title: '',
  year: '',
  genre: '',
  rating: 0
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  const image = await imageService.uploadImage(file.value)
  currentLivro.cover_attachment_key = image.attachment_key
  await livrosService.saveLivro(currentLivro)
  Object.assign(currentLivro, {
    id: '',
    title: '',
    year: '',
    genre: '',
    rating: 0,
    cover_attachment_key: ''
  })
  showForm.value = false
}

const showForm = ref(false)
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="flex justify-start mb-4">
        <button class="btn btn-wide" @click="showForm = true">
          <PlusBoxIcon />
          Registrar Livro
        </button>
      </div>
      <Card />
      <modal :visible="showForm" @close="showForm = false">
        <template #header>
          <h3>Cadastro de Livros</h3>
        </template>
        <template #body>
          <form class="form">
            <div class="row mb-4">
              <div id="preview" class="w-full text-center">
                <input type="file" @change="onFileChange" />
                <div class="cover">
                  <img v-if="coverUrl" :src="coverUrl" />
                </div>
              </div>
            </div>
            <div class="form-item">
              <label for="title">Título</label>
              <input type="text" placeholder="Título" id="title" v-model="currentLivro.title" />
              
            </div>
            <div class="form-item">
              <label for="year">Gênero</label>
              <select v-model="currentLivro.genre">
                <option disabled value="">Selecione um gênero</option>
                <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                  {{ genre.name }}
                </option>
              </select>
            </div>
            <div class="form-item">
              <label for="year">Gênero</label>
              <select v-model="currentLivro.genre">
                <option disabled value="">Selecione um gênero</option>
                <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                  {{ genre.name }}
                </option>
              </select>
            </div>
            <div class="form-item">
              <label for="year">Gênero</label>
              <select v-model="currentLivro.genre">
                <option disabled value="">Selecione um gênero</option>
                <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                  {{ genre.name }}
                </option>
              </select>
            </div>
          </form>
        </template>
        <template #footer>
          <div class="footerButtons">
            <button @click="showForm = false">Cancelar</button>
            <button class="saveButton" @click="save">Salvar</button>
          </div>
        </template>
      </modal>
    </div>
  </div>
</template>

<style scoped lang="css">
.addButton,
.saveButton {
  height: 2rem;
  align-self: center;
  margin-left: 75%;
  background-color: #080;
  color: white;
  justify-content: space-around;
}

.footerButtons {
  display: flex;
  padding: 75 px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  row-gap: 0.5rem;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#preview .cover {
  width: 200px;
  height: 270px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}

#preview img {
  width: 200px;
  height: 270px;
}
</style>
