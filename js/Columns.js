class ColumnDefinition
{
	constructor(userFriendlyName, headerName, dataName, width, align)
	{
		this.userFriendlyName = userFriendlyName;
		this.headerName = headerName;
		this.dataName = dataName;
		this.width = width;
		this.align = align;
	}
}

class Columns
{
	constructor()
	{
		this.columnsList = [];
		this.columnsList.push(new ColumnDefinition("Job with background", "", "{Job}", "5%", "center"));
		this.columnsList.push(new ColumnDefinition("Job without background", "", "{Job}", "5%", "center"));
		this.columnsList.push(new ColumnDefinition("Player Name", "Name", "{name}", "25%", "left"));
		this.columnsList.push(new ColumnDefinition("Raidwide offensive skills", "Offensive", "{Buffs}", "14%", "left"));
		this.columnsList.push(new ColumnDefinition("Raidwide defensive skills", "Defensive", "{Mitigations}", "14%", "left"));
		this.columnsList.push(new ColumnDefinition("Percentage DPS", "%", "{damage%}", "10%", "center"));
		this.columnsList.push(new ColumnDefinition("Current DPS", "DPS", "{encdps}", "16%", "center"));
		this.columnsList.push(new ColumnDefinition("Deaths", "Deaths", "{deaths}", "10%", "center"));
	}

	getColumnByUserFriendlyName(userFriendlyName)
	{
		for(var i = 0; i < this.columnsList.length; i++)
		{
			if(this.columnsList[i].userFriendlyName === userFriendlyName)
			{
				return this.columnsList[i];	
			}
		}
	}
}
