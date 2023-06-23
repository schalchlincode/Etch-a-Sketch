for (let i = 0; i < 16 * 16; i++) {
  let square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'blue'
  })

  container.appendChild(square)
}
