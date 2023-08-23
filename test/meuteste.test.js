const{somar} = require("../calculadora")
const{subtrair} = require("../calculadora")
const{divisao} = require("../calculadora")
const{multiplicacao} = require("../calculadora")
const{somarSubtrair} = require("../calculadora")

describe("Iremos testar os calculos do nosso sistema", ()=>{
    it("vai realizar a soma de dois numero", ()=>{
        expect(somar(5,5)).toBe(10)
    })
    it("vai realizar uma subtração de dois numero", ()=>{
        expect(subtrair(10,5)).toBe(5)
    })
    it("vai realizar uma divisao de dois numero", ()=>{
        expect(divisao(10,2)).toBe(5)
    })
    it("vai realizar uma multiplicao de dois numero",()=>{
        expect(multiplicacao(10,2)).toBe(20)
    })
    it("vai realizar soma de dois numero e subtrair o ultimo",()=>{
        expect(somarSubtrair(10,2,10)).toBe(2)
    })
})