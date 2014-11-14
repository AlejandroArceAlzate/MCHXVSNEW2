var Pokemon = function(v, a)
{
	this.hp = v;
	this.ataque = a;
}

var Charizard = new Pokemon(1000, 100);
var Newtwo = new Pokemon(2000, 200);

CharizardHP.innerText = "HP: " + Charizard.hp;
NewtwoHP.innerText = "HP: " + Newtwo.hp;
