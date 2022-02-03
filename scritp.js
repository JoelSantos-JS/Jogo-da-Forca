let tentivas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavras001= {
        nome : "IRLANDA",
        categoria : "LUGARES"
    },
    palavras002={
        nome : "EQUADOR",
        categoria : "LUGARES"
    },
    palavras003={
        nome : "BRASIL",
        categoria : "LUGARES"
    },
    palavras004={
        nome : "COLOMBIA",
        categoria : "LUGARES"
    },
    palavras005={
        nome : "PERU",
        categoria : "LUGARES"
    },
    palavras006={
        nome : "ARGENTINA",
        categoria : "LUGARES"
    },

    palavras007={
        nome : "AUSTRALIA",
        categoria : "LUGARES"
    },

    palavras008={
        nome : "CUBA",
        categoria : "LUGARES"
    },

    palavras009={
        nome : "RUSSIA",
        categoria : "LUGARES"
    },
    palavras010={
        nome : "PIZZA",
        categoria : "COMIDAS"
    },
    palavras011={
        nome : "LASANHA",
        categoria : "COMIDAS"
    },
    palavras012={
        nome : "TACOS",
        categoria : "COMIDAS"
    },
    palavras013={
        nome : "SUSHI",
        categoria : "COMIDAS"
    },
    palavras014={
        nome : "ARROZ",
        categoria : "COMIDAS"
    },
]


criarPalavraSecreta()
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)


    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}


montarPalavranaTela();

function montarPalavranaTela() {
    const categoria = document.getElementById('categoria')
    categoria.innerHTML = palavraSecretaCategoria


    const palavratela = document.getElementById('palavra-secreta')
    palavratela.innerHTML = ""

    for(i =0; i<palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavratela.innerHTML = palavratela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }else {
            palavratela.innerHTML = palavratela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true
    if (tentivas > 0 ){
        mudarStyleLetra("tecla-"  + letra)
        comparaLista(letra)
        montarPalavranaTela()
    }
    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585"
    document.getElementById(tecla).style.color = "#fff"
}


function comparaLista(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0){
        tentivas--
        carregaImagemForca()
        if (tentivas == 0){
            abreModal("OPS!", "Nao foi dessa vez ... A palavra Secreta era <br>" + palavraSecretaSorteada)
        }
        

    }else {
        for(i=0;  i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i =0; i <palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }

    if (vitoria == true){
        abreModal("PARABENS!", "Voce Venceu  <br>" )

        tentivas = 0;
    }
}

function carregaImagemForca(){
    switch(tentivas){
        case 5: document.getElementById("imagem").style.background = "url('./img/forca01.png')"
        break
        case 4: document.getElementById("imagem").style.background = "url('./img/forca02.png')"
        break
        case 3: document.getElementById("imagem").style.background = "url('./img/forca03.png')"
        break
        case 2: document.getElementById("imagem").style.background = "url('./img/forca04.png')"
        break
        case 1: document.getElementById("imagem").style.background = "url('./img/forca05.png')"
        break
   
        case 0: document.getElementById("imagem").style.background = "url('./img/forca06.png')"
        break
        
        default: document.getElementById("imagem").style.background = "url('./img/forca.png')"
        break
   
      }
}


function abreModal(titulo, menssagem) {
    let modalTitulo = document.getElementById("exampleModalLabel")
    modalTitulo.innerText = titulo;

    let modalbody = document.getElementById("modalbody")
    modalbody.innerHTML = menssagem;

    $("#myModal1").modal({
        show: true
    })
}

let botaoReniciar = document.getElementById('btnReiniciar')
botaoReniciar.addEventListener('click', () => {
    location.reload()
})