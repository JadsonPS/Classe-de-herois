/* 

    Instruções para entrega
    # 3️⃣ Escrevendo as classes de um Jogo

    **O Que deve ser utilizado**

    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    - Funções
    - Classes e Objetos

    ## Objetivo:

    Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

    - nome
    - idade
    - tipo (ex: guerreiro, mago, monge, ninja )

    além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

    - exibir a mensagem: "o {tipo} atacou usando {ataque}")
    - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
    - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

    se mago -> no ataque exibir (usou magia)
    se guerreiro -> no ataque exibir (usou espada)
    se monge -> no ataque exibir (usou artes marciais)
    se ninja -> no ataque exibir (usou shuriken)

    ## Saída

    Ao final deve se exibir uma mensagem:

    - "o {tipo} atacou usando {ataque}"
    ex: mago atacou usando magia
    guerreiro atacou usando espada

*/
const tiposHerois = ["guerreiro", "ninja", "mago", "monge"]

class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(tipo = this.tipo){

        switch(tipo){
            case "guerreiro":
                return "espada"
                break;

            case "mago":
                return "magia"
                break;

            case "monge":
                return "artes marciais"
                break;

            case "ninja":
                return "shuriken"
                break;
        }    
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque()}`)
    }
}



/* Essa parte vai repetir varias vezes a classe só que com um tipo diferente */
for(let cont = 0; cont < tiposHerois.length; cont++){
    let novoHeroi = new heroi("jadson", 20, tiposHerois[cont])
    novoHeroi.atacar()
}
