"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
// usando os modificadores de acesso: private, public, protected, static. 
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0; // Protected - Só pode ser acessado onde foi criado e pelas herdeiras;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo; //get para acessar o saldo
    }
    depositar(valor) {
        this.saldo += valor; /* += p manter o valor atual e add o valor */
    }
}
//variacao da conta bancaria, uma herdeira dela.
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2; /* acessou SALDO pq o campo protegido permite q as herdeiras de acessem */
    }
}
//instancia da conta bancaria
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();
