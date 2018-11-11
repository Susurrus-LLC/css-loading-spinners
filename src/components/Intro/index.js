import './styles.css'

const intro = () => {
  const element = document.createElement('p')
  element.className = 'intro'
  element.innerText = 'A collection of tiny single div css loaders and spinners.'
  return element
}

export default intro()
