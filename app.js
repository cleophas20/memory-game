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
    img: 'images/similing-face-with-horns.png',
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
    img: 'images/similing-face-with-horns.png',
  },
  {
    name: 'zombie',
    img: 'images/woman-zombie-3802939216.png',
  },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard () {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/white-medium-square.png')
    card.setAttribute('data-id', i)
    gridDisplay.appendChild(card)
  }
}

createBoard()
