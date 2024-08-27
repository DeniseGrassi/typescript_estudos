
//USANDO PUBLIC AGORA 
class Pessoa2 {
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

const pessoa = new Pessoa2('João');    		//INSTANCIA

console.log(pessoa.nome); 			// joao -  Acessível fora da classe
pessoa.cumprimentar();     			// Olá, meu nome é João. - Acessível fora da classe


//USANDO PRIVATE AGORA 
class Pessoa3 {
    private idade: number;

    constructor(idade: number) {
        this.idade = idade;
    }

    public mostrarIdade() {
        console.log(`Tenho ${this.idade} anos.`);
    }
}

const pessoaPri = new Pessoa3(30);

// console.log(pessoa.idade);               // Erro: 'idade' é privado e não pode ser acessado fora da classe
pessoaPri.mostrarIdade(); 


class Matematica {
    static PI: number = 3.14;

    static calcularCircunferencia(raio: number): number {
        return 2 * this.PI * raio;
    }
}

console.log(Matematica.PI); 			                              // 3.14 Acessando a propriedade estática
console.log(Matematica.calcularCircunferencia(5));                       // 31.400000000000002 Acessando o método estático
