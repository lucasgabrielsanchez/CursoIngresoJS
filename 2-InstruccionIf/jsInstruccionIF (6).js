function Mostrar()
{
//tomo la edad
/*var edad=document.getElementById('edad').value;
if (edad>17)
	{alert("Usted es mayor de edad")}
	else
	{if (edad<18&&edad>12)
		alert("Usted es adolescente")
			else
				{if (edad<13)
					{alert("Usted es menor de edad")}
				}
	}
*/

/*var edad=document.getElementById('edad').value;
if (edad>17)
	{alert("Usted es mayor de edad")}

	{if (edad<18&&edad>12)
		alert("Usted es adolescente")
			
				{if (edad<13)
					{alert("Usted es menor de edad")}
				}
	}
*/
var edad=document.getElementById('edad').value;
if (edad<13)
	{alert("Usted es menor");}
if (edad<17&&edad>12)
	{alert("Usted es adolescente")}

}//FIN DE LA FUNCIÓN