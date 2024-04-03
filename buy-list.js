//LISTA DE COMPRAS, FUNCIONANDO BEM COM LISTAS E LOOPS

console.log('Lista de compras')

//importando inputs da biblioteca readline-sync através do NPM
var dados = require('readline-sync');
var perg = require('readline-sync')

//lista
var lista = []

//loop
while (lista){
    var add_itens = dados.question(console.log('Digite o item que deseja colocar em sua lista:\n'));

    //variavel dicionario que vai armazenar os itens da varivavel add_itens
    itens = {add_itens}

    var pergunta = perg.question(console.log('Deseja adicionar mais algum item em sua lista:\n(s) para sim\n(n)para não\n')).toUpperCase()

    //adicionando os itens do diconarios na lista
    lista.push(add_itens)

    if (pergunta == 'S') 
    continue
        
    
    if (pergunta == 'N')
    break

    else
    console.log('Opção errada tente novamente!')
    continue
    
}

console.log('Sua lista de compras está pronto:\n'+lista)