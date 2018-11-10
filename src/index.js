import './styles.css'

const component = () => {
  const element = document.createElement('div')
  element.className = 'el'
  element.innerHTML = 'Hello'
  return element
}

const element = component()
document.body.appendChild(element)
