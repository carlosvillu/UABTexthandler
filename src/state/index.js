import {Container} from 'unstated'

export class UI extends Container {
  state = {
    asideMenu: null,
    showMenu: false
  }

  asideMenu(node = false) {
    this.setState(state => ({...state, asideMenu: node}))
  }

  showMenu(show = false) {
    this.setState(state => ({...state, showMenu: show}))
  }
}
