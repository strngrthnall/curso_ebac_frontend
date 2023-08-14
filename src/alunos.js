const alunos = [{nome: 'César', nota: 5}, {nome: 'Carla', nota: 8}, {nome: 'Paulo', nota: 7}, {nome: 'Julio', nota: 3}, {nome: 'Fábia', nota: 10}, {nome: 'Luana', nota: 6}]

const maiorQue6 = alunos.filter((i) => {
  if(i.nota >= 6) {
    return i.nome
  }
})

console.log(maiorQue6)