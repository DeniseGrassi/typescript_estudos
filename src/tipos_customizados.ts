type aluno = {      /* construindo um tipo ALUNO */
    nome: string;
    cursos?: string[];  /* a ? é para deixar essa propriedade n sendo obrigatorio qnd for add um novo aluno*/
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "Ux/Ui"],
        idade: 27,
    }, 
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    }, 
]

alunos.push({  /* consegue add esse novo objeto a const alunos */
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

// Ou pode-se add assim também na array :

const novoAluno: aluno = {   /* o novo aluno foi valido */
    nome: "Lucas", /* n precisa ter a propriedade cursos pq deixamos ela com uma '?' no tipo ALUNO que criamos */
    idade: 32,
}
alunos.push(novoAluno);  /* add o novoAluno para a array*/

function exibeAluno(aluno: aluno) {  /* um aluno do tipo aluno*/
    console.log(aluno.nome)
}

console.log(alunos);  /* exibir toda a array aluno com todas as propriedades */
