
class Pessoa {        
    nome: string;   //na class construtora precisamos declarar a prop antes!!!
    renda?: number; // ? Define a variável como opcional;

    constructor(nome: string, renda?: number) {   //sempre vir primeiro a obrigatoria, dps a opcional
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}


// usando os modificadores de acesso: private, public, protected, static. 
class ContaBancaria {
    protected saldo: number = 0;  // Protected - Só pode ser acessado onde foi criado e pelas herdeiras;
    public numeroConta: number; // Public - Acessível em todas as instâncias e á padrao, nao precisa por! 
    
    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() {   // Static - Pertence somente à classe ContaBancaria , logo não pode ser acessado por fora; 
        return 125;
    }
    
    private getSaldo() {        // Private - Somente acessível dentro da classe em que foi criada, nem as herdeiras acessesam  (mais restritivo);
        return this.saldo;      //get para acessar o saldo
    }

    depositar(valor: number) {   /*era setSaldo. set para modificar o saldo */
        this.saldo += valor;  /* += p manter o valor atual e add o valor */
    }
}

//variacao da conta bancaria, uma herdeira dela.
class ContaBancariaPessoaFisica extends ContaBancaria {  // ContaBancariaPessoaFisica é herdeira da ContaBancaria
    depositar(valor: number): void {  //void é vazio !
        this.saldo = valor * 2;   /* acessou SALDO pq o campo protegido permite q as herdeiras de acessem */
    }
}

//instancia da conta bancaria
const contaDoPedro = new ContaBancariaPessoaFisica(123456)
// contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();