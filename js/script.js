
/* Resolução Questão 01 */

function tabuada() {
    let numeroTabuada = document.getElementById("numeroTabuada").value;
    let tabuada = '';
    if(numeroTabuada == ''){
        resultado01.innerHTML = `Informe um valor válido.`;
        return false;
    }

    for (let count = 1; count <= 10; count++) {
        tabuada += numeroTabuada + " x " + count + " = " + numeroTabuada * count + "<br />";
        resultado01.innerHTML = `Resultado: <br>${tabuada}`;

    }

}

/* Resolução Questão 02 */

function mostraValor() {
    let valor01 = parseInt(document.getElementById('valor01').value);
    let valor02 = parseInt(document.getElementById('valor02').value);
    let valores = '';

    for (let count = valor01; count <= valor02; count++) {
        valores += count + ", ";
        resultado02.innerHTML = `Resultado: Os número entre ${valor01} e ${valor02} são (${valores})`;
    }


}

/* Resolução Questão 03 */
/* Resolução Questão 04 */

function megasena() {
    let sorteados = '';

    for (let count = 0; count < 6; count++) {
        sorteados += Math.floor(Math.random() * 60) + 1 + ", ";
    }
   
    resultado04.innerHTML = `Números Sorteados: ${sorteados}`;
}
/* Resolução Questão 05 */