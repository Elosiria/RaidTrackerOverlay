class Player
{
	constructor(name)
	{
		this.name = name;
		this.buffs = new Buffs()
		this.mitigations = new Mitigations()
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