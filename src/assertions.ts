// afirmando algum type

let statusAtual: unknown = 1
let mudaStatus: number = 0

// Dessa maneira estamos afirmando que statusAtual é um numero e não um type unknown
mudaStatus = statusAtual as number
console.log(mudaStatus)


let query: unknown = 'pizza'
let searchTerm: string = query as string
