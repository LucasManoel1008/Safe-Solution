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

function FAQ(){
    var menu = document.getElementById('FAQ-Container');
    let icon = document.getElementById('menu-icon-FAQ');
    if (menu.style.display === 'none'){
    menu.style.display ='block';
    icon.style.rotate = '0deg'
    icon.style.transition = '0.4s'
    }
    else{
        menu.style.display = 'none';
        icon.style.rotate = '180deg'
        icon.style.transition = '0.4s'
    }
}
function FAQ2(){
    let menu = document.getElementById('FAQ-Container-2');
    let arrow = document.getElementById('Arrow');

    if (menu.style.display === 'none'){
        menu.style.display ='block';
        Arrow.style.rotate = '0deg'
        Arrow.style.transition = '0.4s'
        }
        else{
            menu.style.display = 'none';
            Arrow.style.rotate = '180deg'
            Arrow.style.transition = '0.4s'
        }
}