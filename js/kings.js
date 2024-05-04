document.getElementById('toggleButton').addEventListener('click', function () {
  let hiddenText = document.getElementById('hiddenText');
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
    hiddenText.style.display = 'block';
    document.getElementById('toggleButton').innerText = 'Show Less';
  } else {
    hiddenText.style.display = 'none';
    document.getElementById('toggleButton').innerText = 'Show More';
  }
});