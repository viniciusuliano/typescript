function cadastro(email:string, senha:string, nome ="Aluno", idade?:number): void{
    let data = {email, senha, nome}
    console.log(data)
}

cadastro("teste@teste.com", "123123")