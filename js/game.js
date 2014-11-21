$.getJSON("Pokemon.json", function(data){
	// Estadisticas Charizard
	var CharizardName = data.Pokemon[0].Name,
		CharizardLVL = data.Pokemon[0].Level,
		CharizardTipe = data.Pokemon[0].Tipe,
		CharizardAtk = data.Pokemon[0].Atk,
		CharizardSpatk = data.Pokemon[0].Spatk,
		CharizardDef =	data.Pokemon[0].Defense,
		CharizardSpdef = data.Pokemon[0].Spdef,
		CharizardHP = data.Pokemon[0].Hp,
		CharizardAttakcSet = data.Pokemon[0].AttackSet;
	// Estadisticas Mewtwo
	var MewtwoName = data.Pokemon[1].Name,
		MewtwoHP = data.Pokemon[1].Hp,
		MewtwoLVL = data.Pokemon[1].Level,
		MewtwoTipe = data.Pokemon[1].Tipe,
		MewtwoAtk= data.Pokemon[1].Atk,
		MewtwoSpatk = data.Pokemon[1].Spatk,
		MewtwoDef = data.Pokemon[1].Defense,
		MewtwoSpdef = data.Pokemon[1].Spdef,
		MewtwoHp = data.Pokemon[1].Hp,
		MewtwoAttackSet = data.Pokemon[1].AttackSet;
	// Consumibles
	var Pocion = 3,
		Pokebola = 10;

	//Funcion para imprimir los datos de los pokemon en la pantalla
	function imprimirDatosPokemon()
	{

		$("#NombreCharizard").text(CharizardName);
		$("#CharizardHP").text("HP: " + CharizardHP);
		$("#CharizardLVL").text("LVL: " + CharizardLVL);
		$("#CharizardTipo").text("Tipo: " + CharizardTipe);

		$("#ataque1nombre").text(data.Pokemon[0].AttackSet[0].AttackName);
		$("#pp0actual").text(data.Pokemon[0].AttackSet[0].PPactual);
		$("#pp0total").text("/" + data.Pokemon[0].AttackSet[0].PPtotal);

		$("#ataque2nombre").text(data.Pokemon[0].AttackSet[1].AttackName);
		$("#pp1actual").text(data.Pokemon[0].AttackSet[1].PPactual);
		$("#pp1total").text("/" + data.Pokemon[0].AttackSet[1].PPtotal);

		$("#ataque3nombre").text(data.Pokemon[0].AttackSet[2].AttackName);
		$("#pp2actual").text(data.Pokemon[0].AttackSet[2].PPactual);
		$("#pp2total").text("/" + data.Pokemon[0].AttackSet[2].PPtotal);

		$("#ataque4nombre").text(data.Pokemon[0].AttackSet[3].AttackName);
		$("#pp3actual").text(data.Pokemon[0].AttackSet[3].PPactual);
		$("#pp3total").text("/" + data.Pokemon[0].AttackSet[3].PPtotal);

		$("#NombreMewtwo").text(MewtwoName);
		$("#MewtwoHP").text("HP: " + MewtwoHP);
		$("#MewtwoLVL").text("LVL: " + MewtwoLVL);
		$("#MewtwoTipo").text("Tipo: " + MewtwoTipe);
	}
	//Funcion para sacar numeros aleatorios, que sera usada en varias de las formulas
	function aleatorio(minimo, maximo)
	{
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
		return numero;
	}
	//Funcion para cuando Mewtwo ataca
	$(".ataques").on("click", function MewtwoAtaca()
		{
			var A = aleatorio(85, 100);
			var valor = aleatorio(0, 3);
			console.log("entra en la funcion");
			if(MewtwoHP > 0)
		    {
			    if(MewtwoAttackSet[valor].AttackTipe == "Especial" && MewtwoAttackSet[valor].PPactual > 0)
			    {
			    	var B = 1.5;
				    var daño = (0.01* B* 1*A*((0.2* MewtwoLVL + 1)*(MewtwoSpatk * MewtwoAttackSet[valor].Potencia)/(25 * CharizardSpdef)) + 2);
				    CharizardHP -= Math.round(daño);
					MewtwoAttackSet[valor].PPactual -= 1;
					console.log("entra en la condicion Especial");
				    if(CharizardHP > 0)
				    {
					    $("#CharizardHP").text("HP: " + CharizardHP);
				    }
				    else
				    {
				    	$("#CharizardHP").text("HP: Fainted");
				    	alert("Mewtwo te ha derrotado");
				    }
			    }
			    else if(MewtwoAttackSet[valor].AttackTipe == "Fisico"  && MewtwoAttackSet[valor].PPactual > 0)
			    {
			    	var B = 1;
					var daño = (0.01* B* 1*A*((0.2* MewtwoLVL + 1)*(MewtwoAtk * MewtwoAttackSet[valor].Potencia)/(25 * CharizardDef)) + 2);
					CharizardHP -= Math.round(daño);
				    MewtwoAttackSet[valor].PPactual -= 1;
				    console.log("entra en la condicion Fisico");
				    console.log(MewtwoAttackSet[valor].AttackTipe);
				    console.log(MewtwoAttackSet[valor].AttackName);
				    console.log(MewtwoAttackSet[valor].Potencia);
				    console.log(daño);

				    if(CharizardHP > 0)
				    {
					    $("#CharizardHP").text("HP: " + CharizardHP);
				    }
				    else
				    {
				    	$("#CharizardHP").text("HP: Fainted");
				    	alert("Mewtwo te ha derrotado");
				    }
			    }
			    else if(MewtwoAttackSet[valor].AttackTipe == "Otro" && MewtwoAttackSet[valor].PPactual > 0)
			    {
			    	if(MewtwoHP >0 && MewtwoHP < 416)
			    	{
				    	MewtwoHP += 150;
				    	MewtwoAttackSet[valor].PPactual -= 1;
				    	if(MewtwoHP > 416)
				    		MewtwoHP = 416; 
					    console.log(MewtwoAttackSet[valor].AttackName);
				    	$("#MewtwoHP").text("HP: " + MewtwoHP);
			    	}
			    	else
			    	{
			    		console.log("Mewtwo a intentado usar " + MewtwoAttackSet[valor].AttackName + " pero fallo..");
			    	}
			    }
			    else
			    {
				    MewtwoAttackSet[valor].PPactual = "0";
				    alert("Mewtwo ha intentado usar "+ MewtwoAttackSet[valor].AttackName +" pero ya no tiene muchas energias para hacerlo");
			    }
		    }
		}
	);
	//Funcion para cuando Charizard ataca
	$(".ataque").each(function CharizardAtaca()
		{
          // Definimos una variable valor usando como dato el atributo value
			var valor = $(this).attr("value");
          // ejecutamos la función click sobre el elemento que estamos clickando
			$(this).click(function(){
           		event.preventDefault();
			    var A = aleatorio(85, 100);
			    if(CharizardHP > 0)
		    	{
				    if(CharizardAttakcSet[valor].AttackTipe == "Especial" && CharizardAttakcSet[valor].PPactual > 0)
				    {
				    	var B = 1.5;
					    var daño = (0.01* B* 1*A*((0.2* CharizardLVL + 1)*(CharizardSpatk * CharizardAttakcSet[valor].Potencia)/(25 * MewtwoSpdef)) + 2);
					    MewtwoHP -= Math.round(daño);
						CharizardAttakcSet[valor].PPactual -= 1;

					    if(MewtwoHP > 0)
					    {
						    $("#MewtwoHP").text("HP: " + MewtwoHP);
						    $("#pp"+[valor]+"actual").text(CharizardAttakcSet[valor].PPactual);
					    }
					    else
					    {
					    	$("#MewtwoHP").text("HP: Fainted");
					    	$("#pp"+[valor]+"actual").text(CharizardAttakcSet[valor].PPactual);
					    	alert("Lo haz logrado!, HAZ VENCIDO A MEWTWO!!");
					    }
				    }
				    else if(CharizardAttakcSet[valor].AttackTipe == "Fisico"  && CharizardAttakcSet[valor].PPactual > 0)
				    {
				    	var B = 1;
						var daño = (0.01* B* 1*A*((0.2* CharizardLVL + 1)*(CharizardAtk * CharizardAttakcSet[valor].Potencia)/(25 * MewtwoDef)) + 2);
						MewtwoHP -= Math.round(daño);
					    CharizardAttakcSet[valor].PPactual -= 1;

					    if(MewtwoHP > 0)
					    {
						   
						    $("#MewtwoHP").text("HP: " + MewtwoHP);
						    $("#pp"+[valor]+"actual").text(CharizardAttakcSet[valor].PPactual);
					    }
					    else
					    {
					    	$("#MewtwoHP").text("HP: Fainted");
					    	$("#pp"+[valor]+"actual").text(CharizardAttakcSet[valor].PPactual);
					    	alert("Lo haz logrado!, HAZ VENCIDO A MEWTWO!!");
					    }
				    } 
				    else
				    {
					    CharizardAttakcSet[valor].PPactual = "0";
					    $("#pp"+[valor]+"actual").text(CharizardAttakcSet[valor].PPactual);
					    alert("Ya no puedes usar mas ese ataque!");
				    }
		    	}
			});
		});
	//Funcion para el uso de pociones
	$(".pocion").on("click", function Pociones(){
		
		event.preventDefault();
		
		
		if(CharizardHP >0 && CharizardHP < 416 && Pocion > 0)
		{
	    	CharizardHP += 150;
	    	Pocion -= 1;
	    	console.log(Pocion);
	    	if(CharizardHP > 360)
	    		CharizardHP = 360; 
	    	$("#CharizardHP").text("HP: " + CharizardHP);
    	}
    	else
    	{
    		alert("Intentaste usar una pocion, pero fallaste..");
    	}
	})

	//Funcion para el uso de las pokebolas
	$(".pokebola").on("click", function AtraparMewtwo(){

		if(MewtwoHP > 0 && CharizardHP > 0 && Pokebola > 0)
    	{
    		if(MewtwoHP >= 400)
    		{
    			probabilidad = aleatorio(0, 99);
    			if(probabilidad == 1)
    			{
    				$("#CharizardHP").text("HP: Victory!");
    				$("#MewtwoHP").text("HP: Catched!");
				    alert("Lo haz logrado, haz atrapado a Mewtwo!!");
    			}
    			else
    			{
    				Pokebola -= 1;
    				alert("Usaste una Pokebola... pero Mewtwo se ha escapado!");
    			}
    		}
    		else if(MewtwoHP >= 200 && MewtwoHP < 400)
    		{
    			probabilidad = aleatorio(0, 24);
    			if(probabilidad == 1)
    			{
    				$("#CharizardHP").text("HP: Victory!");
    				$("#MewtwoHP").text("HP: Catched!");
				    alert("Lo haz logrado, haz atrapado a Mewtwo!!");
    			}
    			else
    			{
    				Pokebola -= 1;
    				alert("Usaste una Pokebola... pero Mewtwo se ha escapado!");
    			}
    		}
    		else if(MewtwoHP >= 50 && MewtwoHP < 200)
    		{
    			probabilidad = aleatorio(0, 9);
    			if(probabilidad == 1)
    			{
    				$("#CharizardHP").text("HP: Victory!");
    				$("#MewtwoHP").text("HP: Catched!");
				    alert("Lo haz logrado, haz atrapado a Mewtwo!!");
    			}
    			else
    			{
    				Pokebola -= 1;
    				alert("Usaste una Pokebola... pero Mewtwo se ha escapado!");
    			}
    		}
    		else if(MewtwoHP < 50)
    		{
    			probabilidad = aleatorio(0, 6);
    			if(probabilidad == 1)
    			{
    				$("#CharizardHP").text("HP: Victory!");
    				$("#MewtwoHP").text("HP: Catched!");
				    alert("Lo haz logrado, haz atrapado a Mewtwo!!");
    			}
    			else
    			{
    				Pokebola -= 1;
    				alert("Usaste una Pokebola... pero Mewtwo se ha escapado!");
    			}
    		}
    	}
    	else
    	{
    		alert("No puedes usar la Pokebola!")
    	}
    	console.log("la probabilidad fue " + probabilidad);
    	console.log("te quedan " + Pokebola);
	})
    	
	imprimirDatosPokemon();

});
