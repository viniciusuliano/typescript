// Iniciando essa função ela entra como any, então o typescript não aceita esse tipo de dado
// function login(username:string): boolean | string{
//     console.log('Bem vindo ' + username)
//     return true
// }


// login('Vinicius')

let n1 : number = 10
let n2 : number = 10

function somar(valor1 :number, valor2:number):number{
    let soma = valor1 + valor2
    return soma
}


console.log(somar(n1, n2))