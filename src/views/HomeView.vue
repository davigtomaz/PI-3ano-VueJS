<script setup></script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="flex justify-start">
        <button class="btn btn-wide" onclick="my_modal_5.showModal()">Registrar Livro</button>
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <form method="dialog" class="modal-box">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_titulo"
                id="floating_titulo"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Titulo</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_Autor"
                id="floating_Autor"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Autor</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_editora"
                id="floating_editora"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Editora</label
              >
            </div>
            <div>
              <label
                for="localizacao"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Qual a localizacao</label
              >
              <select
                id="localizacao"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Casa</option>
                <option>Escola</option>
                
              </select>
              
            </div>
            <div>
              <label
                for="categorias"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Selecione sua categoria</label
              >
              <select
                id="categorias"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Ação</option>
                <option>Aventura</option>
                <option>Ficção</option>
                <option>Terror</option>
              </select>
              <div class="modal-action">
                <button class="btn">Registrar</button>
              </div>
            </div>
          </form>
        </dialog>
      </div>

      <div class="grid grid-cols-3 gap-4 mb-4 mt-5">
        <div class="flex items-center justify-center h-30 rounded bg-gray-50 dark:bg-gray-800">
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure class="w-56">
              <img src="@/assets/20103781.jpg" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
