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

function imprimirDatosPokemon()
{
	var Charizard = new Pokemon("Fuego-Dragon", 100, 360, 394, 353, 394, 295, 328);
	var Mewtwo = new Pokemon("Psiquico", 100, 416, 350, 306, 447, 306, 394);

	$("#NombreCharizard").text("Charizard");
	$("#CharizardHP").text("HP: " + Charizard.Hp);
	$("#CharizardLVL").text("LVL: " + Charizard.Level);
	$("#CharizardTipo").text("Tipo: " + Charizard.Tipe);

	$("#NombreMewtwo").text("Mewtwo");
	$("#MewtwoHP").text("HP: " + Mewtwo.Hp);
	$("#MewtwoLVL").text("LVL: " + Mewtwo.Level);
	$("#MewtwoTipo").text("Tipo: " + Mewtwo.Tipe);



}

var ataque = function(N, P, Prec, PPA, PPT)
	{
		this.Nombre = N;
		this.Potencia = P;
		this.Precision = Prec;
		this.PPactual = PPA;
		this.PPtotal = PPT;
	}

var llamarada = new ataque("Fire Blast", 100, 85, 5, 5);

ataquenombre.innerText = llamarada.Nombre;
ppactual.innerText = llamarada.PPactual;
pptotal.innerText = "/" + llamarada.PPtotal;


$(document).ready(imprimirDatosPokemon());