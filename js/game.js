$.getJSON("Pokemon.json", function(data){

	var CharizardName = data.Pokemon[0].Name,
		CharizardLVL = data.Pokemon[0].Level,
		CharizardTipe = data.Pokemon[0].Tipe,
		CharizardAtk = data.Pokemon[0].Atk,
		CharizardSpatk = data.Pokemon[0].Spatk,
		CharizardDef =	data.Pokemon[0].Defense,
		CharizardSpdef = data.Pokemon[0].Spdef,
		CharizardHP = data.Pokemon[0].Hp,
		CharizardAttakcSet = data.Pokemon[0].AttackSet;

	var MewtwoName = data.Pokemon[1].Name,
		MewtwoHP = data.Pokemon[1].Hp,
		MewtwoLVL = data.Pokemon[1].Level,
		MewtwoTipe = data.Pokemon[1].Tipe,
		MewtwoAtk= data.Pokemon[1].Atk,
		MewtwoSpatk = data.Pokemon[1].Spatk,
		MewtwoDef = data.Pokemon[1].Defense,
		MewtwoSpdef = data.Pokemon[1].Spdef,
		MewtwoHp = data.Pokemon[1].Hp,
		MewtwoHAttackSet = data.Pokemon[1].AttackSet;

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

	function aleatorio(minimo, maximo)
	{
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
		return numero;
	}

	$(".ataques").on("click", function()
		{
			var A = aleatorio(85, 100);
			var valor = aleatorio(0, 3);
			console.log("entra en la funcion");
		    if(MewtwoHAttackSet[valor].AttackTipe == "Especial" && MewtwoHAttackSet[valor].PPactual > 0)
		    {
		    	var B = 1.5;
			    var daño = (0.01* B* 1*A*((0.2* MewtwoLVL + 1)*(MewtwoSpatk * MewtwoHAttackSet[valor].Potencia)/(25 * CharizardSpdef)) + 2);
			    CharizardHP -= Math.round(daño);
				MewtwoHAttackSet[valor].PPactual -= 1;
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
		    else if(MewtwoHAttackSet[valor].AttackTipe == "Fisico"  && MewtwoHAttackSet[valor].PPactual > 0)
		    {
		    	var B = 1;
				var daño = (0.01* B* 1*A*((0.2* CharizardLVL + 1)*(CharizardAtk * MewtwoHAttackSet[valor].Potencia)/(25 * MewtwoDef)) + 2);
				MewtwoHP -= Math.round(daño);
			    MewtwoHAttackSet[valor].PPactual -= 1;
			    console.log("entra en la condicion Fisico");
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
		    else
		    {
			    MewtwoHAttackSet[valor].PPactual = "0";
			    alert("Mewtwo ha intentado usar un ataque, pero ya no tiene muchas energias para hacerlo");
		    }
		}
	);

	$(".ataque").each(function(){
          // Definimos una variable valor usando como dato el atributo value
			var valor = $(this).attr("value");
          // ejecutamos la función click sobre el elemento que estamos clickando
			$(this).click(function(){
           		event.preventDefault();
			    var A = aleatorio(85, 100);

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
			});
		});
	imprimirDatosPokemon();

});
