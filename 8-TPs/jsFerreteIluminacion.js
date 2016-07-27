/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var cantidad=document.getElementById('Cantidad').value;
var marca=document.getElementById('Marca').value;
var descuento=1//le pongo a la variable un valor inicial de 1 para los casos en los que no se aplica un descuento como ser cuando se eligen 1 o 2 lámparas, para que la función que está más abajo: (var precioDescuento=precioBruto*descuento) funcione y me dé el valor sin descuento de 1 ó 2 lámparas.
var precioBruto=35*cantidad;//el precioBruto es lo que salen las lámparas sin el descuento.
switch(cantidad)
{//comienzo del switch
	case "1":
	case "2":
		{
			//no pongo nada para que al salir del switch, la función que está mas abajo: (var precioDescuento=precioBruto*descuento) me dé el valor de 1 ó 2 lámparas sin descuento.
		}
	break;

	case "3":
		{
			if(marca=="ArgentinaLuz")
				{
					descuento=0.85;
				}
			else
				{
					if(marca=="FelipeLamparas")
						{
							descuento=0.90;
						}
					else
						{
							descuento=0.95;
						}
				}
		}
	break;

	case "4":
		{
			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					descuento=0.75;
				}
			else
				{
					descuento=0.80;
				}
		}
	break;

	case "5":
		{
			if(marca=="ArgentinaLuz")
				{
				descuento=0.60;
				}
			else
				{
				descuento=0.70;
				}
		}
	break;

	default:
		{
			descuento=0.50;
		}
	break;
}//fin del switch

var precioDescuento=precioBruto*descuento;//esta función me dá el descuento con la cantdad establecida.
document.getElementById('precioDescuento').value=precioDescuento;


if(precioDescuento>120)
	{
		var impuesto=precioDescuento*0.10;
		alert("Usted pagó $"+impuesto+" de IIBB");
	}
}//fin de la función
