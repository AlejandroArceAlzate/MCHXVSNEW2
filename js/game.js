var Pokemon = function(t, l, hp, atk, def, spatk, spdef, speed)
{
	this.Tipe = t;
	this.Level= l;
	this.Hp = hp;
	this.Atk= atk;
	this.Defense = def;
	this.Spatk = spatk;
	this.Spdef = spdef;
	this.Speed = speed;

}

var ataque = function(N, P, Prec, PPA, PPT)
{
	this.Nombre = N;
	this.Potencia = P;
	this.Precision = Prec;
	this.PPactual = PPA;
	this.PPtotal = PPT;
}

var Charizard = new Pokemon("Fuego-Dragon", 100, 360, 394, 353, 394, 295, 328);
var Mewtwo = new Pokemon("Psiquico", 100, 416, 350, 306, 447, 306, 394);

var llamarada = new ataque("FireBlast", 100, 85, 5, 5);
var cuchillada = new ataque("Slash", 70, 100, 20, 20);
var rapidez = new ataque("Swift", 60, 100, 20, 20);
var megapatada = new ataque("MegaKick", 120, 75, 5, 5);

function imprimirDatosPokemon()
{
	

	$("#NombreCharizard").text("Charizard");
	$("#CharizardHP").text("HP: " + Charizard.Hp);
	$("#CharizardLVL").text("LVL: " + Charizard.Level);
	$("#CharizardTipo").text("Tipo: " + Charizard.Tipe);

	$("#NombreMewtwo").text("Mewtwo");
	$("#MewtwoHP").text("HP: " + Mewtwo.Hp);
	$("#MewtwoLVL").text("LVL: " + Mewtwo.Level);
	$("#MewtwoTipo").text("Tipo: " + Mewtwo.Tipe);

}


function imprimirAtaques()
{
	$("#ataque1nombre").text(llamarada.Nombre);
	$("#pp1actual").text(llamarada.PPactual);
	$("#pp1total").text("/" + llamarada.PPtotal);

	$("#ataque2nombre").text(cuchillada.Nombre);
	$("#pp2actual").text(cuchillada.PPactual);
	$("#pp2total").text("/" + cuchillada.PPtotal);

	$("#ataque4nombre").text(rapidez.Nombre);
	$("#pp4actual").text(rapidez.PPactual);
	$("#pp4total").text("/" + rapidez.PPtotal);

	$("#ataque3nombre").text(megapatada.Nombre);
	$("#pp3actual").text(megapatada.PPactual);
	$("#pp3total").text("/" + megapatada.PPtotal);
}

function atacarConSpatk()
{
	if(llamarada.PPactual > 0)
	{
		var B = 1.5
		var daño = (0.01* B* 1*85*((0.2* Charizard.Level + 1)*(Charizard.Spatk * llamarada.Potencia)/(25 * Mewtwo.Spdef)) + 2);

		Mewtwo.Hp -= Math.round(daño);
		llamarada.PPactual -= 1;

		if(Mewtwo.Hp <= 0)
		{
			Mewtwo.Hp = "Fainted";
			$("#MewtwoHP").text("HP: " + Mewtwo.Hp);
			alert("Haz Derrotado a Mewtwo, FELICIDADES!!!!");
		}
	}
	else
	{
		
		llamarada.PPactual = "0";
		$("#pp1actual").text(llamarada.PPactual);
		alert("Ya no puedes usar mas ese ataque!");
	}

	imprimirDatosPokemon();
	imprimirAtaques();
}

imprimirDatosPokemon();
imprimirAtaques();

$(".ataque1").on("click", atacarConLlamarada);