import './styles.css'

const spinner = (spinner) => {
  const element = document.createElement('div')
  element.className = 'spinner'
  element.appendChild(spinner())
  return element
}

export default spinner
