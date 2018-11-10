import spinner from '../spinner'
import { circleSpin, dualSpin, squareFlip } from '../spinners'

import './styles.css'

const main = () => {
  const element = document.createElement('main')
  const container = element.appendChild(document.createElement('div'))
  container.className = 'container'
  container.appendChild(spinner(circleSpin))
  container.appendChild(spinner(dualSpin))
  container.appendChild(spinner(squareFlip))
  return element
}

export default main()
