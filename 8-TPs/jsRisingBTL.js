/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 //validación de edad
 var edad=prompt("Ingrese su edad entre 18 y 90 años");
 while(edad<18 || edad>90 || isNaN(edad))
 	{
 		alert("Edad no permitida");
 		edad=prompt("Vuelva a ingresar su edad");
 	}
 document.getElementById('Edad').value=edad;

 //validación de sexo
 var sexo=prompt("ingrese su sexo, m para masculino o f para femenino");
 while(sexo!="m" && sexo!="f")
 	{
 	alert("El sexo ingresado no es correcto");
 	sexo=prompt("Ingrese m o f");
 	}
 document.getElementById('Sexo').value=sexo;

 //validación de estado civil
 var estado=prompt("Ingrese su estado civil siendo 1=soltero, 2=casado, 3=divorsiado, 4=viudo");
 while(estado!="1" && estado!="2" && estado!="3" && estado!="4")
 	{
 	alert("Estado civil no permitido");
 	estado=prompt("ingrese 1, 2, 3 o 4");
 	}
 	switch(estado)
 	{
 		case "1":
 		document.getElementById('EstadoCivil').value="Soltero";
 		break;

 		case "2":
 		document.getElementById('EstadoCivil').value="Casado";
 		break;

 		case "3":
 		document.getElementById('EstadoCivil').value="Divorciado";
 		break;

 		case "4":
 		document.getElementById('EstadoCivil').value="Viudo";
 		break;
 	}

 	//Validación de sueldo bruto
 	var sueldo=prompt("Ingrese sueldo bruto igual o mayor a 8000");
 	while(sueldo<8000)
 		{
 			alert("Debe ingresar un sueldo mayor a 8000");
 			sueldo=prompt("Ingrese el sueldo nuevamente");
 		}

 		document.getElementById('Sueldo').value=sueldo;

 	//Validación de legajo
 	var legajo=prompt("Ingrese número de legajo, el cual debe tener 4 dígitos y no debe comenzar con 0");
 	


 	//Validación de nacionalidad
 	var nacionalidad=prompt("ingrese su nacionalidad, siendo: A=Argentino, E=Extranjero, N=Nacionalizado");
 	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
 		{
 			alert("Ingresó una  nacionalidad incorrecta");
 			nacionalidad=prompt("ingrese A, E o N");
 		}

 	switch(nacionalidad)
 		{
 			case "A":
 			document.getElementById('Nacionalidad').value="Argentino";
 			break;

 			case "B":
 			document.getElementById('Nacionalidad').value="Extranjero";
 			break;

 			case "C":
 			document.getElementById('Nacionalidad').value="Nacionalizado";
 			break;

 		}

}	
