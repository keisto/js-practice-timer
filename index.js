const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const timerProgressCircle = document.querySelector('#timer-progress')

const perimeter = timerProgressCircle.getAttribute('r') * 2 * Math.PI
timerProgressCircle.setAttribute('stroke-dasharray', perimeter)

let duration
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration
  },
  onTick(timerRemaining) {
    const offset = (perimeter * timerRemaining) / duration - perimeter
    timerProgressCircle.setAttribute('stroke-dashoffset', offset)
  },
  onComplete() {
    console.log('completed')
  },
})
