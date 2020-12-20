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
		while(this.playerList.length > 0)
		{
			this.playerList.pop();
		}
	}
}