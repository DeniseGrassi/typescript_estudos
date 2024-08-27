function calculaArea (base: number , altura: number): number {
    return base * altura;
}

//ou como uma arrow function ( => )

const calculaArea2 = (base: number , altura: number): number =>  base * altura;

//qnd estiver trabalhando com o operador REST onde vc n conhece todos os argumentos q a funcao pode receber.
//o operador REST nos devolve um array de valores 


// Void - Indica que o retorno da função é vazio;
// Rest - Podemos utilizar o Rest no TS e explicitar seu tipo para evitar "any";
function somar(...numeros: number[]): void {
    console.log(numeros)
}

// Union Type - Desta forma a função pode retornar uma "String" ou um Número;
function teste(): string | number {
    if (10 > 5) {
        return 'Dez maior que cinco'
    } else {
        return 5
    }
}
const resultadoDeTeste = teste()