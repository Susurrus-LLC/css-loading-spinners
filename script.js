// Spinner data
var spinnerData = [
  {
    classes: 'cls-circle cls-spin'
  },
  {
    classes: 'cls-dual-circle cls-spin'
  },
  {
    classes: 'cls-square cls-flip-flop'
  },
  {
    classes: 'cls-bowtie cls-spin'
  },
  {
    classes: 'cls-bowtie cls-flip-flop'
  },
  {
    classes: 'cls-signal'
  },
  {
    classes: 'cls-triple-signal'
  },
  {
    classes: 'cls-ring'
  },
  {
    classes: 'cls-rings'
  }
]
var currentSpinner = 0

// Determine the correct copyright years to list
var getCopyrightYears = function () {
  var startYear = 2019
  var date = new Date
  var year = date.getFullYear()
  if (year === startYear) {
    return startYear
  } else {
    return startYear + '&ndash;' + year
  }
}

window.onload = function () {
  // Fix the copyright year if needed
  var copyrightYears = document.getElementById('copyright-years')
  copyrightYears.innerHTML = getCopyrightYears()

  // Animate the arrow styling
  var navArrows = Array.from(document.getElementsByClassName('nav-arrow'))
  navArrows.forEach(function (arr) {
    arr.onmouseover = function (e) {
      e.target.classList.add('hovered')
    }
    arr.onmouseout = function (e) {
      e.target.classList.remove('hovered')
    }
  })

  // Change the spinner and instructions text
  var spinner = document.querySelector('.cls-spinner').children[0]
  console.log(spinner)
  var instructionsClasses = document.getElementById('classes')
  var setSpinnerData = function () {
    var newClasses = spinnerData[currentSpinner].classes
    spinner.className = newClasses
    instructionsClasses.innerText = newClasses
  }

  // Navigate to previous
  var prevArrow = document.getElementById('previous')
  prevArrow.onclick = function () {
    currentSpinner = (currentSpinner + spinnerData.length - 1) % spinnerData.length
    setSpinnerData()
  }

  // Navigate to next
  var prevArrow = document.getElementById('next')
  prevArrow.onclick = function () {
    currentSpinner = (currentSpinner + 1) % spinnerData.length
    setSpinnerData()
  }
}
