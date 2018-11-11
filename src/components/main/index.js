import intro from '../intro'
import spinner from '../spinner'
import {
  circleSpin,
  dualSpin,
  signal,
  squareFlip,
  tripleSignal,
  wedgeSpin
} from '../spinners'

import './styles.css'

const main = () => {
  const element = document.createElement('main')
  element.appendChild(intro)
  const container = element.appendChild(document.createElement('div'))
  container.className = 'container'
  container.appendChild(spinner(circleSpin))
  container.appendChild(spinner(dualSpin))
  container.appendChild(spinner(squareFlip))
  container.appendChild(spinner(wedgeSpin))
  container.appendChild(spinner(signal))
  container.appendChild(spinner(tripleSignal))
  return element
}

export default main()
