'use babel'

// import TomatoStatusBar from './status-bar-item'
import { CompositeDisposable } from 'atom'
const TomatoTimerView = require('./tomato-timer-view')

export default {
  tomatoTimerView: null,
  modalPanel: null,
  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tomato-timer:startup': () => this.startup(),
      'tomato-timer:end': () => this.end()
    }))
  },
  // consumeStatusBar(statusBar) {
  //   const statusBarItem = new TomatoStatusBar()
  //   const tile = statusBar.addRightTile({
  //     item: statusBarItem.element,
  //     priority: 200
  //   })
  //   function updateStatusbar() {
  //     statusBarItem.toggle()
  //   }
  // },

  deactivate() {
    this.modalPanel.destroy()
    this.tomatoTimerView.destroy()
      // this.statusBarItem.destroy()
  },

  serialize() {
    return {
      tomatoTimerViewState: this.tomatoTimerView.serialize()
    }
  },

  startup() {
    if (this.modalPanel) {
      this.modalPanel.destroy()
    }
    if (this.tomatoTimerView) {
      this.tomatoTimerView.destroy()
    }
    this.tomatoTimerView = new TomatoTimerView()
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.tomatoTimerView.getElement(),
      visible: false
    })
    // messing with time for message
    const endTime = new Date(new Date().getTime() + 1500000)

    function adjusted(time) {
      let hours
      let minutes
      hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
      if (time.getMinutes() < 10) {
        minutes = `0${time.getMinutes()}`
      } else {
        minutes = time.getMinutes()
      }
      return `${hours}:${minutes}`
    }
    const formated = adjusted(endTime)
      // TODO: Add counter for 5 pomodoros...
      // TODO: Add statusbar countdown timer...
    atom.notifications.addSuccess('Starting Timer', {
      detail: `You have until ${formated} unitl your next break. Focus...`,
      dismissable: false,
      icon: 'flame'
    })
    setTimeout(() => this.modalPanel.show(), 1500000)
    setTimeout(() => this.modalPanel.hide(), 1800000)
  },

  end() {
    atom.notifications.addWarning('Canceling Timer', {
      detail: 'Tomato Timer was cancelled.',
      dismissable: false,
      icon: 'flame'
    })
    this.deactivate()
  }
}
