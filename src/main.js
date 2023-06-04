import { newNumber, newTime, newWeekDay, showAnswer } from './trainer.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const defaultMode = localStorage.getItem('kt_mode') ?? 'number'
  const modeField = document.getElementById('form-field-mode')
  modeField.value = defaultMode

  modeField.addEventListener('change', (e) => {
    const mode = e.target.value

    updatePreferencesFieldsDisplay(mode)
    localStorage.setItem('kt_mode', mode)
  })

  updatePreferencesFieldsDisplay(defaultMode)

  const startButton = document.getElementById('start-button')

  console.dir(startButton)

  startButton.addEventListener('click', () => {
    const mode = modeField.value

    switch (mode) {
      case 'number':
        newNumber()
        break;
      case 'time':
        newTime()
        break;
      case 'weekday':
        newWeekDay()
        break;
      default:
        break;
    }

    const quizItemElem = document.querySelector('#quiz-item')

    if (quizItemElem.value !== '') {
      quizItemElem.removeAttribute('disabled')
    }
  })

  document.getElementById('result-host').addEventListener('click', () => {
    document.querySelector('#quiz-item').value !== '' && showAnswer()
  })
})

function updatePreferencesFieldsDisplay(mode) {
  document.querySelectorAll('[data-preferences-set]').forEach((el) => {
    if (el.dataset.preferencesSet.includes(mode)) {
      el.classList.remove('hidden')
    } else {
      el.classList.add('hidden')
    }
  })
}
