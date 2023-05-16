function contar() {
  let inicio = document.getElementById('ini')
  let fim = document.getElementById('fi')
  let passo = document.getElementById('pas')
  
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando:'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < f) {
      //Contagem Crescente
      for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F48C}`
      }
    } else {
      //Contagem Decrecente
      for(let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F48C}`
      }
    }
  }
}

