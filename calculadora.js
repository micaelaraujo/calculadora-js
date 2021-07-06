//Declarando as Telas
var T1 = document.getElementById("T1")
var T2 = document.getElementById("T2")

//Declarando os Operadores
var soma = document.getElementById("soma")
var sub = document.getElementById("sub")
var div = document.getElementById("d")
var mult = document.getElementById("m")
var porcen = document.getElementById("p")

//Declarando os Demais
var igual = document.getElementById("igual")
var vir = document.getElementById("vir")
var clear = document.getElementById("c")
var clearE = document.getElementById("ce")

//Botões Numéricos
document.getElementById("n0").addEventListener("click", function () {digito(0)})
document.getElementById("n1").addEventListener("click", function () {digito(1)})
document.getElementById("n2").addEventListener("click", function () {digito(2)})
document.getElementById("n3").addEventListener("click", function () {digito(3)})
document.getElementById("n4").addEventListener("click", function () {digito(4)})
document.getElementById("n5").addEventListener("click", function () {digito(5)})
document.getElementById("n6").addEventListener("click", function () {digito(6)})
document.getElementById("n7").addEventListener("click", function () {digito(7)})
document.getElementById("n8").addEventListener("click", function () {digito(8)})
document.getElementById("n9").addEventListener("click", function () {digito(9)})

//Variáveis Auxiliares
var n1
var n2
var op
var por
var etapa = 0
var operadorNaTela = false
var resultadoNaTela = false
var isPorcentagem = false
var isDecimalN1 = false
var isDecimalN2 = false
var save03
var save04

//Função para inserir digitos
function digito(num) {
    if (!operadorNaTela) {   
        if (isDecimalN1) {
            T2.innerText = T2.innerText+String(num)
        } else {
            if (T2.innerText != "") {
                T2.innerText = T2.innerText+String(num)
            } else {
                T2.innerText = String(num)

                if (etapa == 0) {
                    etapa++
                }
            }
        } 
    } else {
        save03 = T2.innerText

        if (isDecimalN2) {
            T2.innerText = T2.innerText+String(num)
        } else {
            if (T2.innerText != "") {
                T2.innerText = T2.innerText+String(num)
            } else {
                T2.innerText = String(num)

                if (etapa == 2) {
                    etapa++
                }
            }
        } 
    }
}

//Botões dos Operadores e Porcentagem
soma.addEventListener("click", function () { if (!operadorNaTela) {opera(1)} })
sub.addEventListener("click", function () { if (!operadorNaTela) {opera(2)} })
div.addEventListener("click", function () { if (!operadorNaTela) {opera(3)} })
mult.addEventListener("click", function () { if (!operadorNaTela) {opera(4)} })
porcen.addEventListener("click", function () { if (!isPorcentagem && (op == 1 || op == 2) && etapa == 3) {porcentagem()} })

//Função de inserir o operador
function opera(ope) {
    op = ope

    if (isDecimalN1) {
        n1 = Number(T2.innerText.replace(",","."))
    } else {
        n1 = Number(T2.innerText)   
    }
    
    switch (op) {
        case 1:
            somar()
            break;
        case 2:
            subtracao()
            break;
        case 3:
            divisao()
            break;
        case 4:
            multiplicao()
            break;
        default:
            T1.innerText = ""
            T2.innerText = "ERROR"
            break;
    }
}

//funções dos operadores
function somar () {
    if (T2.innerText != "" && !operadorNaTela) {
        T1.innerText = T2.innerText+" + "
        T2.innerText = ""
        operadorNaTela = true
        
        if (etapa == 1) {
            etapa++
        }
    }
}

function subtracao () {
    if (T2.innerText != "" && !operadorNaTela) {
        T1.innerText = T2.innerText+" - "
        T2.innerText = ""
        operadorNaTela = true
        
        if (etapa == 1) {
            etapa++
        }
    }
}

function divisao () {
    if (T2.innerText != "" && !operadorNaTela) {
        T1.innerText = T2.innerText+" / "
        T2.innerText = ""
        operadorNaTela = true
        
        if (etapa == 1) {
            etapa++
        }
    }
}

function multiplicao () {
    if (T2.innerText != "" && !operadorNaTela) {
        T1.innerText = T2.innerText+" x "
        T2.innerText = ""
        operadorNaTela = true
        
        if (etapa == 1) {
            etapa++
        }
    }
}

function porcentagem() {
    let N2
    isPorcentagem = true

    if (Number.isInteger(Number(T2.innerText))) {
        N2 = Number(T2.innerText) 
    } else {
        N2 = Number((T2.innerText).replace(",","."))
    }
    T1.innerText = T1.innerText+" "+T2.innerText+"%"
    por = (n1*N2)/100
    if (Number.isInteger(Number(T2.innerText))) {
        T2.innerText = String(por) 
    } else {
        T2.innerText = String(por.toFixed(2)).replace(".",",")
    }
}

//Botões Diferenciados
igual.addEventListener("click", function () { if (!resultadoNaTela && etapa == 3) {resultado()} })
vir.addEventListener("click", virgula)
clear.addEventListener("click", limpar)
clearE.addEventListener("click", limparEntrada)

//Função para mostrar o resultado
function resultado () {
    let res
    
    etapa++
    resultadoNaTela = true

    if (isDecimalN2) {
        n2 = Number(T2.innerText.replace(",","."))
    } else {
        n2 = Number(T2.innerText)
    }

    if (T1.innerText != "") {
        if (isPorcentagem) {
            switch (op) {
                case 1:
                    res = n1 + por
                    break;
                case 2:
                    res = n1 - por
                    break;
                case 3:
                    if (n2 == 0) {
                        T1.innerText = ""
                        T2.innerText = "ERROR2"
                    } else {
                        res = n1 / n2 
                    }
                    break;
                case 4:
                    res = n1 * n2
                    break;
                default:
                    T1.innerText = "ERROR: OPERAÇÃO NÃO"
                    T2.innerText = "REALIZADO COM SUCESSO"
                    break;
            }
        } else {
            switch (op) {
                case 1:
                    res = n1 + n2
                    break;
                case 2:
                    res = n1 - n2
                    break;
                case 3:
                    if (n2 == 0) {
                        T1.innerText = "ERROR: NÃO É POSSÍVEL"
                        T2.innerText = "DIVIDIR POR 0"
                    } else {
                        res = n1 / n2 
                    }
                    break;
                case 4:
                    res = n1 * n2
                    break;
                default:
                    T1.innerText = "ERROR: OPERAÇÃO NÃO"
                    T2.innerText = "REALIZADO COM SUCESSO"
                    break;       
            }
        }
    }
    if (n2 == 0 && op == 3) {
        
    }
    else {
        if (isPorcentagem) {
            save04 = T1.innerText
            if (Number.isInteger(res)) {
                T1.innerText = T1.innerText+" "+" = "
                T2.innerText = String(res)
            } else {
                T1.innerText = T1.innerText+" "+" = "
                T2.innerText = String(res.toFixed(2)).replace(".",",")
            }
        } else if (Number.isInteger(res)) {
            save04 = T1.innerText
            T1.innerText = T1.innerText+" "+T2.innerText+" = "
            T2.innerText = String(res)
        } else {
            save04 = T1.innerText
            T1.innerText = T1.innerText+" "+T2.innerText+" = "
            T2.innerText = String(res.toFixed(2)).replace(".",",")
        }
    }
}

//Função para inserir a virgula
function virgula() {
    if (etapa == 1) {
        isDecimalN1 = true
        T2.innerText = T2.innerText+","
    } else if (etapa == 3) {
        isDecimalN2 = true
        T2.innerText = T2.innerText+","
    }
}

//Função para apagar a ultima entrada
function limparEntrada() {
    switch (etapa) {
        case 1:
            if (!operadorNaTela) {    
                T2.innerText = ""
                etapa--
                n1 = 0

                if (isDecimalN1) {
                    isDecimalN1 = false
                }
            }
            break;

        case 2:
            if (isDecimalN1) {
                T2.innerText = String(n1.toFixed(2)).replace(".",",")
                T1.innerText = ""
            } else {
                T2.innerText = String(n1)
                T1.innerText = ""
            }
            
            etapa--
            operadorNaTela = false
            break;
        
        case 3:
            if (operadorNaTela) {
                if (isDecimalN2) {
                    isDecimalN2 = false
                    T2.innerText = ""
                } else {
                    T2.innerText = ""
                }
                etapa--
                n2 = 0
                isPorcentagem = false
            }
            break;

        case 4:
            if (resultadoNaTela) {
                if (isDecimalN2) {
                    T2.innerText = String(n2.toFixed(2)).replace(".",",")
                    T1.innerText = save04
                } else {
                    T2.innerText = String(n2)
                    T1.innerText = save04
                }
                etapa--
                resultadoNaTela = false
            }
            break;
    
        default:
            T1.innerText = ""
            T2.innerText = "ERROR4"
            break;
    }
}

//Função para limpar o display
function limpar() {
    etapa = 0
    operadorNaTela = false
    resultadoNaTela = false
    isDecimalN1 = false
    isDecimalN2 = false
    isPorcentagem = false
    n1 = 0
    n2 = 0

    T1.innerText = ""
    T2.innerText = ""
}