
var numero1 = 19
function tempo1()
{
    if(numero1>=10)
    {
      document.getElementById("tiempo").style.width = "20%"
      document.getElementById("tiempo").style.marginLeft = "40%"
        //Este comando funciona para números de dos dígitos
        document.getElementById("tiempo").textContent = "00:" + numero1
        
    }
    else if(numero1>0) 
    {
        //Este comando funciona para números de 1 dígito
        document.getElementById("tiempo").style.width = "20%"
        document.getElementById("tiempo").style.marginLeft = "40%"
        document.getElementById("tiempo").textContent = "00:0" + numero1
    }
    else if(numero1==0)
    {
      document.getElementById("tiempo").style.width = "20%"
      document.getElementById("tiempo").style.marginLeft = "40%"
      document.getElementById("tiempo").textContent = "Tiempo agotado"
      
    arreglar (numero_pregunta,3)
}

    numero1--    
    setTimeout(tempo1,1000)
}


var total= 0
var numero_pregunta = 0

function tema_1() {

document.getElementById("contenido_2").style.display = "none"
document.getElementById("contenido_3").style.display = "contents"
arreglar(0,4)
tempo1()
}



//Arreglo que contiene las preguntas
var preguntas = ["¿Quien creo la serie Rick y Morty?",
"¿En que fecha se estreno la serie de Rick y Morty?",
"¿Que profesion tiene Rick Sanchez?",
"¿Que edad tiene Morty?"]  

//Arreglo que contiene las alternativas
var alternativas = [["a) Spencer Grammer.","b) Johnny Knoxville.","c) Chris Parnell.","d) Justin Roiland."],
["a) 2 de Diciembre de 2013", "b) 3 de Diciembre de 2015", "c) 7 de Mayo de 2013","d) 20 de Enero de 2010" ],
["a) Psicologo","b) Cientifico","c) Doctor", "d) Astronauta"],
[ "a) 19 años","b) 16 años","c) 14 años","d) 18 años"]]

//Arreglo que contiene los puntajes
var puntajes = [[0,0,0,5],
[5,0,0,0],
[0,5,0,0],
[0,0,5,0]]

function arreglar(numero,alter)
{
numero1 = 20
//Verificamos si ya mostramos la última pregunta
if(numero==4)
{
document.getElementById("contenido_3").style.display = "none"
document.getElementById("final_js").style.display = "contents"
} 
else
{
//Cambiamos el contenido textual de la pregunta
document.getElementById("pregunta").textContent = preguntas[numero]

//Cambiamos loscontenidos textuales de las alternativas
document.getElementById("alternativa1").textContent = alternativas[numero][0]
document.getElementById("alternativa2").textContent = alternativas[numero][1]
document.getElementById("alternativa3").textContent = alternativas[numero][2]
document.getElementById("alternativa4").textContent = alternativas[numero][3]
}

//actualizamos el puntaje
if(alter!=4)
{
total = total + puntajes[numero-1][alter]
}

//actualizamos el número de pregunta actual
numero_pregunta = numero_pregunta + 1

//muestro el puntaje
document.getElementById("puntuacion").textContent =  total + " puntos"
}
//Código principal
