//Expresiones matematicas
class expresiones{
    ejercicio1(){
        let a,b,respuesta1=0

        //presento la ecuacion}
        document.getElementById("respuesta1").innerHTML=`Ecuacion:`
        document.getElementById("respuesta1").innerHTML+=`<br> y = 2 * a + b - a % 3`
        //pido los valores
        a=parseInt(document.getElementById("a").value)
        b=parseInt(document.getElementById("b").value)

        //calculo
        respuesta1 = 2 * a + b - a % 3
        
        //presento respuesta
        document.getElementById("respuesta1").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta1").innerHTML+=`<br> y = ${respuesta1}`   
        }
    ejercicio2(){
        let c,d,respuesta2=0

        //presento la ecuacion}
        document.getElementById("respuesta2").innerHTML=`Ecuacion:`
        document.getElementById("respuesta2").innerHTML+=`<br> z = a * b + 3 mod a + b`
        //pido los valores
        c=parseInt(document.getElementById("c").value)
        d=parseInt(document.getElementById("d").value)

        //calculo
        respuesta2 = c * d + 3 % c + d
        
        //presento respuesta
        document.getElementById("respuesta2").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta2").innerHTML+=`<br> z = ${respuesta2}`
    }
    ejercicio3(){
        let e,f,respuesta3=0

        //presento la ecuacion}
        document.getElementById("respuesta3").innerHTML=`Ecuacion:`
        document.getElementById("respuesta3").innerHTML+=`<br>  w = a - b + 2 * a mod b `
        //pido los valores
        e=parseInt(document.getElementById("e").value)
        f=parseInt(document.getElementById("f").value)

        //calculo
        respuesta3 = e - f + 2 * e % f
        
        //presento respuesta
        document.getElementById("respuesta3").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta3").innerHTML+=`<br> w = ${respuesta3}`
    }
    ejercicio4(){
        let g,h,respuesta4=0

        //presento la ecuacion}
        document.getElementById("respuesta4").innerHTML=`Ecuacion:`
        document.getElementById("respuesta4").innerHTML+=`<br>   v = 2 * b + a div 2 + 4 * b mod a `
        //pido los valores
        g=parseInt(document.getElementById("g").value)
        h=parseInt(document.getElementById("h").value)

        //calculo
        respuesta4 = 2 * h + Math.floor(g / 2) + 4 * (h % g)
        
        //presento respuesta
        document.getElementById("respuesta4").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta4").innerHTML+=`<br> v = ${respuesta4}`
    }
    ejercicio5(){
        let i,j,respuesta5=0

        //presento la ecuacion}
        document.getElementById("respuesta5").innerHTML=`Ecuacion:`
        document.getElementById("respuesta5").innerHTML+=`<br>  u = b - a + 3 * a mod b `
        //pido los valores
        i=parseInt(document.getElementById("i").value)
        j=parseInt(document.getElementById("j").value)

        //calculo
        respuesta5 = j - i + 3 * i % j
        
        //presento respuesta
        document.getElementById("respuesta5").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta5").innerHTML+=`<br> u = ${respuesta5}`
    }
    ejercicio6(){
       
        let respuesta6=0
        //presento la ecuacion}
        document.getElementById("respuesta6").innerHTML=`Ecuacion:`
        document.getElementById("respuesta6").innerHTML+=`<br>  (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 `

        //calculo
        respuesta6 = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
        
        //presento respuesta
        document.getElementById("respuesta6").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta6").innerHTML+=`<br>  ${respuesta6}`
    }
    ejercicio7(){
       
        let respuesta7=0
        //presento la ecuacion}
        document.getElementById("respuesta7").innerHTML=`Ecuacion:`
        document.getElementById("respuesta7").innerHTML+=`<br> 2 *(4 - 10 + 8)/2* 36 *(1/2)  `

        //calculo
        respuesta7 = 2 *(4 - 10 + 8)/2* 36 *(1/2)
        
        //presento respuesta
        document.getElementById("respuesta7").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta7").innerHTML+=`<br>  ${respuesta7}`
    }
    ejercicio8(){
       
        let respuesta8=0
        //presento la ecuacion}
        document.getElementById("respuesta8").innerHTML=`Ecuacion:`
        document.getElementById("respuesta8").innerHTML+=`<br>  260 / 12 + 54 % 3 - 85 % 7 `

        //calculo
        respuesta8 = 260 / 12 + 54 % 3 - 85 % 7
        
        //presento respuesta
        document.getElementById("respuesta8").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta8").innerHTML+=`<br>  ${respuesta8}`
    }
    ejercicio9(){
       
        let respuesta9=0
        //presento la ecuacion}
        document.getElementById("respuesta9").innerHTML=`Ecuacion:`
        document.getElementById("respuesta9").innerHTML+=`<br> (48 < 2 * 3) | | (2 * 7 < 12)`

        //calculo
        respuesta9 = (48 < 2 * 3) || (2 * 7 < 12)
        
        //presento respuesta
        document.getElementById("respuesta9").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta9").innerHTML+=`<br>  ${respuesta9}`
    }
    ejercicio10(){
       
        let respuesta10=0
        //presento la ecuacion}
        document.getElementById("respuesta10").innerHTML=`Ecuacion:`
        document.getElementById("respuesta10").innerHTML+=`<br> ((8 > 2) | | (932 < 23) ) && 4 == 2`

        //calculo
        respuesta10 = ((8 > 2) || (932 < 23) ) && 4 == 2
        
        //presento respuesta
        document.getElementById("respuesta10").innerHTML+=`<br> Respuesta:`
        document.getElementById("respuesta10").innerHTML+=`<br>  ${respuesta10}`
    }
}
let operaciones4 = new expresiones()

//Secuenciales
class secuenciales{
    suma_de_dos_numeros(){
        let num1,num2,respuesta
        num1=0;num2=0;respuesta=0

        //pido los valores
        num1=parseInt(document.getElementById("num1").value)
        num2=parseInt(document.getElementById("num2").value)

        //calculo y presento
        respuesta=num1 + num2

        console.log(num1, "+", num2, "=", respuesta)

        //presento en la pagina wed
        document.getElementById("respt").innerHTML=`${num1} + ${num2} = ${respuesta}`
    }

    area_de_un_triangulo(){
        let base,altura,respuesta
        base=0;altura=0;respuesta=0

        //pido los valores
        base=parseInt(document.getElementById("base").value)
        altura=parseInt(document.getElementById("altura").value)

        //calculo
        respuesta= (base * altura /2)

        //presento en la wed y en la consola
        console.log(base, "*", altura, "/2", respuesta)

        document.getElementById("respuesta").innerHTML=`${base} * ${altura} /2 = ${respuesta}`
        document.getElementById("respuesta").innerHTML +=`<br>El area de su triangulo es: ${respuesta}`

    }
    numero_par_o_impar(){
        let num,respuesta
        num=0,respuesta=0

        //pido los valores
        num=parseInt(document.getElementById("num").value)

        //calculo y presento en la consola y en la wed
        respuesta= num % 2

        if(respuesta==0){
            console.log("El numero",num," es par")
            document.getElementById("respuesta").innerHTML=`El numero ${num} es par`
        }else{
            console.log("El numero",num," es impar")
            document.getElementById("respuesta").innerHTML=`El numero ${num} es impar`
        }
    }
    calculadora_simple(){
        let num1,num2,respuesta,tipo
        num1=0;num2=0;respuesta=0;tipo=""
        
        //pido los valores
        num1=parseInt(document.getElementById("num1").value)
        num2=parseInt(document.getElementById("num2").value)
        tipo= document.getElementById("tipo").value

        let tipoEnMinuscula = tipo.toLowerCase();

        switch (tipoEnMinuscula) {
            case "sumar":
            case "suma":
                respuesta= num1 + num2
                document.getElementById("respuesta").innerHTML=`${num1} + ${num2} = ${respuesta}`
                
                break;
            case "restar":
            case "resta":
                respuesta= num1 - num2
                document.getElementById("respuesta").innerHTML=`${num1} - ${num2} = ${respuesta}`
                break;
            case "multiplicar":
            case "multiplicacion":
            case "multiplica":
                respuesta= num1 * num2
                document.getElementById("respuesta").innerHTML=`${num1} * ${num2} = ${respuesta}`
                break;
            case "division":
            case "dividir":
            case "divide":
                respuesta= num1 / num2    
                document.getElementById("respuesta").innerHTML=`${num1} / ${num2} = ${respuesta}`
                break;
            default:
                document.getElementById("respuesta").innerHTML=`Error! Operacion no encontrada`
                break;
        }
    }
    tabla_de_multiplicar(){
        let tabla,respuesta
        tabla=0;respuesta=0

        //pido los valores
        tabla=parseInt(document.getElementById("tabla").value)
        //calculo y presento tabla
       
        document.getElementById("respuesta").innerHTML = ""

        for (let i = 1; i <=10; i++) {
            respuesta= i * tabla
            document.getElementById("respuesta").innerHTML += `<br>${i} x ${tabla} = ${respuesta}`
            
        }
    }
    copiar_palabra(){
        let palabra1,palabra2,respuesta
        palabra1="";palabra2="";respuesta=""

        //pido los valores
        palabra1=(document.getElementById("palabra1").value)
        palabra2=(document.getElementById("palabra2").value)

        respuesta= palabra1 + " " + palabra2

        //presento
        document.getElementById("respuesta").innerHTML=`${respuesta} `
    }
   
}
let operaciones1= new secuenciales()

//Condicionales
class condicionales{
    mayor_de_tres_numeros(){
        let num1,num2,num3
        num1=0;num2=0;num3=0

        //pido los valores
        num1=parseInt(document.getElementById("num1").value)
        num2=parseInt(document.getElementById("num2").value)
        num3=parseInt(document.getElementById("num3").value)

        if ((num1 > num2) && (num1 > num3) ) {
            document.getElementById("respuesta").innerHTML=`El numero ${num1} es mayor`
        }else if ((num2 > num1) && (num2 > num3)) {
            document.getElementById("respuesta").innerHTML=`El numero ${num2} es mayor`
        }else if ((num3 > num1) && (num3 > num2)) {
            document.getElementById("respuesta").innerHTML=`El numero ${num3} es mayor`
        }else {
            document.getElementById("respuesta").innerHTML=`hay numeros iguales`
        }
    }
    edad_minima_para_votar(){
        let edad=0

        //Pido los valores
        edad=parseInt(document.getElementById("edad").value)

        //calculo y presento
        if ( edad >= 18) {
            document.getElementById("respuesta").innerHTML=`Usted es mayor de edad, puede votar`
        }else if(edad < 18){
            document.getElementById("respuesta").innerHTML=`Usted es menor de edad, no puede votar`
        }
    }
    calculadora_de_bmi(){
        let peso,altura,masa
        peso=0;altura=0;masa=0

        //pido los valores
        peso=parseFloat(document.getElementById("peso").value)
        altura=parseFloat(document.getElementById("altura").value)

        //calculo
        masa= peso/(altura**2)

        //condiciono y presento
        if (masa<18.5) {
            document.getElementById("respuesta").innerHTML=`Su indice de masa corporal es ${masa} .Se encuentra dentro del rango de inferios al normal `
        }else if((masa>=18.5) && (masa<=24.9)){
            document.getElementById("respuesta").innerHTML=`Su indice de masa corporal es ${masa} .Se encuentra dentro del rango de peso normal o saludable `
        }else if((masa>=25.0) && (masa<=29.9)){
            document.getElementById("respuesta").innerHTML=`Su indice de masa corporal es ${masa} .Se encuentra dentro del rango de peso superior al normal`
        }else {
            document.getElementById("respuesta").innerHTML=`Su indice de masa corporal es ${masa} .Se encuentra dentro del rango de obesidad`
        }
    }
    numero_positivo_negativo_o_cero(){
        let num=0

        //pido los valores
        num=parseInt(document.getElementById("num").value)

        //calculo y presento

        if (num>0) {
            document.getElementById("respuesta").innerHTML=`El numero ${num} es positivo`
        }else if(num<0){
            document.getElementById("respuesta").innerHTML=`El numero ${num} es negativo`
        }else {
            document.getElementById("respuesta").innerHTML=`El numero es cero`
        }
    }
    año_bisiesto(){
        let num=0

        //pido los valores
        num=(document.getElementById("num").value)

        //claculo y presento

        if (num % 4 == 0 && ((num % 100 != 0) || (num % 400 == 0))) {
            document.getElementById("respuesta").innerHTML=`El año ${num} es bisiesto`
        }else {
            document.getElementById("respuesta").innerHTML=`El año ${num} no es bisiesto`
        }
    }
    signo_zodiacal(){
        let dia,mes,signo

        //pido los valores
        dia=parseInt(document.getElementById("dia").value)
        mes=parseInt(document.getElementById("mes").value)

        //condiciono y luego presento

        if ((dia >= 21 && mes==3) || (dia <= 19 && mes==4)) {
            signo="Aries"
        }else if((dia >= 20 && mes==4) || (dia <= 20 && mes==5)){
            signo="Tauro"
        }else if((dia >= 21 && mes==5) || (dia <= 20 && mes==6)){
            signo="Geminis"
        }else if((dia >= 21 && mes==6) || (dia <= 22 && mes==7)){
            signo="Cancer"
        }else if((dia >= 23 && mes==7) || (dia <= 22 && mes==8)){
            signo="Leo"
        }else if((dia >= 23 && mes==8) || (dia <= 22 && mes==9)){
            signo="Virgo"
        }else if((dia >= 23 && mes==9) || (dia <= 22 && mes==10)){
            signo="Libra"
        }else if((dia >= 23 && mes==10) || (dia <= 21 && mes==11)){
            signo="Escorpio"
        }else if((dia >= 22 && mes==11) || (dia <= 21 && mes==12)){
            signo="Sagitario"
        }else if((dia >= 22 && mes==12) || (dia <= 19 && mes==1)){
            signo="Capricornio"
        }else if((dia >= 20 && mes==1) || (dia <= 18 && mes==2)){
            signo="Acuario"
        }else if((dia >= 19 && mes==2) || (dia <= 20 && mes==3)){
            signo="Piscis"
        }else {
            document.getElementById("respuesta").innerHTML=`Fecha no encontrada`
        }
        //se presenta
        document.getElementById("respuesta").innerHTML=`Su signo es ${signo}`
    }
    primera_o_segunda_quincena(){
        let num=0

        //pido los valores
        num=parseInt(document.getElementById("num").value)

        //calculo y presento
        if (num > 0 && num <= 15) {
            document.getElementById("respuesta").innerHTML=`El dia ${num} pertenece a la primera quincena`
        }else if(num > 15 && num <= 31){
            document.getElementById("respuesta").innerHTML=`El dia ${num} pertenece a la segunda quincena`
        }else {
            document.getElementById("respuesta").innerHTML=`El dia ${num} no pertenece a un dia del mes`
        }
    }
    dia_de_la_semana(){
        let num=0

        //pido los valores
        num=parseInt(document.getElementById("num").value)

        switch (num) {
            case 1:
                document.getElementById("respuesta").innerHTML=`El dia es domingo`
                break;
            case 2:
                document.getElementById("respuesta").innerHTML=`El dia es lunes`
                break;
            case 3:
                document.getElementById("respuesta").innerHTML=`El dia es martes`
                break;
            case 4:
                document.getElementById("respuesta").innerHTML=`El dia es miercoles`
                break;
            case 5:
                document.getElementById("respuesta").innerHTML=`El dia es jueves`
                break;
            case 6:
                document.getElementById("respuesta").innerHTML=`El dia es viernes`
                break;
            case 7:
                document.getElementById("respuesta").innerHTML=`El dia es sabado`
                break;
            default:
                document.getElementById("respuesta").innerHTML=`Error! el dia ingresado es incorrecto`
                break;
        }
    }
    frases_iguales(){
        let frase1="",frase2=""

        //pido el valor
        frase1=document.getElementById("frase1").value
        frase2=document.getElementById("frase2").value

        //condiciono y presento
        if (frase1==frase2) {
            document.getElementById("respuesta").innerHTML=`Sus frases son iguales`
        }else {
            document.getElementById("respuesta").innerHTML=`Sus frases no son iguales`
        }
    }
    precio_de_descuento(){
        let precio=0,descuento=0,respuesta=0,subtotal=0
        
        //pido los valores
        precio=parseFloat(document.getElementById("precio").value)
        descuento=parseInt(document.getElementById("descuento").value)

        //calculo
        descuento=descuento/100
        subtotal=precio*descuento
        subtotal=subtotal.toFixed(2)
        respuesta=precio - subtotal

        //presento
        document.getElementById("respuesta").innerHTML=`Precio    =$${precio}`  
        document.getElementById("respuesta").innerHTML+=`<br>Descuento   =$${subtotal}` 
        document.getElementById("respuesta").innerHTML+=`<br>total     =$${respuesta}` 
    }
    factura_con_impuesto(){
        let subtotal=0,respuesta=0
        //defino y pido los valores
        let factura=parseFloat(document.getElementById("factura").value)
        let impuesto=parseInt(document.getElementById("impuesto").value)

        //calculo
        impuesto=impuesto/100
        subtotal= impuesto*factura
        respuesta=factura + subtotal
        respuesta=respuesta.toFixed(2)

        //presento
        document.getElementById("respuesta").innerHTML=`Total factura   =$${factura}`  
        document.getElementById("respuesta").innerHTML+=`<br>Impuesto   =$${subtotal}` 
        document.getElementById("respuesta").innerHTML+=`<br>total      =$${respuesta}` 
    }
    sueldo_con_aumento(){
        let respuesta=0,subtotal=0

        //pido los valores
        let sueldo=parseFloat(document.getElementById("sueldo").value)
        let aumento=parseInt(document.getElementById("aumento").value)

        //calculo
        aumento=aumento/100
        subtotal=sueldo*aumento
        respuesta=sueldo + subtotal
        respuesta=respuesta.toFixed(2)

        //presento
        document.getElementById("respuesta").innerHTML=`Total Sueldo  =$${sueldo}`  
        document.getElementById("respuesta").innerHTML+=`<br>Aumento  =$${subtotal}` 
        document.getElementById("respuesta").innerHTML+=`<br>total      =$${respuesta}` 
    }
    compra_con_multiples_articulos(){
        let precio=0,cantidad=0,respuesta=0,descuento1=0,subtotal=0,descuento2=0

        //pido los valores
        precio=parseFloat(document.getElementById("precio").value)
        cantidad=parseInt(document.getElementById("cantidad").value)

        //calculo
        subtotal=precio * cantidad
        subtotal=subtotal.toFixed(2)

        if (subtotal > 100) {
            descuento1=0.10
            descuento2= subtotal*descuento1
            respuesta=subtotal-descuento2
        }else{
            descuento1=0
            respuesta=subtotal
        }

        document.getElementById("respuesta").innerHTML=`Precio  =$${precio}`  
        document.getElementById("respuesta").innerHTML+=`<br>cantidad =${cantidad}` 
        document.getElementById("respuesta").innerHTML+=`<br>subtotal =${subtotal}` 
        document.getElementById("respuesta").innerHTML+=`<br>descuento =${descuento1}` 
        document.getElementById("respuesta").innerHTML+=`<br>total     =$${respuesta}` 
    }
    impuesto_sobre_el_salario(){
        let salario=0,respuesta=0
        
        //pido el valor
        salario=parseFloat(document.getElementById("salario").value)

        //condiciono y presento
        if (salario <=10000) {
            respuesta=salario*0.05
        }else if(salario >10000 && salario<=20000){
            respuesta=salario*0.10
        }else if(salario>20000){
            respuesta=salario*0.15
        }else{
            document.getElementById("respuesta").innerHTML=`El salario ingresado es incorrecto`
        }
        //presento
        document.getElementById("respuesta").innerHTML=`Impuesto a la renta a pagar es $${respuesta}`
    }
    antiguedad_en_la_empresa(){
        let respuesta=0
        let num=parseInt(document.getElementById("num").value)

        //calculo
        if (num>5) {
            respuesta=num*0.05
            respuesta=respuesta.toFixed(2)
            document.getElementById("respuesta").innerHTML=`Bono sobre su salario de $${respuesta}`
        }else if(num>0 && num<=5){
            document.getElementById("respuesta").innerHTML=`Tiene pocos años trabajando no obtiene el bono`
        }else{
            document.getElementById("respuesta").innerHTML=`Numero de años incorrectos`
        }
    }   
    envio_con_tarifas_diferente(){
    
        //pido los valores
        let dist=parseFloat(document.getElementById("dist").value)

        //condiciono y presento
        if (dist>0 && dist <= 50) {
            document.getElementById("respuesta").innerHTML=`El costo de envio es de $10`
        }else if(dist > 50){
            document.getElementById("respuesta").innerHTML=`El costo de envio es de $20`
        }else{
            document.getElementById("respuesta").innerHTML=`Distancia ingresada incorrecta`     
        }
    }
    descuento_por_lealtad_del_cliente(){

        //pido los valores
        let num=parseFloat(document.getElementById("num").value)

        //claculo
        if (num> 500) {
            document.getElementById("respuesta").innerHTML=`Obtiene un bono de 10% de descuento en su proxima compra`
        }else if(num<0){
            document.getElementById("respuesta").innerHTML=`Total de compras INCORRECTA`
        }else{
            document.getElementById("respuesta").innerHTML=`Sus compras son menores de $500 no recibe el bono`
        }
    }
    descuento_por_volumen_de_compra(){
        let descuento=0,respuesta=0,subtotal=0,subtotal1=0

        //pido los valores
        let precio=parseFloat(document.getElementById("precio").value)
        let cantidad=parseInt(document.getElementById("cantidad").value)

        //condiciono, calculo y presento
        if (cantidad>10 && cantidad<=50) {
            descuento=0.05
        }else if(cantidad > 50 && cantidad<=100){
            descuento=0.10
        }else if(cantidad>100){
            descuento=0.15
        }

        subtotal=precio*cantidad
        subtotal1=subtotal*descuento
        respuesta=subtotal-subtotal1

        //presento
        document.getElementById("respuesta").innerHTML=`Subtotal = $${subtotal}`
        document.getElementById("respuesta").innerHTML+=`<br>descuento = ${descuento} %`
        document.getElementById("respuesta").innerHTML+=`<br>Total a pagar = $${respuesta}`
    }
    costo_de_servicio(){
        
        //pido los valores
        let hora=parseInt(document.getElementById("hora").value)

        //calculo
        if (hora>10) {
            document.getElementById("respuesta").innerHTML=`Se le aplica un descuento del 10%`
        }else if(hora>0 && hora<10){
            document.getElementById("respuesta").innerHTML=`no se le aplica el descuento del 10%`
        }
    }
}
let operaciones2= new condicionales()

//Bucles
class bucles{
    suma_de_numeros_pares(){
        let respuesta=0

        //sumo
        for (let i = 0; i <=50; i+=2) {
            respuesta = respuesta + i
        }
        //presento
        document.getElementById("respuesta").innerHTML=`La suma de los numeros pares desde 1 hasta 50 es: ${respuesta}`
    }
    tabla_de_multiplicar2(){
        let tabla=0,respuesta=0

        //pido los valores
        tabla=parseInt(document.getElementById("tabla").value)

        document.getElementById("respuesta").innerHTML=``
        for (let i = 0; i <=12; i++) {
            respuesta = tabla * i
            //presento
            document.getElementById("respuesta").innerHTML+=`<br>${i} * ${tabla} = ${respuesta}`
        }
    }
    contador_de_vocales(){
        let respuesta=0,frase=""

        //pido el valor
        frase=document.getElementById("frase").value
        frase=frase.toLowerCase()
        //calculo

        for (let i = 0; i < frase.length; i++) {
            if (frase[i]=="a" || frase[i]=="e" || frase[i]=="i" || frase[i]=="o" || frase[i]=="u") {
                respuesta=respuesta+1
            }
        }
        document.getElementById("respuesta").innerHTML=`La frase tiene ${respuesta} vocales`
    }
    contador_de_digitos(){
        let respuesta=0,frase=""

        //pido el valor
        frase=document.getElementById("frase").value

        //calculo
        for (let i = 0; i < frase.length; i++) {
            if (frase[i]>=0 && frase[i]<=9) {
                respuesta++
            }
        }

        //presento
        document.getElementById("respuesta").innerHTML=`Su frase tiene ${respuesta} digitos`
    }
    adivina_el_numero(){
        let aleatorio = Math.floor(Math.random() * 10) + 1;
        let num = 0;
    
        do {
            // Pido los valores
            num = parseInt(prompt("Adivina el número entre 1 y 10"));
    
            if(num !== aleatorio) {
                document.getElementById("respuesta").innerHTML = "Incorrecto ¡Vuelve a Intentarlo!";
            } else {
                document.getElementById("respuesta").innerHTML = `¡Adivinaste! el número correcto era ${aleatorio}`;
                break; // Salimos del bucle si el número es correcto
            }
        } while(num !== aleatorio);
    }
    contador_de_alfabeto(){
        let respuesta=0

        //pido los valores
        let frase=document.getElementById("frase").value
        frase=frase.toLowerCase()

        //calculo
        for (let i = 0; i < frase.length; i++) {
            if (frase[i]>="a" && frase[i]<="z") {
                respuesta++
            }
        }
        document.getElementById("respuesta").innerHTML = `Su frase tiene ${respuesta} letras`
    }
    suma_de_numeros_impares(){

        let numeros=0,respuesta=0
        
        //calculo
        while (numeros < 100) {
            //incremeto la variable de uno en uno
            numeros=numeros+1
            //condiciono
            if (numeros % 2 ==1) {
                //acumulo la suma de los numeros impares
                respuesta=respuesta+numeros
            }
            
        }
        //presento
        document.getElementById("respuesta").innerHTML = `La suma de los numeros impares del 1-100 es: ${respuesta}`
    }
    contador_de_caracteres(){
        let respuesta=0

        let frase=document.getElementById("frase").value

        for (let i = 0; i < frase.length; i++) {
            if (frase[i]=="!" || frase[i]=="#" || frase[i]=="$" || frase[i]=="%" || frase[i]=="&" || frase[i]=="/" || frase[i]=="(" || frase[i]==")" || frase[i]=="=" || frase[i]=="?" || frase[i]=="¡" || frase[i]=="¿") {
                respuesta++
            }
            
        }
        document.getElementById("respuesta").innerHTML = `Su frase tiene ${respuesta} caracteres`
    }
    suma_de_numeros(){
        let num=0,respuesta=0

        num=parseInt(document.getElementById("num").value)

        while (num >= 0) {
            respuesta=respuesta + num
            num = parseInt(prompt("Ingrese el siguiente número (o un número negativo para terminar):"))
        }
        document.getElementById("respuesta").innerHTML=`La suma de sus numeros es ${respuesta}`
    }
    cuenta_regresiva(){
        let num=0,respuesta=0

        num=parseInt(document.getElementById("num").value)
        document.getElementById("respuesta").innerHTML=``
        document.getElementById("respuesta").innerHTML+=`Cuenta regresiva`

        while (num >= 0) {
            document.getElementById("respuesta").innerHTML+=`<br> ${num}`
            num=num-1
        }
    }
}
let operaciones5= new bucles()

//Arreglos
class arreglos{
    suma_de_elementos(){
        let respuesta=0,num=0

        //pido los valores
        num=document.getElementById("num").value
        //quito
        num=num.split(",")

        //calculo
        for (let i = 0; i < num.length; i++) {
            respuesta=respuesta+parseInt(num[i])
        }

        //presento
        document.getElementById("respuesta").innerHTML=`La suma de los numeros ${num} <br> es: ${respuesta}`
    }
    promedio_de_calificaciones(){
        let promedio="",respuesta=0,suma=0,acu=0

        //pido los valores
        promedio=document.getElementById("promedio").value
        //quito
        promedio=promedio.split(",")

        //calculo
        for (let i = 0; i < promedio.length; i++) {
            suma=suma+parseFloat(promedio[i])
            acu++
        }

        respuesta=suma/acu
        respuesta=respuesta.toFixed(2)
        //presento
        document.getElementById("respuesta").innerHTML=`Promedios ${promedio} <br> Promedio general ${respuesta}`
    }
    mayor_y_menor(){
        let num=0,minimo=0,maximo=0

        num=document.getElementById("num").value
        //quito
        num=num.split(",")

        maximo=parseInt(num[0])
        minimo=parseInt(num[0])

        //calculo
        for (let i = 0; i < num.length; i++) {
            if (minimo > parseInt(num[i])) {
                minimo=num[i]
            }else if(maximo < parseInt(num[i])){
                maximo=num[i]
            }
        }
        //presento
        document.getElementById("respuesta").innerHTML=`Numeros ${num} <br> Minimo = ${minimo} <br> maximo = ${maximo}`
    }
    buscar_un_elemento(){
        let num="",buscar=0,respuesta=0,boleano="falso"

        //pido los valores del arreglo
        num=document.getElementById("num").value
        buscar=parseInt(document.getElementById("buscar").value)

        //quito
        num=num.split(",")

        for (let i = 0; i < num.length; i++) {
            if (buscar === parseInt(num[i])) {
                respuesta=parseInt(num[i])
                boleano="verdadero"
            }
        }
        
        if (boleano=="falso") {
            document.getElementById("respuesta").innerHTML=`El numero ${buscar} no esta exite dentro del arreglo`
        }else if(boleano=="verdadero"){
            document.getElementById("respuesta").innerHTML=`El numero ${buscar} encontrado dento del arreglo `
        }
    }
    contar_elementos_pares(){
        let num="",respuesta=0

        //pido los valores
        num=document.getElementById("num").value
        //quito
        num=num.split(",")

        //calculo
        for (let i = 0; i < num.length; i++) {
            if (num[i] % 2 == 0) {
                respuesta++
            }
        }
        document.getElementById("respuesta").innerHTML=`El arreglo tiene ${respuesta} numeros pares`
    }
    inversion_de_un_arreglo(){
        let num="",respuesta=""

        //pido los valores
        num=document.getElementById("num").value
        //quito
        num=num.split(",")

        //invierto
        for (let i = num.length-1; i >= 0; i--) {
            respuesta+= `${num[i]},`
        }
        //presento
        document.getElementById("respuesta").innerHTML=`inversion <br> [${respuesta}]`
    }
    buscar_el_indice(){
        
        //defino los arreglos
        let numeros= []
        let indices= []

        //coloco 5 numeros randoms en el arreglo
        for (let i = 0; i < 10; i++) {
            numeros[i]= Math.floor(Math.random()*9)+2           
        }

        let buscar=parseInt(document.getElementById("buscar").value)

        //Busco el indice donde se repite el numeros
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] == buscar) {
                indices.push(i)
            }
        }

        //presento segun lo solicitado
        if (indices.length > 1) {
            //si el valor se repite se muestra el arreglo completo
            document.getElementById("respuesta").innerHTML=`El valor se encontro mas de una vez <br> ${numeros}`
        }else if(indices.length == 1){
            //si solo se repite una vez se muestra solo el valor
            document.getElementById("respuesta").innerHTML=`El valor se lo encontro una sola ves <br> ${indices[0]}`
        }else{
            //si no se encuentra el valor 
            document.getElementById("respuesta").innerHTML=`El valor no fue encontrado`
        }
    }
}
let operaciones6 = new arreglos()

//Funciones
class funciones{
    saludar(){
        let respuesta="Hola Programador"

        document.getElementById("respuesta").innerHTML=`${respuesta}`
    }
    sumar(n1,n2){
        let respuesta=0

        //calculo
        respuesta=n1+n2

        //presento
        document.getElementById("respuesta").innerHTML=`La suma es <br> ${n1} + ${n2} = ${respuesta}`
    }
    sumar_dos_numeros(){
        let num1=0,num2=0

       //pido los valores
       num1=parseInt(document.getElementById("num1").value) 
       num2=parseInt(document.getElementById("num2").value) 

       //llamo a la funcion
       this.sumar(num1,num2)
    }
    multiplicar(n1,n2){
        let resultado=0

        resultado=n1 * n2

        //retorno la variable respuesta
        return resultado
    }
    multiplicar_dos_numeros(){
        let num1,num2,respuesta

        //pido los valores
        num1=parseInt(document.getElementById("num1").value)
        num2=parseInt(document.getElementById("num2").value)

        //llamo a la funcion
        respuesta=this.multiplicar(num1,num2)

        //presento
        document.getElementById("respuesta").innerHTML=`${num1} * ${num2} = ${respuesta}`
    }
    par_o_impar(n1){
        //condiciono
        if(n1 % 2 ==0){
            document.getElementById("respuesta").innerHTML=`El numero ${n1} es par`
        }else{
            document.getElementById("respuesta").innerHTML=`El numero ${n1} es impar`
        }
    }
    funcion_numero_par_o_impar(){
        let num

        //pido los valores
        num=parseInt(document.getElementById("num").value)

        //llamo a la funcion
        this.par_o_impar(num)
    }
    area(n1,n2){
        let resultado

        resultado=n1 * n2
        return resultado
    }
    area_de_un_rectangulo(){
        let base,altura,respuesta

        //pido los valores
        base=parseInt(document.getElementById("base").value)
        altura=parseInt(document.getElementById("altura").value)

        //lamo a la funcion
        respuesta=this.area(base,altura)

        //presento
        document.getElementById("respuesta").innerHTML=`El area del rectangulo es ${respuesta}`
    }
    imprimir_nombre(){
        let nombre=""

        //Pido los valores
        nombre=document.getElementById("nombre").value

        document.getElementById("respuesta").innerHTML=`Su nombre es ${nombre}`
    }
    convertidor(n1){
        let resultado=0

        resultado=(n1*9/5)+32

        //retorno el valor
        return resultado
    }
    grados_celsius_a_fahrenheit(){
        let num=0,respuesta=0

        //pido los valores
        num=parseFloat(document.getElementById("num").value)

        //lamo a la funcion
        respuesta=this.convertidor(num)

        //presento
        document.getElementById("respuesta").innerHTML=`Fahrenheit = ${respuesta}`
    }
    contador(f1,f2){
        let cont=0

        //se calcula
        for (let i = 0; i < f1.length; i++) {   
            if (f2.includes(f1[i])) {
                cont++
            }
        }

        //presento
        document.getElementById("respuesta").innerHTML=`Su frase tiene ${cont} caracteres`
    }
    contar_caracter_en_un_frase(){
        let frase="",caracteres

        caracteres=["!","#","$","%","&","/","(",")","=","?","¿","¡","+","-","*"]
        //pido los valores
        frase=document.getElementById("frase").value

        //llamo a la funcion
        this.contador(frase,caracteres)
    }
    presentar(n1){
        let respuesta

        document.getElementById("respuesta").innerHTML =``
        //recorro el arreglo y lo presento
        for (let i = 0; i < n1.length; i++) {
            console.log("[",n1[i],"]")
            document.getElementById("respuesta").innerHTML +=`${n1[i]}-`
            
        }
    }
    imprimir_numeros(){
        let numeros=0

        //inicio el arreglo
        numeros=[1,2,3,4,5,6,7,8,9,10]

        //llamo a la funcion
        this.presentar(numeros)
    }
    calcular(n1){
        let acu=0

        for (let i = 0; i < n1.length; i++) {
            acu=acu+parseInt(n1[i]) 
        }
        
        return acu
    }
    sumar_una_lista_de_numeros(){
        let numeros,respuesta

        //pido los valores
        numeros=document.getElementById("numeros").value
        //quito 
        numeros=numeros.split(",")

        //llamo a la funcion
        respuesta=this.calcular(numeros)

        //presento
        document.getElementById("respuesta").innerHTML=`La suma de los numeros[${numeros}] = ${respuesta}`
    }
}
let operaciones3= new funciones()
