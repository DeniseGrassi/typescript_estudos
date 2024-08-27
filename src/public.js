"use strict";
//USANDO PUBLIC AGORA 
class Pessoa2 {
    constructor(nome) {
        this.nome = nome;
    }
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}
const pessoa = new Pessoa2('João'); //INSTANCIA
console.log(pessoa.nome); // joao -  Acessível fora da classe
pessoa.cumprimentar(); // Olá, meu nome é João. - Acessível fora da classe
//USANDO PRIVATE AGORA 
class Pessoa3 {
    constructor(idade) {
        this.idade = idade;
    }
    mostrarIdade() {
        console.log(`Tenho ${this.idade} anos.`);
    }
}
const pessoaPri = new Pessoa3(30);
// console.log(pessoa.idade);               // Erro: 'idade' é privado e não pode ser acessado fora da classe
pessoaPri.mostrarIdade();
class Matematica {
    static calcularCircunferencia(raio) {
        return 2 * this.PI * raio;
    }
}
Matematica.PI = 3.14;
console.log(Matematica.PI); // 3.14 Acessando a propriedade estática
console.log(Matematica.calcularCircunferencia(5)); // 31.400000000000002 Acessando o método estático
