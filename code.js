var keys = ['a','b','c','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z']

var letters = keys.length
var button = document.createElement('button')



for (var i = 0; i < keys.length; i ++){
    var divb =document.createElement('div')
    document.getElementById('keyboard').appendChild(divb)
    divb.setAttribute("id",i)
    /// CRIAR DIV PRA CADA BOTÃO
    var button = document.createElement('button')
    document.getElementById(i).appendChild(button)
    button.setAttribute('value',keys[i])
    /// COLOCAR O VALOR DA LETRA DENTRO DE CADA BOTÃO
    button.innerHTML = keys[i]
    /// APARECER NA PAGINA A LETRA PRA SER CLICADA

    divb.setAttribute('class', 'col')
    button.setAttribute('class', 'btn btn-outline-primary')
    button.setAttribute('type', 'button')
    button.style.width = '45px'
}