const somaNumerosPequenos = (num1, num2) =>{
    if (num1 || num2 > 10) {
        return "somente numeros de 1 a 9"
    }else{
        return num1 + num2;
    }
}
    console.log(somaNumerosPequenos(1,1))