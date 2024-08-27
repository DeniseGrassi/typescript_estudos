"use strict";
//usamos as mesmas palavras reservadas do js: let e const
let estaChovendo = false;
estaChovendo = true; /* alterando a variavel para true, comecou a chover */
let idade = 33;
let altura = 1.58;
//percebe-se que no TS nao ha diferenca entre o numero do tipo inteiro ou fracionado
// Arrays: Não podemos ter um array com vários tipos, como acontecia no js.
const nacionalidade = 'brasileira';
//um array de string! apenas strings!
const colegas = ['lucas', 'pietro', 'beatriz'];
//outra forma de tipar as arrays para strings:
const tecnologia = ['html', 'css', 'js'];
//um array de numeros apenas de leitura:
const notas = [5, 6, 7, 8];
colegas.push(); //usamos o push() para add um ou mais elementos a array.
tecnologia.push();
// notas.push();  //no array apenas de leitura n conseguimos atribuir o push. MAS conseguimos atribuir os metodos modernos do ES6+
//As TUPLAS permitem usar varios tipos na array
const lista = ['denise', true, 33];
// agora faremos com o tipo UNION TYPES: uniao de tipos! com o simbolo | add um novo tipo, no caso o string
let idadeDaAna = '25 anos';
//o tipo any (qq) aceita qualquer coisa, mas usar com cautela, pois foge do proposito do TS.
let dadosDaApi;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'palavras';
dadosDaApi = 10;
