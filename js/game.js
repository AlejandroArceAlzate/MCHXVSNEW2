$.getJSON("Pokemon.json", function(data){

	var PPactual = data.Pokemon[0].AttackSet[0].AttackName;
	var Level = data.Pokemon[0].Level;
	var Atk = data.Pokemon[0].Atk;
	var Spatk = data.Pokemon[0].Spatk;
	var Def = data.Pokemon[1].Defense;
	var Spdef = data.Pokemon[1].Spdef
	var PotenciaAtaque = data.Pokemon[0].AttackSet[0].Potencia;
	var Hp = data.Pokemon[1].Hp;

	$("#NombreCharizard").text(data.Pokemon[0].Name);
	$("#CharizardHP").text("HP: " + data.Pokemon[0].Hp);
	$("#CharizardLVL").text("LVL: " + data.Pokemon[0].Level);
	$("#CharizardTipo").text("Tipo: " + data.Pokemon[0].Tipe);

	$("#ataque1nombre").text(data.Pokemon[0].AttackSet[0].AttackName);
	$("#pp1actual").text(data.Pokemon[0].AttackSet[0].PPactual);
	$("#pp1total").text("/" + data.Pokemon[0].AttackSet[0].PPtotal);

	$("#ataque2nombre").text(data.Pokemon[0].AttackSet[1].AttackName);
	$("#pp2actual").text(data.Pokemon[0].AttackSet[1].PPactual);
	$("#pp2total").text("/" + data.Pokemon[0].AttackSet[1].PPtotal);

	$("#ataque3nombre").text(data.Pokemon[0].AttackSet[2].AttackName);
	$("#pp3actual").text(data.Pokemon[0].AttackSet[2].PPactual);
	$("#pp3total").text("/" + data.Pokemon[0].AttackSet[2].PPtotal);

	$("#ataque4nombre").text(data.Pokemon[0].AttackSet[3].AttackName);
	$("#pp4actual").text(data.Pokemon[0].AttackSet[3].PPactual);
	$("#pp4total").text("/" + data.Pokemon[0].AttackSet[3].PPtotal);

	$("#NombreMewtwo").text(data.Pokemon[1].Name);
	$("#MewtwoHP").text("HP: " + data.Pokemon[1].Hp);
	$("#MewtwoLVL").text("LVL: " + data.Pokemon[1].Level);
	$("#MewtwoTipo").text("Tipo: " + data.Pokemon[1].Tipe);

	function aleatorio(minimo, maximo)
	{
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
		return numero;
	}

	function CharizardAtaca(event, ataque)
	{
		event.preventDefault();
		var ataque = data.Pokemon[0].AttackSet[0];
		console.log(ataque); 
		if(PPactual > 0)
		{
			var B = 1.5;
			var A = aleatorio(85, 100);
			var daño = (0.01* B* 1*A*((0.2* Level + 1)*(Spatk * PotenciaAtaque)/(25 * Spdef)) + 2);

			Hp -= Math.round(daño);
			PPactual -= 1;
			$("#MewtwoHP").text("HP: " + Hp);
			$("#pp1actual").text(PPactual);
		}
		else
		{
			
			PPactual = "0";
			$("#pp1actual").text(PPactual);
			alert("Ya no puedes usar mas ese ataque!");
		}	
				
	}

	$(".ataque1").on("click", CharizardAtaca);

});
	