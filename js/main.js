// Función que realiza una suma
function suma() {
    let N1 = parseInt(prompt("Ingrese el primer valor a sumar:"));
    let N2 = parseInt(prompt("Ingrese el segundo valor a sumar:"));
    let resultado = N1 + N2;
    alert("El resultado de la suma es: " + resultado);
}

// Función que realiza operaciones básicas
function operacionesBasicas() {
    let N1 = parseInt(prompt("Ingrese el primer valor:"));
    let N2 = parseInt(prompt("Ingrese el segundo valor:"));

    let suma = N1 + N2;
    let resta = N1 - N2;
    let multiplicacion = N1 * N2;
    let division = N1 / N2;

    alert(`Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`);
}

// Cuadrado de un número
function cuadradoDeUnNumero() {
    let N1 = parseInt(prompt("Ingrese un número:"));
    let resultado = N1 * N1;
    alert("El cuadrado del número es: " + resultado);
}

// Conversión de unidades
function conversionDeUnidades() {
    let metros = parseFloat(prompt("Ingrese los metros a convertir:"));
    let cm = metros * 100;
    let pulgadas = metros * 39.37;
    alert(`Centímetros: ${cm}\nPulgadas: ${pulgadas}`);
}

// Área de un triángulo
function areaDeUnTriangulo() {
    let base = parseFloat(prompt("Ingrese la base:"));
    let altura = parseFloat(prompt("Ingrese la altura:"));
    let area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
}

// Inversión de capital
function inversionCapital() {
    let capital = parseFloat(prompt("Ingrese el monto de dinero:"));
    let gananciaAnual = capital * 0.117 * 12;
    alert("Su ganancia anual es: " + gananciaAnual);

    let anios = parseInt(prompt("Ingrese el número de años de inversión:"));
    let gananciaTotal = gananciaAnual * anios;
    alert("Su ganancia total es: " + gananciaTotal);
}

// Número mayor
function numeroMayor() {
    let N1 = parseInt(prompt("Ingrese el primer número:"));
    let N2 = parseInt(prompt("Ingrese el segundo número:"));

    if (N1 === N2) {
        alert("Los números son iguales: " + N1);
    } else if (N1 > N2) {
        alert(N1 + " es mayor que " + N2);
    } else {
        alert(N2 + " es mayor que " + N1);
    }
}

// Número menor
function numeroMenor() {
    let N1 = parseInt(prompt("Ingrese el primer número:"));
    let N2 = parseInt(prompt("Ingrese el segundo número:"));
    let N3 = parseInt(prompt("Ingrese el tercer número:"));

    if (N1 === N2 && N2 === N3) {
        alert("Los números son iguales: " + N1);
    } else {
        let menor = Math.min(N1, N2, N3);
        alert("El número menor es: " + menor);
    }
}

// Par o impar
function parOImpar() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

// Promedio estudiantes
function promedioEstudiantes() {
    let materia = prompt("Ingrese la materia:");
    let estudiante = prompt("Ingrese el nombre del estudiante:");
    let nNotas = parseInt(prompt("Ingrese el número de calificaciones:"));
    let suma = 0;

    for (let i = 0; i < nNotas; i++) {
        let nota = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`));
        suma += nota;
    }

    let promedio = suma / nNotas;

    if (promedio > 2.9) {
        alert(`${estudiante} aprobó la materia ${materia} con un promedio de ${promedio}`);
    } else {
        alert(`${estudiante} no aprobó la materia ${materia} con un promedio de ${promedio}`);
    }
}

// Frutería
function fruteria() {
    let kilos = parseFloat(prompt("Ingrese los kilos de manzanas:"));
    let precioBase = kilos * 4500;
    let descuento = 0;

    if (kilos > 2 && kilos <= 5) {
        descuento = 0.10;
    } else if (kilos > 5 && kilos <= 10) {
        descuento = 0.15;
    } else if (kilos > 10) {
        descuento = 0.20;
    }

    let total = precioBase - (precioBase * descuento);
    alert(`El cliente debe pagar: $${total}`);
}

// Horas extras
function horasExtras() {
    let horas = parseInt(prompt("Ingrese las horas trabajadas:"));
    let salario = 0;

    if (horas <= 40) {
        salario = horas * 10000;
    } else {
        salario = (40 * 10000) + ((horas - 40) * 20000);
    }

    alert("El salario semanal es: " + salario);
}

// Suma diferente a cero
function sumaDiferenteACero() {
    let suma = 0;
    let n;

    do {
        n = parseInt(prompt("Ingrese un número (0 para terminar):"));
        suma += n;
    } while (n !== 0);

    alert("La suma de los números ingresados es: " + suma);
}

// Imprimir del 1 al 10
function imprimirDe1A10() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + (i < 10 ? ", " : "");
    }
    alert("Los números del 1 al 10 son: " + resultado);
}

// Imprimir de 100 a 0 de 10 en 10
function imprimirDe100A0() {
    let resultado = "";
    for (let i = 100; i >= 0; i -= 10) {
        resultado += i + (i > 0 ? ", " : "");
    }
    alert("Los números de 100 a 0 de 10 en 10 son: " + resultado);
}

// Tabla de multiplicar
function tablaDeMultiplicar() {
    let num = parseInt(prompt("Ingrese el número para ver su tabla de multiplicar:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    alert(resultado);
}

// Cajero electrónico
function cajeroElectronico() {
    let saldo = parseInt(prompt("Ingrese el valor inicial de su saldo:"));

    while (saldo > 0) {
        let retiro = parseInt(prompt(`Tu saldo actual es: ${saldo}\nIngrese el valor a retirar:`));

        if (isNaN(retiro) || retiro <= 0) {
            alert("Ingrese un valor válido.");
            continue;
        }

        if (retiro > saldo) {
            alert("Saldo insuficiente.");
        } else {
            saldo -= retiro;
            alert("Retiro exitoso. Nuevo saldo: " + saldo);
        }
    }

    alert("Sin fondos. Ya retiró todo su dinero.");
}

// Números hasta 1000 de 100 en 100
function numerosHasta1000() {
    let resultado = "";
    for (let i = 100; i <= 1000; i += 100) {
        resultado += i + (i < 1000 ? ", " : "");
    }
    alert("Números de 100 en 100 hasta 1000: " + resultado);
}
