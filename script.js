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
