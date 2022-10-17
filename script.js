const number = document.getElementById('number');
const button = document.getElementById('submitNumber');

const randomNumber = Math.floor(Math.random() * 10);

if (randomNumber === 0) {
  randomNumber
}

button.addEventListener('click', () => {
  if (number.value <= 0 || number.value > 9) {
    alert('Número inválido');
  } else if (randomNumber != number.value) {
    alert('Errou');
  } else if (randomNumber == number.value) {
    alert('Acertou');
  }
  console.log(randomNumber);
});
