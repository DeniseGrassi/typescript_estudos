namespace casting {	    /* necessario para o programa n usar a let idade de outra aba dessa pasta */

    let idade: any = 25;    /* nesse caso, 25 pode ser de qq tipo (any) */
    (idade as number).toFixed();  /* usamos o AS para dizer: trate a idade como (as) do tipo número */
    (idade as string).length;
    // (idade as string[]).forEach(x => {   /* convertendo idade para uma array, mas nao funciona qnd roda*/
    //     console.log(x);
    // })
    let nome: string = 35 as unknown as string;  /* aq estamos dizendo que 35 esta sendo convertido em um tipo desconhecido e dps convertido em uma string*/
}