const cardArray = [
  {
    name: 'dragon',
    img: 'images/dragon-face.png',
  },
  {
    name: 'ghost',
    img: 'images/ghost.png',
  },
  {
    name: 'mage',
    img: 'images/man-mage.png',
  },
  {
    name: 'ogre',
    img: 'images/ogre.png',
  },
  {
    name: 'devil',
    img: 'images/smiling-face-with-horns.png',
  },
  {
    name: 'zombie',
    img: 'images/woman-zombie-3802939216.png',
  },

  {
    name: 'dragon',
    img: 'images/dragon-face.png',
  },
  {
    name: 'ghost',
    img: 'images/ghost.png',
  },
  {
    name: 'mage',
    img: 'images/man-mage.png',
  },
  {
    name: 'ogre',
    img: 'images/ogre.png',
  },
  {
    name: 'devil',
    img: 'images/smiling-face-with-horns.png',
  },
  {
    name: 'zombie',
    img: 'images/woman-zombie-3802939216.png',
  },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/white-medium-square.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)

  }
}

createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/white-medium-square.png')
    cards[optionTwoId].setAttribute('src', 'images/white-medium-square.png')
    alert('You clicked the same card!')
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
  } else {
        cards[optionOneId].setAttribute('src', 'images/white-medium-square.png')
        cards[optionTwoId].setAttribute('src', 'images/white-medium-square.png')
  
  }
resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'

  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout( checkMatch, 500)
  }
}
