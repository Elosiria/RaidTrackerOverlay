class PlayersManager
{
	constructor()
	{
		this.playerList = [];
		this.buffList = new Buffs();
		this.buffList.skillsList.push(new Skill("-", "Attack", "07", 0, 0))
		this.mitigationsList = new Mitigations();
		this.mitigationsList.skillsList.push(new Skill("-", "Attack", "07", 0, 0))
		this.playerCharacter = "";
	}
	
	update(logLine)
	{
		logLine = logLine + ''
		var logData = logLine.split(",");
		var playerName = logData[3];
		var skillRef = logData[4];
		var skillName = logData[5];
		
		//Use this to find references of new skills
		//console.log(logLine);

		var isValidSkill = false;
		for(var i = 0; i < this.buffList.skillsList.length; i++)
		{
			if(this.buffList.skillsList[i].name === skillName && this.buffList.skillsList[i].reference === skillRef)
			{
				isValidSkill = true;
				//console.log("Skill used: " + skillName);	
			}
		}

		for(var i = 0; i < this.mitigationsList.skillsList.length; i++)
		{
			if(this.mitigationsList.skillsList[i].name === skillName && this.mitigationsList.skillsList[i].reference === skillRef)
			{
				isValidSkill = true;
				//console.log("Skill used: " + skillName);	
			}
		}

		//Buffs: playname at i = 3 and skill name at i = 5
		/*for(var i = 0; i < logData.length; i++)
		{
			console.log("LogData[" + i + "] = " + logData[i]);	
		}*/

		//If this is not a skill or a not a skill to be tracked we exit the function
		if(isValidSkill === false)
		{
			var skillRef = logData[2];
			var skillName = logData[3];
			var playerName = logData[6];
			
			var playerFound = false;
			for(var i = 0; i < this.playerList.length; i++)
			{
				if(playerName === this.playerList[i].name)
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
			
			return;
		}

		
		var playerFound = false;
		for(var i = 0; i < this.playerList.length; i++)
		{
			if(playerName === this.playerList[i].name)
			{
				playerFound = true;
				if(skillName !== "Attack")
				{
					this.playerList[i].useSkill(skillName)
					//console.log("Found player: " + playerName);
					break;
				}
			}
		}
		
		if(playerFound === false)
		{
			var player = new Player(playerName)
			if(skillName !== "Attack")
			{
				player.useSkill(skillName)
			}
			this.playerList.push(player);		
			//console.log("playerList size" + this.playerList.length);	
			//console.log("Added player: " + playerName);
		}
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
		while(this.playerList.length > 24)
		{
			this.playerList.pop();
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
	}
}