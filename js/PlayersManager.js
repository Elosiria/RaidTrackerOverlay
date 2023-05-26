class PlayersManager
{
	constructor()
	{
		this.playerList = [];
		this.buffList = new Buffs();
		this.buffList.skillsList.push(new Skill("-", "Attack", "07", 0, 0))
		this.mitigationsList = new Mitigations();
		this.mitigationsList.skillsList.push(new Skill("-", "Attack", "07", 0, 0))
		this.tincturesList = new Tinctures();
		this.playerCharacter = "";
	}
	
	update(logLine)
	{
		logLine = logLine + ''
		var logData = logLine.split(",");
		var playerName = logData[3];
		var skillRef = logData[4];
		var skillName = logData[5];
		var originPlayerName = "";
		var affectedPlayerName = "";
		
		//Use this to find references of new skills
		//console.log(logLine);

		var isTincture = false;

		for (var i = 0; i < this.buffList.skillsList.length; i++) {
			if (this.buffList.skillsList[i].name === skillName && this.buffList.skillsList[i].reference === skillRef) {
				//console.log(playerName + " used the buff " + skillName);
				this.useSkill(playerName, skillName);
				return;
			}
		}

		for (var i = 0; i < this.mitigationsList.skillsList.length; i++) {
			if (this.mitigationsList.skillsList[i].name === skillName && this.mitigationsList.skillsList[i].reference === skillRef) {
				//console.log(playerName + " used the mitigation " + skillName);
				this.useSkill(playerName, skillName);
				return;
			}
		}

		//Non skills tracking
		skillRef = logData[2];
		skillName = logData[3];
		originPlayerName = logData[6];
		affectedPlayerName = logData[8];
			
		for(var i = 0; i < this.playerList.length; i++)
		{
			if (originPlayerName === originPlayerName && affectedPlayerName === this.playerList[i].name)
			{
				if(skillName === "Aetherial Mimicry: Tank" && skillRef === "84c")
				{
					this.playerList[i].bluType = "Tank";
					//console.log("Aetherial Mimicry: Tank");
				}
				else if(skillName === "Aetherial Mimicry: Dps" && skillRef === "84d")
				{
					this.playerList[i].bluType = "Dps";
					//console.log("Aetherial Mimicry: Dps");
				}
				else if(skillName === "Aetherial Mimicry: Healer" && skillRef === "84e")
				{
					this.playerList[i].bluType = "Healer";
					//console.log("Aetherial Mimicry: Healer");
				}
			}
		}

		for (var i = 0; i < this.tincturesList.skillsList.length; i++) {
			if (this.tincturesList.skillsList[i].name === skillName)
				var duration = logData[4]; 
				if (this.tincturesList.skillsList[i].reference === skillRef && duration > 0 && originPlayerName === affectedPlayerName) {
					this.useSkill(originPlayerName, skillName);
					return;
			}
		}
	}

	useSkill(PlayerName, SkillName) {
		if (SkillName === "Attack")
			return;

		for (var i = 0; i < this.playerList.length; i++) {
			if (PlayerName === this.playerList[i].name) {
				this.playerList[i].useSkill(SkillName)
				return;
			}
		}

		//Player added if not tracked yet
		var player = new Player(playerName)
		player.useSkill(skillName)
		this.playerList.push(player);	
	}

	getPlayerByName(name)
	{
		var nameToSearch = name;
		if(name === "YOU")
			nameToSearch = this.playerCharacter;

		//console.log("Searching: " + name);
		for(var i = 0; i < this.playerList.length; i++)
		{
			if(nameToSearch === this.playerList[i].name)
			{
				//console.log("Found player: " + name);
				return this.playerList[i];
			}
		}
		
		var player = new Player(nameToSearch)
		this.playerList.push(player);

		return player;
	}

	reset()
	{
		for (var i = 0; i < this.playerList.length; i++) {
			this.playerList[i].reset();
		}
	}
}

class Player
{
	constructor(name)
	{
		this.name = name;
		this.buffs = new Buffs()
		this.mitigations = new Mitigations()
		this.tinctures = new Tinctures()
		this.bluType = "Dps"
	}
	
	useSkill(skillName)
	{
		for(var i = 0; i < this.buffs.skillsList.length; i++)
		{
			if(this.buffs.skillsList[i].name === skillName)
			{
				this.buffs.skillsList[i].lastUsage = new Date();
			}
		}
		
		for(var i = 0; i < this.mitigations.skillsList.length; i++)
		{
			if(this.mitigations.skillsList[i].name === skillName)
			{
				this.mitigations.skillsList[i].lastUsage = new Date();
			}
		}

		for (var i = 0; i < this.tinctures.skillsList.length; i++)
		{
			if (this.tinctures.skillsList[i].name === skillName)
			{
				this.tinctures.skillsList[i].lastUsage = new Date();
			}
		}
	}

	getSkillStatus(skillName)
	{
		for(var i = 0; i < this.buffs.skillsList.length; i++)
		{
			if(this.buffs.skillsList[i].name === skillName)
			{
				if(this.buffs.skillsList[i].lastUsage === null)
				{
					return "Off Cooldown";
				}
				
				var difference = (new Date() - this.buffs.skillsList[i].lastUsage) / 1000;
				if(difference < this.buffs.skillsList[i].duration)
				{
					return "Active";
				}
				else if(difference < this.buffs.skillsList[i].cooldown)
				{
					return "On Cooldown;" +  Math.floor(this.buffs.skillsList[i].cooldown - difference);
				}
				else
				{
					this.buffs.skillsList[i].lastUsage = null;
					return "Off Cooldown";
				}
			}
		}

		
		for(var i = 0; i < this.mitigations.skillsList.length; i++)
		{
			if(this.mitigations.skillsList[i].name === skillName)
			{
				if(this.mitigations.skillsList[i].lastUsage === null)
				{
					return "Off Cooldown";
				}
				
				var difference = (new Date() - this.mitigations.skillsList[i].lastUsage) / 1000;
				if(difference < this.mitigations.skillsList[i].duration)
				{
					return "Active";
				}
				else if(difference < this.mitigations.skillsList[i].cooldown)
				{
					return "On Cooldown;" +  Math.floor(this.mitigations.skillsList[i].cooldown - difference);
				}
				else
				{
					this.mitigations.skillsList[i].lastUsage = null;
					return "Off Cooldown";
				}
			}
		}


		for (var i = 0; i < this.tinctures.skillsList.length; i++) {
			if (this.tinctures.skillsList[i].name === skillName) {
				if (this.tinctures.skillsList[i].lastUsage === null) {
					return "Off Cooldown";
				}

				var difference = (new Date() - this.tinctures.skillsList[i].lastUsage) / 1000;
				if (difference < this.tinctures.skillsList[i].duration) {
					//console.log("difference = " + difference);
					return "Active";
				}
				else if (difference < this.tinctures.skillsList[i].cooldown) {
					return "On Cooldown;" + Math.floor(this.tinctures.skillsList[i].cooldown - difference);
				}
				else {
					this.tinctures.skillsList[i].lastUsage = null;
					return "Off Cooldown";
				}
			}
		}
	}

	reset() {
		for (var i = 0; i < this.buffs.skillsList.length; i++) {
			this.buffs.skillsList[i].lastUsage = null;
		}

		for (var i = 0; i < this.mitigations.skillsList.length; i++) {
			this.mitigations.skillsList[i].lastUsage = null;
		}

		for (var i = 0; i < this.tinctures.skillsList.length; i++) {
			this.tinctures.skillsList[i].lastUsage = null;
		}
	}
}