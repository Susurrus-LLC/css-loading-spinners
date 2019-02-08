// Spinner data
var spinnerData = {
  spinners: [
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
}

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
  var copyrightYears = document.getElementById('copyright-years')
  copyrightYears.innerHTML = getCopyrightYears()
}
