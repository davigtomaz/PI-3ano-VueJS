<script setup>
import { ref, reactive, onMounted } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import CardEmprestimo from '../components/CardEmprestimo.vue'
import Modal from '../components/Modal.vue'

import emprestimosService from '../services/emprestimos.js'
import livrosService from '../services/livros.js'
import livros from '../services/livros.js'

const livros2= ref([])

const currentEmprestimo = reactive({
  nome: '',
  contato: '',
  inicio: null,
  final: null,
  nome_livro: null
})

async function save() {
  console.log("entrol")
 const teste = await emprestimosService.saveEmprestimo(currentEmprestimo)
console.log(teste)
  Object.assign(currentEmprestimo, {
    nome: '',
    contato: '',
    inicio: null,
    final: null,
    nome_livro: null
  })

  showForm.value = false
  location.reload()
}

const showForm = ref(false)

onMounted(async () => {
  const data = await livrosService.getAllLivros()
  livros2.value = data
  console.log('Livros:', livros.value)
})
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="flex justify-start mb-4">
        <button class="btn btn-wide" @click="showForm = true">
          <PlusBoxIcon />
          Registrar Empréstimo
        </button>
      </div>
      <CardEmprestimo />
      
      <modal :visible="showForm" @close="showForm = false">
        <template #header>
          <h3>Registro de Empréstimos</h3>
        </template>
        <template #body>
          <form class="form">
            <div class="row mb-4">
              <label for="titulo">Nome</label>
              <div class="form-item">
                <input  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="text" placeholder="Nome" id="nome" v-model="currentEmprestimo.nome" />
              </div>
              <label class="text-title" for="year">Contato</label>
              <div class="form-item ">
                <input
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  placeholder="contato"
                  id="contato"
                  v-model="currentEmprestimo.contato"
                />
              </div>
              <div class="w-full px-3">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3">
                    <div class="mb-5">
                      <label class="text-title" for="year">Inicio</label>
                      <input
                        v-model="currentEmprestimo.inicio"
                        type="date"
                        name="date"
                        id="date"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-3">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3">
                    <div class="mb-5">
                      <label class="text-title" for="year">Final</label>
                      <input
                        v-model="currentEmprestimo.final"
                        type="date"
                        name="date"
                        id="date"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <label class="text-title" for="year">Livro Para emprestar</label>
              <div class="form-item ">
                <select v-model="currentEmprestimo.nome_livro"  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option disabled value="">Selecione o Livro</option>
                  <option
                   class=""
                    v-for="livro in livros2"
                    :key="livro.id"
                    :value="livro.id"
                  >
                  {{ livro.titulo }}
                  </option>
                </select>
              </div>
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
.modal {
  flex: 1;
  justify-content: center;
}

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
  justify-content: center;
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
</style>
