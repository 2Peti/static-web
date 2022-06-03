for (let nm = 0; nm < data.length; nm++) {
  document.getElementById('al' + nm).style.display = "none"
  document.getElementById('ul' + nm).style.display = "inline-block"
  document.getElementById('a' + nm).disabled = true
  document.getElementById('k' + nm).style.display = "none"
  corrects[nm] = true
  givens[nm] = data[nm][2]
  if (seq == "yes") {
    document.getElementById('dl' + nm).style.display = "none"
    document.getElementById('al' + nm).style.display = "inline-block"
  }
  else if (seq == "final") {
    document.getElementById('dl' + penUlt).style.display = "none"
    document.getElementById('al' + penUlt).style.display = "inline-block"
  }
} 

showLocks()
document.getElementById('startScreen').style.display = "none"
document.getElementById('time').innerHTML = formatTime()
document.getElementById('doneScreen').style.display = "block"
if (email != "") {
  sendResults()
}
