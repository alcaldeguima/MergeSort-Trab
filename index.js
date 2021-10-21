
function mergeSort(array){
    if (array.length === 1){
        return array;
    }

    const middle = Math.floor(array.length / 2);

    const esquerda = array.slice(0, middle);
    const direita = array.slice(middle);

    return merge(
        mergeSort(esquerda),
        mergeSort(direita)
    )
}

function merge(esquerda, direita){
    const resultado = [];

    let indexEsquerda = 0;
    let indexDireita    = 0;
    //posição atual
    while (indexEsquerda < esquerda.length && indexDireita < direita.length){

        if (esquerda[indexEsquerda] < direita[indexDireita   ]){
           resultado.push(esquerda[indexEsquerda]);
           indexEsquerda++;            
        }else {
            resultado.push(direita[indexDireita   ]);
            indexDireita  ++;
        }
    }

    return resultado.concat(esquerda.slice(indexEsquerda)).concat(direita.slice(indexDireita  ));
}

console.log(mergeSort([2, 5, 1, 3, 7, 4, 2, 3, 9, 8, 6, 3]));