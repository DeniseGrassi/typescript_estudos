"use strict";
const alunos = [
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
];
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
});
// Ou pode-se add assim também na array :
const novoAluno = {
    nome: "Lucas", /* n precisa ter a propriedade cursos pq deixamos ela com uma '?' no tipo ALUNO que criamos */
    idade: 32,
};
alunos.push(novoAluno); /* add o novoAluno para a array*/
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
console.log(alunos); /* exibir toda a array aluno com todas as propriedades */
