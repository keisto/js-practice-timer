class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    if (callbacks) {
      this.onStart = callbacks.onStart ?? null
      this.onTick = callbacks.onTick ?? null
      this.onComplete = callbacks.onComplete ?? null
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if (this.onStart) this.onStart()

    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) this.onComplete()
    } else {
      this.timeRemaining = this.timeRemaining - 1
      if (this.onTick) this.onTick()
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    durationInput.value = time
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('started')
  },
  onTick() {
    console.log('ticked')
  },
  onComplete() {
    console.log('completed')
  },
})
