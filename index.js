const express = require("express")
const {somar} = require("./calculadora.js")
const app = express()
const porta = 3000;

app.get("/rota", (requisicao, resposta)=>{
    const respostaDaSoma=somar(2,0)
    resposta.send("resposta do calculo é: " + respostaDaSoma)
   })   
app.listen(porta, ()=> {
    console.log("opa, nosso servidor levantou " + porta)

})

