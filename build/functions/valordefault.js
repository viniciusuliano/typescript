"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro("teste@teste.com", "123123");
