let azul = '\033[34mAzul\033[0m'
let verde = '\033[32mVerde\033[0m'
let roxo = '\033[35mRoxo\033[0m'

function Jedi(nome, ranque, corSabre){
  this.nome = nome

  let _ranque = ranque

  let _corSabre = corSabre
  
  
  this.setRanque = (ranque) => {
    _ranque = ranque
  }

  this.getRanque = () => {
    return _ranque
  }

  this.setCorSabre = (corSabre) => {
    if (typeof corSabre === 'string') {
      _corSabre = corSabre
    } else {
      console.error('Tipo errado inserido em Cor do Sabre')
    }
  }

  this.getCorSabre = () => {
    return _corSabre
  }
}

function Padawan(nome) {
  Jedi.call(this, nome, 'Padawan' , azul)

  this.promocao = ()=>{
    this.setRanque('Cavaleiro')
  }
}

function Cavaleiro(nome) {
  Jedi.call(this, nome, 'Cavaleiro', azul)

  this.promocao = ()=>{
    this.setRanque('Mestre')
  }
}

function Mestre(nome) {
  Jedi.call(this, nome, 'Mestre', verde)
}


const Jedi1 = new Padawan('Anakin')
Jedi1.promocao()

const Jedi2 = new Cavaleiro('Obi-wan')
Jedi2.promocao()

const Jedi3 = new Mestre('Yoda')

const Jedi4 = new Mestre('Mace Windu')
Jedi4.setCorSabre(roxo)

console.log(
  `Nome: ${Jedi1.nome} - Ranque: ${Jedi1.getRanque()} - Cor do Sabre: ${Jedi1.getCorSabre()}`
)

console.log(
  `Nome: ${Jedi2.nome} - Ranque: ${Jedi2.getRanque()} - Cor do Sabre: ${Jedi2.getCorSabre()}`
)

console.log(
  `Nome: ${Jedi3.nome} - Ranque: ${Jedi3.getRanque()} - Cor do Sabre: ${Jedi3.getCorSabre()}`
)

console.log(
  `Nome: ${Jedi4.nome} - Ranque: ${Jedi4.getRanque()} - Cor do Sabre: ${Jedi4.getCorSabre()}`
)

