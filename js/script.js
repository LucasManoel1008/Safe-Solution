/* Esse primeiro está vinculado ao botão na mesma região da imagem, ele abre o menu.
    O segundo esta vínculado ao segundo botão, ele fecha o menu.
    
    NÃO ALTERAR NADA NESSES DOIS CÓDIGOS*/
function abrirNav(){
    document.getElementById('menuOculto').style.marginLeft = "0";
    document.getElementById('menuOculto').style.transition = "0.5s";

}

function fecharNav(){
    document.getElementById('menuOculto').style.marginLeft = "-100vh";
}