/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//calculamos el perímetro de un rectángulo y lo multiplicamos por 3 para obtener la cantidad de alambre necesaria.
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var resultado=((largo*2)+(ancho*2))*3;
	alert("La cantidad necesaria de alambre para hacer 3 hiladas en este terreno es de "+resultado+" metros.");
}
function Circulo () 
{
	//calculamos el perímetro de un círculo y lo multiplicamos por 3 para obtener la cantidad de alambre necesaria.
	var radio=document.getElementById('Radio').value;
	var resultado=2*3.14*radio;
	alert("La cantidad necesaria de alambre para hacer 3 hiladas en este terreno es de "+resultado+" metros.");
}
function Materiales () 
{
	//calculamos la superficie del rectángulo para saber cuantos metros cuadrados tiene y por ende, saber cuantas bolsas de
	//cemento y cal necesitamos.
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var metrosCuadrados=largo*ancho;
	//multiplicamos los metros cuadrados por la cantidad de bolsas necesarias por metro. Usamos 2 variables (cal y cemento).
	var bolsaCemento=metrosCuadrados*2;
	var bolsaCal=metrosCuadrados*3;
	alert("Para hacer un contrapiso en este terreno, se necesitan "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal.");
}