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
		this.source = "Assets/Skills/" + job + "/" + name + ".png"
	}
}