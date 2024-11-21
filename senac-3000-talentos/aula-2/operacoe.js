function somar(num1, num2){
    const num = num1 + num2
    console.log(num)
}

//somar(4 , 4)

function subtrair(num1, num2){
    const num = num1 - num2
    console.log(num)
}

//subtrair(4, 4)

function mutiplicar(num1, num2){
    const num= num1 * num2 
    console.log(num)
}

//mutiplicar(4,4)

module.exports = {
  somar,
  subtrair,
  mutiplicar,
}

