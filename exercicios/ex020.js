let num = [5, 8, 3, 7]
num[4] = 1 // acrescenta o colchete pra posição desejada
num.push(6) // acrescenta na ultima posição
num.length // quantos elemntos
num.sort() // colocar em ordem crescente
console.log(`Nosso vetor é o ${num}`)
num.indexOf(5) // verifica em qual posicação está

//tradicional
for (let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}

// simplificado
for(let pos in num) {
    console.log(num[pos])
}