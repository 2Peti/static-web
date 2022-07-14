for (let i = 0; i < data.length; i++) {
  revealClue(i);
  document.getElementById('a' + i).value=data[i][2]
  checkAnswer(i)
}
