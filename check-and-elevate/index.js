/**Dados el siguiente array:    [ '6**2', '**', '3**3', '4**', '4**5', '8**2**', '4*=5']
Realizaremos una función que:

-Reciba un array y devuelva el resultado de la operación potenciación en caso de poder realizarla. De no ser posible, devolverá null.
-Deberá detectar si el array incluye un ** y tiene un número a cada lado.
En ese caso, realizar la operación de potenciación del número localizado a la izquierda del ** elevado al exponente que indica el número de la derecha. */

function checkAndElevate(array){
    //iterar sobre cada uno de los elementos del array
    array.forEach(element => {
        if( element.includes('**', 1) ) { //si incluye ** a partir de la posición 1 (el segundo caracter del string)
            let data = element.split('**') //va a partir en 2 el string, '2**3' devuelve  ['2', '3']
            return data[0] ** data[1] //checkear que ambos valores sean integers
        }
        return null
    });
return
}

//si a la derecha de ** hay un numero
//si a la izquierda de ** hay un numero
//recorrer el string e ir metiendo los valores numericos en una variable
//parar de recorrer el string cuando encuentre **

//operator = **. str.slice(i (que sería *), i+1)
//numero = lo que este a la izq de operator
//pontencia = lo que este a la derecha de operator

//se puede checkear si todos los elementos del array cumplen con una regex