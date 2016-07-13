function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
//alert (mesDelAño);
switch (mesDelAño)
	{
	case "Febrero":
		alert("Este mes tiene 28 o 29 días")
	break;
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert("Este mes tiene 31 días")
	break;
	default:
		alert("Este mes tiene 30 días");
	break;
	}
	



}//FIN DE LA FUNCIÓN