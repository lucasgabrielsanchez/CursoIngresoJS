function Mostrar()
{	
	var contador=0
	while (1)
	{
		contador=contador+1;
		if(contador==3)
		{
			continue;
		}
		alert("while "+contador);
		if(contador==6)
		{
			break;
		}
		alert("FIN "+ contador);
	}


	//ejemplo de while con true
	/*var contador=0;

	while (true)
	{
		alert('Número '+contador);

		contador=contador+1;

		if (contador==3)
		{
			break;
		}
		
	}*/


	/*while (contador<3) //forma errónea de hacerlo

	/*if (contador<10) 
	{
		alert('Número '+contador);

		contador=contador+1;
	}

	if (contador<10)
	{
		alert('Número '+contador);

		contador=contador+1;
	}

	if (contador<10)
	{
		alert('Número '+contador);

		contador=contador+1;
	}*/
}//FIN DE LA FUNCIÓN