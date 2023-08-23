const somar = (valor1, valor2) => {
    return valor1 + valor2;
}
const subtrair = (valor1, valor2) =>{
    return valor1 - valor2;
}
const divisao = (valor1, valor2) =>{
    if(valor2 == 0){
         throw new Error("nao pode dividir por zero")
    }
    return valor1 / valor2;
}
expect(() => {
    divisao(5,0);
}).toThrow("mensagem do erro");

const multiplicacao = (valor1, valor2)=>{
    return valor1 * valor2;
}
const somarSubtrair = (valor1, valor2, valor3)=>{
    return valor1 + valor2 - valor3;
}


module.exports = {
    somar, divisao, multiplicacao, subtrair, somarSubtrair
}