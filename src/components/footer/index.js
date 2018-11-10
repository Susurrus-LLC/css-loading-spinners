import './styles.css'

const title = 'CSS Spinners'
const author = 'Ian A.&nbsp;Cook'
const authorURL = 'https://github.com/nai888'
const githubURL = 'https://github.com/nai888/css-spinners'
const license = 'AGPL-3.0'
const licenseURL = 'https://choosealicense.com/licenses/agpl-3.0/'
const copyYear = () => {
  const startYear = 2018
  const currentYear = new Date().getFullYear()
  return startYear === currentYear ? currentYear : `${startYear}–${currentYear}`
}

const footer = () => {
  const element = document.createElement('footer')
  element.innerHTML = `
    <p class="copyright">
      <a href='${githubURL}' target='_blank' rel='noopener noreferrer'>${title}</a>
      is copyrighted &copy; ${copyYear()} by
      <a href='${authorURL}' target='_blank' rel='noopener noreferrer'>${author}</a>
      under the
      <a href='${licenseURL}' target='_blank' rel='noopener noreferrer'>${license} license</a>.
    </p>`
  return element
}

export default footer()
