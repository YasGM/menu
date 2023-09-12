const cena = {
    'hamburguesa' : 10,
    'pizza' : 12,
  };
  
  const bebida = {
    'refresco': 3,
    'agua': 1
  };

  const menuItems = menu => {
    let menuString = []
    Object.keys(menu).map(item => {
      menuString.push(` ${item}`)
    })
    return menuString.join()
  }

  const cenaComentarios = {
    'hamburguesa': 'Con carne angus, excelente elección.',
    'pizza': 'Es nuestra especialidad.',
  }
  
  const bebidaComentarios = {
      'refresco': 'Puede servirse el que quiera en nuestra maquina de refrescos.',
      'agua': 'Traida del mantial que tenemos en Gorbeia.'
  };

  alert('Buenas noches, bienvenido a Bottega Diner.')
  alert(`Las especialidades de hoy son ${menuItems(cena)}. y las bebidas que tenemos son ${menuItems(bebida)}.`)

  const cenaOp = prompt('¿Qué le apetece comer?')

  alert(`${cenaComentarios[cenaOp]}`)
  alert(`La ${cenaOp} son ${cena[cenaOp]}€.`)

  const bebidaOp = prompt('Y para beber, ¿qué va a tomar?')
  
  alert(`${bebidaComentarios[bebidaOp]}`)
  alert(`La bebida cuesta ${bebida[bebidaOp]}€.`)

  const total = (cena[cenaOp] + bebida[bebidaOp])

  alert(`El total de la ${cenaOp} y el ${bebidaOp} son ${total}€.`)