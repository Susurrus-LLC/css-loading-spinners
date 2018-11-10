import './styles.css'

const title = () => {
  const element = document.createElement('h1')
  element.className = 'site-title'
  element.innerText = 'CSS Spinners'
  return element
}

const header = () => {
  const element = document.createElement('header')
  element.appendChild(title())
  return element
}

export default header()
