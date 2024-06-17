"use strict";
function totalV(...vendas) {
    const qtdVendas = vendas.length;
    console.log(`Você fez ${qtdVendas} vendas hoje`);
}
totalV(10, 30, 50);
