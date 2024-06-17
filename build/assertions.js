"use strict";
// afirmando algum type
let statusAtual = 1;
let mudaStatus = 0;
// Dessa maneira estamos afirmando que statusAtual é um numero e não um type unknown
mudaStatus = statusAtual;
console.log(mudaStatus);
let query = 'pizza';
let searchTerm = query;
