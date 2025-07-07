function crearCuadrado(padre, id, color, apagar) {
  let cuadrado = document.createElement('div')
  cuadrado.id = id
  cuadrado.style.width = '200px'
  cuadrado.style.height = '200px'
  cuadrado.style.backgroundColor = color
  cuadrado.style.margin = '10px'

  padre.appendChild(cuadrado)

  if (apagar) {
    cuadrado.addEventListener('click', function(e) {
      pintar(e.target, 'black')
    })
  }
}