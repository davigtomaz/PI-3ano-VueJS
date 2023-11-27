<script setup>
import { ref, reactive, onMounted } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import CardEmprestimo from '../components/CardEmprestimo.vue'
import Modal from '../components/Modal.vue'

import emprestimos from '../services/emprestimos'


const capaUrl = ref('')
const file = ref(null)
const currentEmprestimo = reactive({
  Nome: '',
  : [],
  editora: null,
  autores: [],
  localizacao: null
})

function onFileChange(e) {
  file.value = e.target.files[0]
  capaUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  const image = await imageService.uploadImage(file.value)
  currentLivro.capa_attachment_key = image.attachment_key

  await livrosService.saveLivro(currentLivro)

  Object.assign(currentLivro, {
    titulo: '',
    categoria: [],
    editora: null,
    autores: [],
    localizacao: null,
    capa_attachment_key: null
  })

  showForm.value = false
  location.reload()
}
onMounted(async () => {
  const data = await categoriaService.getAllCategorias()
  categorias.value = data
})
onMounted(async () => {
  const data = await autorService.getAllAutores()
  autores.value = data
})

onMounted(async () => {
  const data = await localizacaoService.getAllLocalizacao()
  localizacoes.value = data
})

onMounted(async () => {
  const data = await editoraService.getAllEditoras()
  editoras.value = data
})

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
      <CardEmprestimo />
      <modal :visible="showForm" @close="showForm = false">
        <template #header>
          <h3>Cadastro de Livros</h3>
        </template>
        <template #body>
          <form class="form">
            <div class="row mb-4">
              <div id="preview" class="w-full text-center">
                <input type="file" @change="onFileChange" />
                <div class="capa">
                  <img v-if="capaUrl" :src="capaUrl" />
                </div>
              </div>
            </div>
            <label for="titulo">Título</label>
            <div class="form-item">
              <input type="text" placeholder="Título" id="titulo" v-model="currentLivro.titulo" />
            </div>
            <label class="text-title" for="year">Categoria</label>
            <div class="form-item">
              <select v-model="currentLivro.categoria">
                <option disabled value="">Selecione uma categoria</option>
                <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                  {{ categoria.nome }}
                </option>
              </select>
            </div>
            <label class="text-title" for="year">Autor</label>
            <div class="form-item">
              <select v-model="currentLivro.autores">
                <option disabled value="">Selecione o Autor</option>
                <option v-for="autor in autores" :key="autor.id" :value="autor.id">
                  {{ autor.nome }}
                </option>
              </select>
            </div>
            <label class="text-title" for="year">Localização</label>
            <div class="form-item">
              <select v-model="currentLivro.localizacao">
                <option disabled value="">Selecione uma Localizacao</option>
                <option
                  v-for="localizacao in localizacoes"
                  :key="localizacao.id"
                  :value="localizacao.id"
                >
                  {{ localizacao.nome }}
                </option>
              </select>
            </div>
            <label class="text-title" for="year">Editora</label>
            <div class="form-item">
              <select v-model="currentLivro.editora">
                <option disabled value="">Selecione uma Editora</option>
                <option v-for="editora in editoras" :key="editora.id" :value="editora.id">
                  {{ editora.nome }}
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
  width: 4rem;
  align-self: center;
  margin-left: 75%;
  background-color: #080;
  color: white;
  justify-content: space-around;
}

.footerButtons {
  display: flex;
  padding: 0.75rem;
}

.form {
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#preview .capa {
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
