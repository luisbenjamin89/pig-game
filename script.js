/* inicializando el juego*/
initApp()
/*declarando variables */
let cuenta = 0
let cara
const btnroll = document.querySelector('.btn--roll')
const dado = document.querySelector('.dice')
let current1 = document.getElementById('current--0')
/*funcion para inciar el juego*/
function initApp() {
  let score = 0
  const score1 = document.getElementById('score--0')
  const score2 = document.getElementById('score--1')
  score1.textContent = score
  score2.textContent = score
}

/*funcionalidad de la aplicacion primer roll*/

btnroll.addEventListener('click', () => {
  cara = Math.floor(Math.random() * 6 + 1)
  cuenta += cara
  current1.textContent = cuenta

  switch (cara) {
    case 1:
      dado.setAttribute('src', 'dice-1.png')
      current1.textContent = 0
      break
    case 2:
      dado.setAttribute('src', 'dice-2.png')
      break
    case 3:
      dado.setAttribute('src', 'dice-3.png')
      break
    case 4:
      dado.setAttribute('src', 'dice-4.png')
      break
    case 5:
      dado.setAttribute('src', 'dice-5.png')
      break
    default:
      dado.setAttribute('src', 'dice-6.png')
  }
})
