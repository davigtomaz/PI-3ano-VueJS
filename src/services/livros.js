import api from '../plugins/api'

class LivroService {
  async getAllLivro() {
    const response = await api.get('/livros/')
    return response.data
  }
  async saveLivro(livro) {
    let response
    if (livro.id) {
      response = await api.put(`/livors/${livro.id}/`, livro)
    } else {
      response = await api.post('/livros/', livro)
    }
    return response.data
  }
  async deleteLivro(livro) {
    const response = await api.delete(`/livros/${livro.id}/`)
    return response.data
  }
}

export default new LivroService()