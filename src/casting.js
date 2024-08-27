"use strict";
var casting;
(function (casting) {
    let idade = 25; /* nesse caso, 25 pode ser de qq tipo (any) */
    idade.toFixed(); /* usamos o AS para dizer: trate a idade como (as) do tipo número */
    idade.length;
    // (idade as string[]).forEach(x => {   /* convertendo idade para uma array, mas nao funciona qnd roda*/
    //     console.log(x);
    // })
    let nome = 35; /* aq estamos dizendo que 35 esta sendo convertido em um tipo desconhecido e dps convertido em uma string*/
})(casting || (casting = {}));
