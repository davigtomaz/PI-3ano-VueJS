import api from '../plugins/api'

class LocalizacaoService {
  async getAllLocalizacao() {
    const response = await api.get('/localizacao/')
    return response.data
  }
  async saveLocalizacao(localizacao) {
    let response
    if (localizacao.id) {
      response = await api.put(`/localizacao/${localizacao.id}/`, localizacao)
    } else {
      response = await api.post('/localizacao/', localizacao)
    }
    return response.data
  }
  async deleteLocalizacao(localizacao) {
    const response = await api.delete(`/localizacao/${localizacao.id}/`)
    return response.data
  }
}

export default new LocalizacaoService()