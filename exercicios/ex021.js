function parimpar(n) {
    if (n%2==0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimpar(10)
console.log(res)


function soma (n1,n2=0) {
    return n1 + n2
}

console.log(soma(2,5))

function fatorial(n) {
    let fat = 1
    for (let c= n; c > 1; c--) {
        fat*= c
    }
}