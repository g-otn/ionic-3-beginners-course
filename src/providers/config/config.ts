import { Injectable } from '@angular/core';

const configKeyName = 'config'

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: '',
    username: ''
  }

  constructor() {
  }

  // Recupera os dados do LocalStorage
  getConfigData(): any {
    return JSON.parse(localStorage.getItem(configKeyName))
  }

  // Grava os dados do LocalStorage
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    const config = {
      showSlide: false,
      name: '',
      username: ''
    }

    // Atualiza apenas o que foi mandado
    if (showSlide) config.showSlide = showSlide
    if (name) config.name = name
    if (username) config.username = username

    localStorage.setItem(configKeyName, JSON.stringify(config))

  }

}
