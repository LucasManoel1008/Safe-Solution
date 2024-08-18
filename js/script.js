window.onscroll = function() {botaoScroll()};

    /*NÃO ALTERAR NADA NESSES DOIS CÓDIGOS*/

function abrirNav(){
    document.getElementById('menuOculto').style.marginLeft = "0";
    document.getElementById('menuOculto').style.transition = "0.5s";

}

function fecharNav(){
    document.getElementById('menuOculto').style.marginLeft = "-100vh";
}

function botaoScroll(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("botaoScroll").style.display = "block";
        
      } else {
        document.getElementById("botaoScroll").style.display = "none";
        
      }
    }

function voltartopo(){
    var check = 'false'
    if(check){
    window.scrollTo({top:0, behavior: 'smooth'})
    check = 'true'
    }
    if(check = false){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
function ajustarTexto(){
    document.getElementById('mensagem').style.height ='auto';
    document.getElementById('mensagem').style.height =mensagem.scrollHeight + 'px';
}

    
