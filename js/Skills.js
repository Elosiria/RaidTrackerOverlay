class Skill
{
	constructor(job, name, reference, cooldown, duration)
	{
		this.job = job;
		this.name = name;
		this.reference = reference;
		this.cooldown = cooldown;
		this.duration = duration;
		this.lastUsage = null;
		this.source = "images/Skills/" + job + "/" + name + ".png"
	}
}

class Buffs
{
	constructor()
	{
		this.skillsList = [];
		//Melee DPS
		this.skillsList.push(new Skill("Nin", "Trick Attack", "8D2", 60, 15))
		this.skillsList.push(new Skill("Drg", "Battle Litany", "DE5", 180, 15))
		//this.skillsList.push(new Skill("Drg", "Dragon Sight", "1CE6", 120, 15))
		this.skillsList.push(new Skill("Mnk", "Brotherhood", "1CE4", 90, 15))

		//Physical range DPS
		this.skillsList.push(new Skill("Brd", "Battle Voice", "76", 180, 20))
		this.skillsList.push(new Skill("Dnc", "Technical Step", "3E7E", 120, 15))

		//Magical range DPS
		this.skillsList.push(new Skill("Rdm", "Embolden", "1D60", 120, 20))
		this.skillsList.push(new Skill("Smn", "Aetherpact", "1CFF", 180, 15))

		//Healers
		this.skillsList.push(new Skill("Ast", "Divination", "40A8", 120, 15))
		this.skillsList.push(new Skill("Sch", "Chain Stratagem", "1D0C", 120, 15))
	}
}

class Mitigations
{
	constructor()
	{
		this.skillsList = [];

		//Tanks
		this.skillsList.push(new Skill("Pld", "Reprisal", "1D6F", 60, 10))
		this.skillsList.push(new Skill("Pld", "Divine Veil", "DD4", 90, 30))
		this.skillsList.push(new Skill("Pld", "Passage Of Arms", "1CD9", 120, 18))
		this.skillsList.push(new Skill("War", "Reprisal", "1D6F", 60, 10))
		this.skillsList.push(new Skill("War", "Shake It Off", "1CDC", 90, 15))
		this.skillsList.push(new Skill("Drk", "Reprisal", "1D6F", 60, 10))
		this.skillsList.push(new Skill("Drk", "Dark Missionary", "4057", 90, 15))
		this.skillsList.push(new Skill("Gnb", "Reprisal", "1D6F", 60, 10))
		this.skillsList.push(new Skill("Gnb", "Heart Of Light", "3F20", 90, 15))

		//Melee DPS
		this.skillsList.push(new Skill("Nin", "Feint", "1D7D", 90, 10))
		this.skillsList.push(new Skill("Drg", "Feint", "1D7D", 90, 10))
		this.skillsList.push(new Skill("Mnk", "Feint", "1D7D", 90, 10))
		this.skillsList.push(new Skill("Sam", "Feint", "1D7D", 90, 10))

		//Physical range DPS
		this.skillsList.push(new Skill("Brd", "Troubadour", "1CED", 120, 15))
		this.skillsList.push(new Skill("Dnc", "Shield Samba", "3E8C", 120, 15))
		this.skillsList.push(new Skill("Dnc", "Improvisation", "3E8E", 120, 15))
		this.skillsList.push(new Skill("Mch", "Tactician", "41F9", 120, 15))

		//Magical range DPS
		this.skillsList.push(new Skill("Rdm", "Addle", "1D88", 90, 10))
		this.skillsList.push(new Skill("Smn", "Addle", "1D88", 90, 10))
		this.skillsList.push(new Skill("Blm", "Addle", "1D88", 90, 10))

		//Healers
		this.skillsList.push(new Skill("Ast", "Collective Unconscious", "E1D", 60, 20))
		this.skillsList.push(new Skill("Sch", "Fey Illumination", "409A", 120, 20))
		this.skillsList.push(new Skill("Sch", "Sacred Soil", "BC", 30, 15))
		this.skillsList.push(new Skill("Whm", "Temperance", "4098", 120, 20))
		this.skillsList.push(new Skill("Whm", "Asylum", "DF1", 90, 24))
	}
}