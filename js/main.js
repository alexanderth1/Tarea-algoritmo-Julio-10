class ejercicios{
    calcular_divisores(n1){
        //defino el arreglo q llevara los divisores
        let resultado = new Array();
    
        //calculo
        for (let i = 1; i < n1; i++) {
            if (n1 % i === 0) {
                resultado[resultado.length] = i;
            }
        }
        return resultado;
    }
    divisor_de_un_numero(){
        let num=0,respuesta=0
    
        //pido los valores
        num= parseInt(document.getElementById("num").value)
    
       //llamo a la funcion
       respuesta=this.calcular_divisores(num)
    
       //presento
       document.getElementById("respuesta").innerHTML=`Los divisores son:`
       document.getElementById("respuesta").innerHTML+=`<br> [${respuesta}]`
    }
    numero_perfecto(){
        let num=0,respuesta=0,suma=0
    
        //pido el valore
        num=parseInt(document.getElementById("num").value)
    
        //llamo a la funcion
        respuesta=this.calcular_divisores(num)
    
        for (let i = 0; i < respuesta.length; i++) {
            suma +=respuesta[i]
        }
    
        if (num == suma) {
            //presento
            document.getElementById("respuesta").innerHTML=`El numero ${num} es perfecto`
        }else {
            document.getElementById("respuesta").innerHTML=`El numero ${num} no es perfecto`
        }
    }    
    calcular_primo(n1){
        let cont=0,primo="es primo",noprimo="no es primo"

        //calculo
        for (let i = 2; i < n1; i++) {
            if (n1 % i === 0) {
                cont++
            }
        }

        //condicione y retorno el valor
        if (cont > 0 || n1== 0 || n1 == 1){
            return noprimo
        }else if (cont == 0){
            return primo
        }
    }
    numero_primo(){
        let num=0,respuesta=0

        //pido el valor
        num=parseInt(document.getElementById("num").value)

        //llamo a la funcion
        respuesta=this.calcular_primo(num)

        //presento
        document.getElementById("respuesta").innerHTML=`El numero ${num} ${respuesta}`
    }
    numero_primo_gemelo(){
        let num1=0,num2=0,respuesta=0,primo1="",primo2=""

        //pido los valores
        num1=parseInt(document.getElementById("num1").value)
        num2=parseInt(document.getElementById("num2").value)

        //llamo a la funcion
        respuesta=this.calcular_primo(num1)
        primo1=respuesta
        //llamo otra vez a la funcion
        respuesta=this.calcular_primo(num2)
        primo2=respuesta

        //condiciono si son primos o no y presento
        //condiciono si son primos gemelos o no y presento
        if (primo1== "es primo" && primo2== "es primo") {
            if (Math.abs(num1 - num2)==2) {
                document.getElementById("respuesta").innerHTML=`Los numero ingresados son Primos Gemelos`
            }else{
                document.getElementById("respuesta").innerHTML=`Los numeros ingresados no son Primos Gemelos`
            }
        }else {
            document.getElementById("respuesta").innerHTML=`Hay numeros ingresados que no son primos`
            document.getElementById("respuesta").innerHTML+=` <br> Por favor ingrese numeros primos para comprobar si son Primos Gemelos`
        }
    }
}
let operaciones1 = new ejercicios()

class cadenas{
    //no necesita funcion 
    concatenar_dos_cadenas(){
        let palabra1="",palabra2="",respuesta=""

        //pido los valores
        palabra1=document.getElementById("palabra1").value
        palabra2=document.getElementById("palabra2").value

        //concateno
        respuesta = palabra1 + " " + palabra2

        //presento
        document.getElementById("respuesta").innerHTML=`Palabras contanedas:`
        document.getElementById("respuesta").innerHTML+=`<br>${respuesta}`
    }
    buscar(fr,bsc){
        let posAux = 0, posC = 0, posB = 0, lonC = 0, lonB = 0, enc = false

        //se obtiene la longitud de la cadena y de la subcadena
        lonC = fr.length
        lonB = bsc.length

        while (posC < lonC && enc == false) {
            
            if (fr[posC] == bsc[0]) {
                posAux = posC
                posB = 0

                while (posAux < lonC && posB < lonB && fr[posAux] == bsc[posB]) {
                    posAux++
                    posB++
                }

                if (posB == lonB) {
                    enc = true
                } else {
                    posC++
                }

            }
            else {
                posC++
            }
        }

        //una vez terminado de recorrer la cadena se retorna 
        if (enc == true) {
            return posC
        } else {
            return -1
        }
    }
    buscar_una_subcadena(){
        let frase="",respuesta=0,buscar=""

        //pido los valores
        frase=document.getElementById("frase").value
        buscar=document.getElementById("buscar").value

        //se llama a la funcion
        respuesta=this.buscar(frase,buscar)

        //presento
        if (respuesta >=0) {
            document.getElementById("respuesta").innerHTML = `[${buscar}] se encontró en la posicion: [${respuesta}] de la cadena`
        } else {
            document.getElementById("respuesta").innerHTML = `[${buscar}] No se encontró en la cadena`
        }
    }
    insertar_subcadena(){
        let frase="",respuesta=0,buscar="", insertar=""

        //pido los valores
        frase=document.getElementById("frase").value
        buscar=document.getElementById("buscar").value
        insertar=document.getElementById("insertar").value

        //se llama a la funcion
        respuesta=this.buscar(frase,buscar)

        //si se encuentra la subcadena, se inserta la nueva subcadena en esa posición
        if (respuesta >=0) {
            //se define 
            let nuevaFrase = ""
            for(let i = 0; i < frase.length; i++) {

                if(i == respuesta) {
                    //se le añade un espacio detras y delante de la nueva palabra
                    nuevaFrase += " " + insertar + " " 
                }
                nuevaFrase += frase[i]
            }

            //una vez termina el recorrido del for se presenta 
            document.getElementById("respuesta").innerHTML = `La nueva cadena es: [${nuevaFrase}]`
        } else {
            //si no se encuentra la palabra 
            document.getElementById("respuesta").innerHTML = `[${buscar}] No se encontró en la cadena`
        }
    }
    eliminar_una_subcadena(){
        let frase="", respuesta=0, buscar=""

        //pido los valores
        frase=document.getElementById("frase").value
        buscar=document.getElementById("buscar").value

        //se llama a la funcion
        respuesta=this.buscar(frase,buscar)

        //si se encuentra la subcadena, se elimina de la cadena
        if (respuesta >=0) {
            //se define 
            let nuevaFrase = ""

            for(let i = 0; i < frase.length; i++) {
                if(i == respuesta) {

                    //se salta la subcadena a eliminar
                    i += buscar.length - 1
                } else {
                    nuevaFrase += frase[i]
                }
            }

            //una vez termina el recorrido del for se presenta 
            document.getElementById("respuesta").innerHTML = `La nueva cadena es: [${nuevaFrase}]`
        } else {

            //si no se encuentra la palabra 
            document.getElementById("respuesta").innerHTML = `[${buscar}] No se encontró en la cadena`

        }
    }
    convertir_un_arreglo_a_cadena(arreglo){
        //defino la variable cadena 
        let cadena = ""

        //recorro el arreglo
        for(let i = 0; i < arreglo.length; i++) {
            //se almacena en cadena ,los elementos del arreglo y se le coloca las comillas
            cadena += '"' + arreglo[i] + '"'

            if(i < arreglo.length - 1) {
                //se le acumula y se concatena la [,]
                cadena += ","

            }
        }
        //retorno el valor
        return cadena;
    }
    arreglo_a_cadena(){
        // se define un arreglo vacio
        let arreglo = new Array()
        
        // se define una varibale temporal que tendra los elementos del arreglo
        let temporal = ''
         
        // se pide los valores
        let input = document.getElementById("arreglo").value
         
        // se define un contador para el arreglo
        let j = 0
         
        // Recorrer cada carácter 
        for(let i = 0; i < input.length; i++) {
            // Si el carácter no es una coma, se lo añade a la variable temporal
            if(input[i] != ',') {
                temporal += input[i]
            } else {
                // Si el carácter es una coma, la variable temporal se lo añade al arreglo 
                arreglo[j] = temporal
                //se reinicia la variable temporal para volver almacenar los valores 
                temporal = ''
                j++
            }
        }
 
        // se añade el último elemento al arreglo
        arreglo[j] = temporal
 
        // Llamar a la función 
        let respuesta = this.convertir_un_arreglo_a_cadena(arreglo)
 
        // presento
        document.getElementById("respuesta").innerHTML = `La cadena es: [${respuesta}]`
    }
}
let operaciones2 = new cadenas()

class arreglos{
    convert(arreglo,temporal,input,j){
        // Recorrer cada carácter 
        for(let i = 0; i < input.length; i++) {
            // Si el carácter no es una coma, se lo añade a la variable temporal
            if(input[i] != ',') {
                temporal += input[i]
            } else {
                // Si el carácter es una coma, la variable temporal se lo añade al arreglo 
                arreglo[j] = temporal
                //se reinicia la variable temporal para volver almacenar los valores 
                temporal = ''
                j++
            }
        }
 
        // se añade el último elemento al arreglo
        arreglo[j] = temporal

        return arreglo
    }
    mayor_de_un_arreglo(){
        //defino un arreglo vacio
        let arreglo = new Array()

        //defino la variable temporal para q contenga los elementos de arreglo
        let temporal = ""

        // pido los valores
        let input=document.getElementById("arreglo").value

        //defino un contador para el arreglo
        let j=0,respuesta=0

        //convierto el arreglo a cadena 
        respuesta=this.convert(arreglo,temporal,input,j)

        //luego le coloco a (mayor) el valor del arreglo en la posicion 0
        let mayor = respuesta[0]

        //recorro el arreglo y comparo el valor 
        for (let i = 0; i < respuesta.length; i++) {
            if (parseInt(respuesta[i]) > parseInt(mayor)) {
                mayor = respuesta[i]
            }           
        }
        //presento el valor mayor
        document.getElementById("respuesta").innerHTML=`el numero mayor es ${mayor}`
    }
    buscar_element(arreglo,buscar){

        //recorro el arreglo y comparo el valor de buscado con todos los elementos dentro  del  arreglo
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == buscar) {
                //retorno la posicion donde se encuentra la posicion del elemento buscado
                return i
            }
        }
        //sino se encuentra el dato de buscar se retorna -1
        return -1
    }
    buscar_arreglo(){
        let arreglo = new Array()

        //defino la variable temporal para q contenga los elementos de arreglo
        let temporal = ""

        //pido los valores
        let input=document.getElementById("arreglo").value
        let buscar=document.getElementById("buscar").value

        //defino el contador del arreglo
        let j=0,respuesta=0,respuesta2=0

        //llamo a la funcion
        respuesta=this.convert(arreglo,temporal,input,j)

        //llamo a la funcion
        respuesta2=this.buscar_element(respuesta,buscar)

        //condiciono y presento
        if (respuesta2 >= 0 ) {
            document.getElementById("respuesta").innerHTML=`El dato [${buscar}] se encontro en la posicion [${respuesta2}] del arreglo`
        }else{
            document.getElementById("respuesta").innerHTML=`El dato [${buscar}] no se encontro en el arreglo`
        }
    }
    insertar_arreglo(){
        let arreglo = new Array()

        //defino la una variable temporal 
        let temporal=""

        //pido los valores
        let input = document.getElementById("arreglo").value
        let insertar = document.getElementById("insertar").value
        let posicion = parseInt(document.getElementById("posicion").value)

        //defino el contador del arreglo
        let j = 0,respuesta=0

        //llamo a la funcion
        respuesta = this.convert(arreglo,temporal,input,j)

        // Creo un nuevo arreglo para almacenar el resultado
        let nuevoArreglo = new Array(respuesta.length + 1)

        // Recorro el arreglo original
        for(let i = 0; i < nuevoArreglo.length; i++){

            if(i < posicion){

                // Si el índice es menor que la posición, copio el elemento
                nuevoArreglo[i] = respuesta[i]

            } else if(i == posicion){

                // Si el índice es igual a la posición, inserto el nuevo elemento
                nuevoArreglo[i] = insertar

            } else {

                // Si el índice es mayor que la posición, copio el elemento desplazándolo una posición
                nuevoArreglo[i] = respuesta[i - 1]

            }

        }

        // presento
        document.getElementById("respuesta").innerHTML=`El arreglo con el nuevo elemento insertado es [${nuevoArreglo}]`
    }
    eliminar_arreglo(){
        let arreglo = new Array()

        //defino una variable temporal
        let temporal = ""

        //pido los valores
        let input = document.getElementById("arreglo").value
        let eliminar = parseInt(document.getElementById("eliminar").value)

        //defino el contador del arreglo
        let j = 0

        //llamo a la funcion
        arreglo = this.convert(arreglo,temporal,input,j)

        // Creo un nuevo arreglo para almacenar los elementos 
        let nuevoArreglo = new Array(arreglo.length - 1)

        // Recorro el arreglo original
        for(let i = 0, k = 0; i < arreglo.length; i++){
            // Si el índice no es igual al índice a eliminar agrego el elemento al nuevo arreglo
            if(i != eliminar){
                nuevoArreglo[k] = arreglo[i]
                k++
            }
        }

        // ahora paso los valores del nuevo arreglo al arreglo antiguo
        arreglo = nuevoArreglo

        //presento
        document.getElementById("respuesta").innerHTML = `Elemento eliminado, ahora es [${arreglo}]`
    } 
    convertir(cadena,arreglo){

        //se recorre la cadena y se coloca letra por letra dentro del arreglo
        for (let i = 0; i < cadena.length; i++) {
            arreglo[i]= cadena[i] 
        }

        //retorno el valor
        return arreglo
    }  
    convertir_cadena_a_arreglo(){
        let arreglo = new Array()

        let respuesta=0
        //pido los valore
        let cadena = document.getElementById("cadena").value
        
        //llamo a la funcion
        respuesta = this.convertir(cadena,arreglo)

        //presento
        document.getElementById("respuesta").innerHTML = `El arreglo es: [${respuesta}]`
    }
}
let operaciones3 = new arreglos()

class conversor{
    redondeo(numero){
        //se redondea 
        return numero - numero % 1
    }
    convert(numero, respuesta, base) {
        //se coloca los numeros para bases mayores a 10
        let digitos = "0123456789ABCDEF"

        //se clacula
        while (numero > 0) {
            //se concatena y se revisa q los digitos correctos para cada base
            respuesta = digitos[numero % base] + respuesta; 
            //se llama a la funcion
            numero = this.redondeo(numero/base);
        }
        //se retorna el arreglo con los valores
        return respuesta;
    }
    base_10_a_base_2(){
        //se define la base que se va a utilizar
        let respuesta ="",base=2

        //pido el valor
        let numero = document.getElementById("numero").value

        //se llama a la funcion
        respuesta = this.convert(numero,respuesta,base)

        //presento
        document.getElementById("respuesta").innerHTML = `El numero binario es: ${respuesta}`
    }
    base_10_a_base_8(){
        //se define la base que se va a utilizar
        let respuesta ="",base=8

        //pido el valor
        let numero = document.getElementById("numero").value
 
        //se llama a la funcion
        respuesta = this.convert(numero,respuesta,base)
 
        //presento
        document.getElementById("respuesta").innerHTML = `El numero octal es: ${respuesta}`
    }
    base_10_a_base_16(){
        //se define la base que se va a utilizar
        let respuesta ="",base=16

        //pido el valor
        let numero = document.getElementById("numero").value
 
        //se llama a la funcion
        respuesta = this.convert(numero,respuesta,base)
 
        //presento
        document.getElementById("respuesta").innerHTML = `El numero hexadecimal es: ${respuesta}`
    }
    convert2(numero,base,respuesta){

        //recorro los numeros ingresados
        for(let i = 0; i < numero.length; i++) {

            if(numero[i] === '1' || numero[i] === '0') {
                let potencia = 1;

                for(let j = 0; j < numero.length - 1 - i; j++) {

                    potencia *= base;

                }

                respuesta += potencia * parseInt(numero[i])
            }
        }
        //retorno la respuesta
        return respuesta

    }
    binario(numero){
        let si=true 

        //recorro la cadena 
        for (let i = 0; i < numero.length; i++) {
            //verifico si los numeros ingresados son o y 1 
            if (numero[i] != "0" && numero[i] != "1") {
                si = false
            }
        }

        return si
    }
    base_2_a_base_10(){
        // se define la base que se va a utilizar
        let respuesta = 0, base = 2 , comprobar=0

        // pido el valor
        let numero = document.getElementById("numero").value

        //llamo a la funcion
        comprobar = this.binario(numero)

        //valido si los numeros ingresados son binarios
        if (comprobar == true) {
            // se llama a la funcion
            respuesta = this.convert2(numero,base,respuesta)

            // presento
            document.getElementById("respuesta").innerHTML = `El numero es: ${respuesta}`

        }else{
            document.getElementById("respuesta").innerHTML = "Los numeros ingresados no son binarios"
        }
        
    }
    convert3(binario){
        // Inicializa las variables
        let octal = "", contador = 0, temp = 0, numero_de_digitos = binario.length
    
        // Procesa cada dígito en el número binario
        for(let i = numero_de_digitos - 1; i >= 0; i--) {
            temp += (binario[i] - '0') * (1 << contador)
            contador++
     
            // Cuando tenemos 3 dígitos o hemos llegado al último dígito
            if(contador == 3 || i == 0) {
                octal = temp + octal
                temp = 0
                contador = 0
            }
        }

        return octal
    }
    base_2_a_base_8(){
        // pido el valor
        let binario = document.getElementById("numero").value;

        let comprobar = 0

        //llamo a la funcion para comprobar que son numeros binarios
        comprobar = this.binario(binario)

        if (comprobar == true) {
            //llamo a la funcion
            let respuesta = this.convert3(binario)

            // Muestra el número octal
            document.getElementById("respuesta").innerHTML = `El numero octal es: ${respuesta}`

        }else {
            document.getElementById("respuesta").innerHTML = "Los numeros ingresados no son binarios"
        }
        
    }
    convert4(binario){
        // defino variables
        let hexadecimal = "", temp = 0, contador = 0;
    
        // Procesa cada dígito en el número binario
        for(let i = binario.length - 1; i >= 0; i--) {

            temp += (binario[i] - '0') * (1 << contador);
            contador++;
    
            // Cuando tenemos 4 dígitos o hemos llegado al último dígito
            if(contador == 4 || i == 0) {

                // Convierte el número decimal a hexadecimal
                if(temp < 10) {

                    hexadecimal = temp + hexadecimal;

                } else {

                    // Para los números del 10 al 15 
                    switch(temp) {

                        case 10: hexadecimal = 'A' + hexadecimal; break;
                        case 11: hexadecimal = 'B' + hexadecimal; break;
                        case 12: hexadecimal = 'C' + hexadecimal; break;
                        case 13: hexadecimal = 'D' + hexadecimal; break;
                        case 14: hexadecimal = 'E' + hexadecimal; break;
                        case 15: hexadecimal = 'F' + hexadecimal; break;

                    }
                }

                temp = 0;
                contador = 0;
            }
        }

        return hexadecimal
    }
    base_2_a_base_16(){

        let respuesta=0

        // pido el valor
        let binario = document.getElementById("numero").value
        let comprobar = 0

        //llamo a la funcion
        comprobar = this.binario(binario)

        //comprobamos que los numeros ingresados sean binarios
        if (comprobar == true) {
            //llamo a la funcion
            respuesta = this.convert4(binario)

            //presento
            document.getElementById("respuesta").innerHTML = `El número en hexadecimal es: ${respuesta}`;
        }else {
            document.getElementById("respuesta").innerHTML = "Los numeros ingresados no son binarios"
        }
    
    }
}
let operaciones4 = new conversor()