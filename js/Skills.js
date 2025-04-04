class Skill
{
	constructor(job, name, level, reference, cooldown, duration)
	{
		this.job = job;
		this.name = name;
		this.level = level;
		this.reference = reference;
		this.cooldown = cooldown;
		this.duration = duration;
		this.lastUsage = null;
		this.source = "images/Skills/" + job + "/" + name + ".png"
	}
}

class Tinctures {
	constructor() {
		this.skillsList = [];

		//Tanks
		this.skillsList.push(new Skill("Pld", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("War", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Drk", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Gnb", "Medicated", 1, "31", 270, 30))

		//Melee DPS
		this.skillsList.push(new Skill("Mnk", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Drg", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Nin", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Sam", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Rpr", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Vpr", "Medicated", 1, "31", 270, 30))

		//Physical range DPS
		this.skillsList.push(new Skill("Brd", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Mch", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Dnc", "Medicated", 1, "31", 270, 30))

		//Magical range DPS
		this.skillsList.push(new Skill("Blm", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Smn", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Rdm", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Pct", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Blu", "Medicated", 1, "31", 270, 30))

		//Healers
		this.skillsList.push(new Skill("Whm", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Sch", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Ast", "Medicated", 1, "31", 270, 30))
		this.skillsList.push(new Skill("Sge", "Medicated", 1, "31", 270, 30))
	}
}

class Buffs
{
	constructor()
	{
		this.skillsList = [];
		//Melee DPS
		this.skillsList.push(new Skill("Nin", "Dokumori", 15, "905D", 120, 20))
		this.skillsList.push(new Skill("Drg", "Battle Litany", 52, "DE5", 120, 15))
		this.skillsList.push(new Skill("Drg", "Dragon Sight", 66, "1CE6", 120, 15))
		this.skillsList.push(new Skill("Mnk", "Brotherhood", 70, "1CE4", 120, 15))
		this.skillsList.push(new Skill("Rpr", "Arcane Circle", 72, "5F55", 120, 20))

		//Physical range DPS
		this.skillsList.push(new Skill("Brd", "Battle Voice", 50, "76", 120, 15))
		this.skillsList.push(new Skill("Brd", "Radiant Finale", 90, "64B9", 110, 15))
		this.skillsList.push(new Skill("Dnc", "Technical Step", 70, "3E7E", 120, 15))

		//Magical range DPS
		this.skillsList.push(new Skill("Rdm", "Embolden", 58, "1D60", 120, 20))
		this.skillsList.push(new Skill("Smn", "Searing Light", 66, "64C9", 120, 30))
		this.skillsList.push(new Skill("Pct", "Starry Muse", 66, "8773", 120, 30))

		//Healers
		this.skillsList.push(new Skill("Sch", "Chain Stratagem", 66, "1D0C", 120, 15))
		this.skillsList.push(new Skill("Ast", "Divination", 50, "40A8", 120, 15))
	}
}

class Mitigations
{
	constructor()
	{
		this.skillsList = [];

		//Tanks
		this.skillsList.push(new Skill("Pld", "Reprisal", 22, "1D6F", 60, 10))
		this.skillsList.push(new Skill("Pld", "Divine Veil", 56, "DD4", 90, 30))
		this.skillsList.push(new Skill("Pld", "Passage of Arms", 70, "1CD9", 120, 18))
		this.skillsList.push(new Skill("War", "Reprisal", 22, "1D6F", 60, 10))
		this.skillsList.push(new Skill("War", "Shake It Off", 68, "1CDC", 90, 15))
		this.skillsList.push(new Skill("Drk", "Reprisal", 22, "1D6F", 60, 10))
		this.skillsList.push(new Skill("Drk", "Dark Missionary", 76, "4057", 90, 15))
		this.skillsList.push(new Skill("Gnb", "Reprisal", 22, "1D6F", 60, 10))
		this.skillsList.push(new Skill("Gnb", "Heart of Light", 64, "3F20", 90, 15))

		//Melee DPS
		this.skillsList.push(new Skill("Nin", "Feint", 22, "1D7D", 90, 10))
		this.skillsList.push(new Skill("Drg", "Feint", 22, "1D7D", 90, 10))
		this.skillsList.push(new Skill("Mnk", "Feint", 22, "1D7D", 90, 10))
		this.skillsList.push(new Skill("Mnk", "Mantra", 42, "41", 90, 15))
		this.skillsList.push(new Skill("Sam", "Feint", 22, "1D7D", 90, 10))
		this.skillsList.push(new Skill("Rpr", "Feint", 22, "1D7D", 90, 10))
		this.skillsList.push(new Skill("Rpr", "Arcane Crest", 40, "5F54", 30, 15))
		this.skillsList.push(new Skill("Vpr", "Feint", 22, "1D7D", 90, 10))

		//Physical range DPS
		this.skillsList.push(new Skill("Brd", "Troubadour", 62, "1CED", 90, 15))
		this.skillsList.push(new Skill("Brd", "Nature's Minne", 66, "1CF0", 120, 15))
		this.skillsList.push(new Skill("Dnc", "Shield Samba", 56, "3E8C", 90, 15))
		this.skillsList.push(new Skill("Dnc", "Improvisation", 80, "3E8E", 120, 15))
		this.skillsList.push(new Skill("Mch", "Tactician", 56, "41F9", 90, 15))

		//Magical range DPS
		this.skillsList.push(new Skill("Rdm", "Addle", 8, "1D88", 90, 10))
		this.skillsList.push(new Skill("Rdm", "Magick Barrier", 86, "6501", 120, 10))
		this.skillsList.push(new Skill("Smn", "Addle", 8, "1D88", 90, 10))
		this.skillsList.push(new Skill("Blm", "Addle", 8, "1D88", 90, 10))
		this.skillsList.push(new Skill("Pct", "Addle", 8, "1D88", 90, 10))
		this.skillsList.push(new Skill("Pct", "Tempera Grassa", 88, "877E", 120, 10))

		//Healers
		this.skillsList.push(new Skill("Whm", "Asylum", 52, "DF1", 90, 24))
		this.skillsList.push(new Skill("Whm", "Temperance", 80, "4098", 120, 20))
		this.skillsList.push(new Skill("Sch", "Fey Illumination", 40, "409A", 120, 20))
		this.skillsList.push(new Skill("Sch", "Sacred Soil", 50, "BC", 30, 15))
		this.skillsList.push(new Skill("Sch", "Expedient", 90, "650C", 120, 20))
		this.skillsList.push(new Skill("Ast", "Collective Unconscious", 58, "E1D", 60, 20))
		this.skillsList.push(new Skill("Sge", "Kerachole", 50, "5EEA", 30, 15))
		this.skillsList.push(new Skill("Sge", "Holos", 76, "5EF6", 120, 20))
		this.skillsList.push(new Skill("Sge", "Panhaima", 80, "5EF7", 120, 15))
	}
}