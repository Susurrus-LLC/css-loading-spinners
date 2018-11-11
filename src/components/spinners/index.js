import './styles.css'

export const circleSpin = () => {
  const element = document.createElement('div')
  element.className = 'circle spin'
  return element
}

export const dualSpin = () => {
  const element = document.createElement('div')
  element.className = 'dual-circle spin'
  return element
}

export const wedgeSpin = () => {
  const element = document.createElement('div')
  element.className = 'wedge spin'
  return element
}

export const squareFlip = () => {
  const element = document.createElement('div')
  element.className = 'square flip-flop'
  return element
}

export const signal = () => {
  const element = document.createElement('div')
  element.className = 'signal'
  return element
}

export const tripleSignal = () => {
  const element = document.createElement('div')
  element.className = 'triple-signal'
  return element
}
