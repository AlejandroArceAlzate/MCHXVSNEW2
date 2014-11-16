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
}

function atacarConLlamarada()
{
	var daño = 200;

	Mewtwo.Hp -= Math.round(daño);

	if(Mewtwo.Hp <= 0)
	{
		Mewtwo.Hp = "Fainted";
		$("#MewtwoHP").text("HP: " + Mewtwo.Hp);
		alert("Haz Derrotado a Mewtwo, FELICIDADES!!!!");
	}

	imprimirDatosPokemon();
}

imprimirDatosPokemon();
imprimirAtaques();

$(".ataque1").on("click", atacarConLlamarada);