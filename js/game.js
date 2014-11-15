var Pokemon = function(t, hp, atk, def, spatk, spdef, speed)
{
	this.tipe = t;
	this.hp = hp;
	this.atk= atk;
	this.defense = def;
	this.spatk = spatk;
	this.spdef = spdef;
	this.speed = speed;
}

var Charizard = new Pokemon("Fuego-Dragon", 78, 130, 111, 130, 85, 100);
var Newtwo = new Pokemon("Psiquico", 106, 110, 90, 154, 90, 130);

CharizardHP.innerText = "HP: " + Charizard.hp;
NewtwoHP.innerText = "HP: " + Newtwo.hp;
