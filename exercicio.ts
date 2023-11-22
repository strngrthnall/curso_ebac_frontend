function multiplicacao(valor1: number, valor2: number) : number {
  return valor1 * valor2
}

function saudacao(nome: string): string {
  let capitalNome: string = nome.charAt(0).toUpperCase() + nome.slice(1)
  return "Olá " + capitalNome
}

console.log(multiplicacao(2,2))
console.log(saudacao('marcos'))