function Monster(name){
	this.name = name
}
Monster.prototype.damage = 0;
Monster.prototype.sayName = function(){console.log("my name is: " + this.name);};
// Одна для всіх функція удару
Monster.prototype.bump = function(Obj){
	if (this.damage != 0){
		Obj.nowHP -=this.damage;
		Obj.nowHP > 0 ? console.log("The enemy has: "+Obj.nowHP+" hit points") : console.log("This monster died");
	}
	else console.log("This monster can't bump")
};

function CatMonster(){Monster.apply(this, arguments)}
CatMonster.prototype = Object.create(Monster.prototype);
CatMonster.prototype.damage = 5;
CatMonster.prototype.hp = 50;
CatMonster.prototype.nowHP= 50;
// А можна так, для кожного окрему.
/*
CatMonster.prototype.scratch = function(Obj){
	Obj.nowHP -= this.damage;
	Obj.nowHP > 0 ? console.log("The enemy has: "+Obj.nowHP+" hit points") : console.log("This monster died");
}
*/
function BirdMonster(){Monster.apply(this, arguments)}
BirdMonster.prototype = Object.create(Monster.prototype);
BirdMonster.prototype.damage = 3;
BirdMonster.prototype.hp = 60;
BirdMonster.prototype.nowHP= 60;
// А можна так, для кожного окрему.
/*
BirdMonster.prototype.peck = function(Obj){
	Obj.nowHP -= this.damage;
	Obj.nowHP > 0 ? console.log("The enemy has: "+Obj.nowHP+" hit points") : console.log("This monster died");
}
*/

function CutieMonster(){Monster.apply(this, arguments)}
CutieMonster.prototype = Object.create(Monster.prototype);
CutieMonster.prototype.hp = 20;
CutieMonster.prototype.nowHP= 20;


monster1 = new CatMonster("Luidgi");
monster2 = new BirdMonster("Udgin");
monster3 = new CutieMonster("Cutie");

monster1.bump(monster2);
monster2.bump(monster3);
monster3.bump(monster1);
monster1.sayName();
monster2.sayName();
monster3.sayName();