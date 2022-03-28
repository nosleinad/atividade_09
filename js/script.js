
/* Resolução Questão 01 */

function tabuada() {
    let numeroTabuada = document.getElementById("numeroTabuada").value;
    let tabuada = '';

    if (numeroTabuada == '') {
        resultado = `Informe um valor válido.`;
        document.getElementById('resultado01').innerHTML = resultado

        return false;
    }

    for (let count = 1; count <= 10; count++) {
        tabuada += numeroTabuada + " x " + count + " = " + numeroTabuada * count + "<br />";

    }

    resultado = `Resultado: <br>${tabuada}`;
    document.getElementById('resultado01').innerHTML = resultado
}

/* Resolução Questão 02 */

function mostraValor() {
    let valor01 = parseInt(document.getElementById('valor01').value);
    let valor02 = parseInt(document.getElementById('valor02').value);
    let valores = '';

    for (let count = valor01; count <= valor02; count++) {
        valores += count + ", ";

    }
    valores = `Resultado: Os número entre ${valor01} e ${valor02} são: (${valores})`;
    document.getElementById('resultado02').innerHTML = valores;

}

/* Resolução Questão 03 */

let lsItem = [];

function addItem() {

    let item = document.getElementById('item').value;

    if (item == '') {

        let resultado = `Resultado: Informe um Item para cadastrar.`;

        document.getElementById('resultado03').innerHTML = resultado;
        return false;
    }
    lsItem.push(item);
    resultado = `Resultado: Adicionado com Sucesso!!`
    document.getElementById('resultado03').innerHTML = resultado;
}

function showItens() {
    let resultado = `Resultado: A lista de itens é: [${lsItem}]`;
    document.getElementById("resultado03").innerHTML = resultado;
}

function clearItens() {
    lsItem = [];
    showItens();
}


/* Resolução Questão 04 */

function megasena() {
    let sorteados = 0;
    let i = 1;
    let jogo = [];


    while (i <= 6) {

        sorteados = Math.trunc((Math.random() * 59) + 1);
        jogo.push(sorteados);
        i++;

    }

    document.getElementById('resultado04').innerHTML = `Números Sorteados: ${jogo}`;
}

/* Resolução Questão 05 */
let lsHomem = [];
let lsMulher = [];
let resultado = '';

function addPessoa() {
    let nome = document.getElementById('nomePessoa').value;
    let sexo = document.getElementById('sexoPessoa').value;


    if (nome == '') {

        resultado = `Resultado: Informe um nome para cadastrar.`

        document.getElementById('resultado05').innerHTML = resultado;
        return false;


    }

    /*  EXEMPLO COM IF ELSE */
    /*   if (sexo == 'M') {
          lsHomem.push(nome);
      }
      else if(sexo == 'F'){
          lsMulher.push(nome);
      } else {
  
      } */

    switch (sexo) {
        case 'M':
            lsHomem[lsHomem.length] = nome;
            break;
        case 'F':
            lsMulher[lsMulher.length] = nome;
            break;
        default:
            break;
    }

    resultado = `Resultado: Adicionado com Sucesso!!`

    document.getElementById('resultado05').innerHTML = resultado;


}

function showPessoa() {
    resultado = `Resultado: <br />Lista de homens => ${lsHomem} <br />Lista de mulheres => ${lsMulher} `

    document.getElementById('resultado05').innerHTML = resultado;

}

function clearPessoa() {
    lsHomem = [];
    lsMulher = [];

    resultado = `Resultado: Lista  apagada com sucesso!!`
    document.getElementById('resultado05').innerHTML = resultado;

}


/* Desafio JoKenPO */

let qtv = 0;
let qtd = 0;
let qte = 0;

function jogar(j) {
    let opcoes = ['✊🏽', '🖐🏽', '✌🏽']
    let pc = Math.trunc(Math.random() * 3);
    let resultado = "";

    pc = opcoes[pc];
    document.getElementById("adversario").innerHTML = `${j} X ${pc}`;

    if (j == pc) {
        resultado = "Resultado: Empate";
        qte++
    } else
        if ((j == '✊🏽' && pc == '✌🏽')
            || (j == '🖐🏽' && pc == '✊🏽')
            || (j == '✌🏽' && pc == '🖐🏽')) {
            resultado = "Resultado: Vitória";
            qtv++

        } else {
            resultado = "Resultado: Derota";
            qtd++
        }
    document.getElementById('resultado-desafio').innerHTML = resultado;

    document.getElementById('placar').innerHTML = `Vitorias (${qtv}) - Empate (${qte}) - Derotas (${qtd})`;

}
