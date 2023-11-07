import api from '../plugins/api'

class AutorService {
  async getAllAutores() {
    const response = await api.get('/autor/')
    return response.data
  }
  async saveAutor(autor) {
    let response
    if (autor.id) {
      response = await api.put(`/autor/${autor.id}/`, autor)
    } else {
      response = await api.post('/autor/', autor)
    }
    return response.data
  }
  async deleteAutor(autor) {
    const response = await api.delete(`/autor/${autor.id}/`)
    return response.data
  }
}

export default new AutorService()