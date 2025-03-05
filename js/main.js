//Funcion que realiza una suma

function suma () {
    
    let N1 = 0
    let N2 = 0
    let suma = 0
    
    alert('Este programa realiza una suma entre dos valores ingresados por el usuario')

    N1 = parseInt(prompt('Ingrese el primer valor a sumar'))
    N2 = parseInt(prompt('Ingrese el segundo valor a sumar'))

    suma = N1 + N2

    alert(' El resultado de la suma es ' + suma)
}

function OperacionesBásicas(){

    let N1 = 0
    let N2 = 0
    let OperacionesBásicas = 0

    alert('Este programa realiza una OperacionBásica')

    N1 = parseInt(prompt('ingrese el primer valor a OperacionBásica'))
    N2 = parseInt(prompt('Ingrese el segundo valor a OperacionesBásicas'))

    Suma = N1 + N2 
    Resta = N1 - N2
    Multiplicación = N1 * N2
    División = N1 / N2

    alert('El resultado de la suma es' + Suma) 
    alert('El resultado de la resta es' + Resta) 
    alert('El resultado de la multiplicación es' + Multiplicación) 
    alert('El resultado de la división es' + División) 
}

function CuadradodeunNúmero(){

    let N1 = 0
    let CuadradodeunNúmero = 0

    alert('Este programa realiza un CuadradodeunNúmero')

    N1 = parseInt(prompt('ingrese el primer valor a Cuadrado'))

    Multiplicación = N1 * N1

    alert('El resulta del cuadrado de un numero es' + Multiplicación)
}

function ConversióndeUnidades(){

    let M = 0 
    let CM = 0
    let P = 0 

    alert('Este programa realiza una ConversiódeUnidades')

    M = parseInt(prompt('ingrese el primer valor a la conversión'))
    
    CM = M * 100
    P = M * 39.37

    alert(' el resultado de Centimetros es ' + CM + ' el resultado de Pulgadas es ' + P)

}

function ÁreadeunTriangulo(){

    let B = 0
    let H = 0
    let Area = 0

    alert('Este programa realiza un AreadeTriangulo')

    B = parseInt(prompt('Ingrese el primer valor'))
    H = parseInt(prompt('Ingrese el segundo valor'))

    Area = (B * H) / 2

    alert('El resultado del AreadeunTriangulo es' + Area)
}

function InversionCapital(){

    let AN = 0
    let CP = 0
    let GA = 0
    let GT = 0

    alert('Este programa realiza una InversionCapital')

    CP = parseInt(prompt('Ingrese el monto de dinero'))

    GA = (CP * 0.117) * 12
    
    alert('Su ganancia anual es' + GA)

    AN = parseInt(prompt('Ingrese el numero de años de inversion'))

    GT = GA * AN

    alert('Su ganancia total en loos años escritos es' + GT) 
}

function NumeroMayor(){

    let N1 = 0 
    let N2 = 0 

    alert('Este programa realiza un NumeroMayor')

    N1 = parseInt(prompt('Ingrese el primer valor'))
    N2 = parseInt(prompt('Ingrese el segundo valor'))

    if(N1 == N2){
        alert('Los numeros son iguales A ' + N1)
    }
    else if(N1 > N2){
        alert(N1 + 'Es mayor que' + N2)
    }
    else {
        alert(N2 + 'Es mayor que' + N1)
    }
}

function NumeroMenor(){
    
    let N1 = 0
    let N2 = 0
    let N3 = 0

    alert('Este programa realiza de NumeroMenor')

    N1 = parseInt(prompt('Ingrese el primer valor'))
    N2 = parseInt(prompt('Ingrese el segundo valor'))
    N3 = parseInt(prompt('Ingrese el tercer valor'))

    if(N1 == N2 && N2 == N3){
        alert('Los numeros son iguales' + N1)
    }

    if(N1 < N2 & N1 < N3){
        alert('El numero menor es' + N1)
    }

    else if(N2 < N1 & N2 < N3){
        alert('El numero menor es'+ N2)
    }

    else { 
        alert('El numero menor es' + N3)
    }

    
   
}

function ParoImpar(){

    let N1 = 0 
    
    alert('Este programa realiza ParoImpar')

    N1 =parseInt(prompt('Ingrese el primer valor'))

    if(N1 % 2 === 0){
        alert('El numero' + 'es par')
    }
    else{
        alert('El numero' + 'es impar')
    }
}



function PromedioEstudiantes(){
    let Materia = ''
    let estudiante =''
    let Nnotas = 0
    let Calificacion = 0
    let SumaNotas = 0
    let Promedio = 0
    let Iteracion = 0

    Materia =prompt('Ingrese la materia que imparte')
    estudiante =prompt('Ingrese  el nombre del estudiante')
    Nnotas =parseFloat(prompt('Ingrese el numero de notas o calificaciones'))

    while(Iteracion<Nnotas){

        Calificacion=parseFloat(prompt('Ingrese la calificacion'))
        SumaNotas = SumaNotas + Calificacion
        Iteracion = Iteracion + 1
    }

    Promedio = SumaNotas / Nnotas
    
    if(Promedio>2.9){
        alert('El estudiante' + estudiante + 'aprobo la materia de' + Materia + 'con un promedio de' + Promedio)
    }
    else(
        alert('El estudiante' + estudiante + 'no aprobo la materiade' + Materia + 'con un promedio de' + Promedio)
    )
}

function Fruteria(){

    let K = 0
    let P = 0

    alert('Este programa determina cuanto debe pagar un cliente por x kilos de manzanas segun la tabla de descuentos')
    K =parseInt(prompt('Ingrese el valor en kilos'))
    P = K * 4500
    
    if(K <= 2){
    alert('El cliente no tiene descuento y pagara' + P)
    }

    if(K <= 5){
        alert('El cliente tiene un descuento del 10% y pagara' + (K * 4500 - (K * 4500 * 0.15)))
    }

   else if (k = 10){
    alert("el cliente tiene un descunto del 10% y pagara" + (k * 4500 -(k * 4500 * 0.15)))
   }

    else {
    alert("El cliente tiene un descuento del 20% y pagara" +(k * 4500-(k * 4500 * 0.2)))
    }
}


function HorasExtras(){

    let SS = 0
    let H = 0

    alert('Este programa realiza la operacion de un salario semanal con o sin Horas Extras')

    H = parseInt(prompt('Ingrese las horas trabajadas'))

    if( H <= 40 ){
        SS = H * 10000
        alert('El salario semanal sin horas extras es' + SS)
    }

    else {
        SS = (40 * 10000) + ((H - 40) * 20000)
        alert('El salario semanal con horas extras es' + SS)
    }
     
}

function SumaDiferenteaCero(){
   let suma = 0
   let n = 0 
   alert("programa que muetra la suma de numeros diferentes a cero")

   n = parseInt(prompt("Ingrese un numero para sumar (0 para terminar): "))

   while (n !== 0) {
        suma  = suma + n 
        n = parseInt(prompt("Ingrese un numero para sumar (0 para terminar): "))
    }
   alert("La suma de los numeros ingresados es: /n " + suma);
}

function Imprimirde1a10(){
    let n = 1
    let resultado = ""
    alert("Programa que muestra numeros de 1 a 10")
   
    while (n <= 10){
        resultado = resultado + n
        if (n < 10){
            resultado = resultado +", "
        }
        n = n + 1
    }
    alert("los numeros de 1 a 10 son: "+ resultado)
}


function Imprimirde100a0(){
    let n = 100
    let resultado = ""
    alert ("programa que imprime numeros de 100 a 0 de 10 en 10")

    while (n > 0){
        resultado = resultado + n
        if (n > 0){
            resultado = resultado + ", "
        }
        n = n - 10
    }
    alert("los numeros de 100 a 0 de 10 en 10 quedaran asi: " + resultado)
 }
    
 function TablaDeMultiplicar(){
    let n = 1
    let num = 0
    alert("Programa que muestra la multiplicacion de 1 a 10 de un numero ingresado por el ususario")

    num = parseInt(prompt("INGRESE EL NUMERO A MULTIPLICAR"))

    while (num <= 10){
        r = num * n 
        if (n <= 10)
            alert("El resultado es:"+num+"x" +n+" = "+ r)
        n = n + 1
    }
 }

   function CajeroElectronico(){

    let saldo = 0
    let ValorRetiro = 0

    saldo = parseInt(prompt("ingrese el valor inicial de su saldo"))
    while(saldo > 0){
        ValorRetiro = parseInt(('ingrese el valor que desea retirar, tu saldo es' + saldo))
    }
    if (ValorRetiro > Saldo){
        alert("saldo suficiente, tu saldo es:" + Saldo)
    }
    else {
        Saldo = Saldo - ValorRetiro
    }
    alert("sin fondos, ya retiro todo su dinero")
 }

   function NumerosHasta1000() {
    let n = 100
    let resultado = ""

    for (n = 100; n <= 1000; n += 100){
        resultado = resultado + n
        if (n < 1000){
            resultado = resultado + ", "
        }
    }
    alert("Los numeros de 100 en 100 hasta 1000 son: / n"+ resultado)
    }