let sal_final, porc, tela;
let sal_inicial = parseInt(prompt('Digite seu salario atual: '))

if(sal_inicial<=280){
    sal_final = `Seu salario atual agora é de  ${sal_inicial+sal_inicial*0.20} reais`
    porc = '+ 20% de reajuste'
    tela = `Seu antigo salario era de ${sal_inicial} reais`
    document.write(tela)
    document.write("<br>")
    document.write(porc) 
    document.write("<br>")
    document.write(sal_final)
}if(sal_inicial>280 && sal_inicial<=700){
    sal_final = `Seu salario atual agora é:  ${sal_inicial+sal_inicial*0.15} reais`
    porc = '+ 15% de reajuste'
    tela = `Seu antigo salario era de ${sal_inicial} reais`
    document.write(tela)
    document.write("<br>")
    document.write(porc) 
    document.write("<br>")
    document.write(sal_final)
}if(sal_inicial>700 && sal_inicial<=1500){
    sal_final = `Seu salario atual agora é:  ${sal_inicial+sal_inicial*0.10} reais`
    porc = '+ 10% de reajuste'
    tela = `Seu antigo salario era de ${sal_inicial} reais`
    document.write(tela)
    document.write("<br>")
    document.write(porc) 
    document.write("<br>")
    document.write(sal_final)
}if(sal_inicial>1500){
    sal_final = `Seu salario atual agora é:  ${sal_inicial+sal_inicial*0.05} reias`
    porc = '+ 5% de reajuste'
    tela = `Seu antigo salario era de ${sal_inicial} reais`
    document.write(tela)
    document.write("<br>")
    document.write(porc) 
    document.write("<br>")
    document.write(sal_final)
}