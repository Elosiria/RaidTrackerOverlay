class StoredUserSettings
{
	constructor() {
		this.UseBackgroundImage = (localStorage.getItem("UseBackgroundImage") === "true");
		//if (this.UseBackgroundImage == null)
		//	this.UseBackgroundImage = false;

		this.BackgroundImageUrl = localStorage.getItem("BackgroundImageUrl");
		//if (this.BackgroundImageUrl == null)
		//	this.BackgroundImageUrl = false;

		this.UseThinnerHeader = (localStorage.getItem("UseThinnerHeader") === "true");
		//if (this.UseThinnerHeader == null)
		//	this.UseThinnerHeader = false;

		this.UseFooterInsteadOfHeader = (localStorage.getItem("UseFooterInsteadOfHeader") === "true");
		//if (this.UseFooterInsteadOfHeader == null)
		//	this.UseFooterInsteadOfHeader = false;

		this.Rescale = localStorage.getItem("Rescale");
		if (this.Rescale == null)
			this.Rescale = 1.0;


		this.AvailableColumnsData = ['Job without background', 'Job with background', 'Player Name', 'Tinctures', 'Raidwide offensive skills', 'Raidwide defensive skills', 'Percentage DPS', 'Current DPS', 'Deaths']
		this.DefaultUsedColumnsData = ['Job without background', 'Player Name', 'Raidwide offensive skills', 'Raidwide defensive skills', 'Percentage DPS', 'Current DPS', 'Deaths']
		if (localStorage.getItem("selectedColumns") !== null)
			this.UsedColumnsData = localStorage.getItem("selectedColumns").split(",");
		else
			this.UsedColumnsData = defaultUsedColumnsData;

		//console.log("UseBackgroundImage: " + this.UseBackgroundImage);
		//console.log("BackgroundImageUrl: " + this.BackgroundImageUrl);
		//console.log("UseThinnerHeader: " + this.UseThinnerHeader);
		//console.log("UseFooterInsteadOfHeader: " + this.UseFooterInsteadOfHeader);
		//console.log("Rescale: " + this.Rescale);
	}

	Save() {
		localStorage.setItem("UseBackgroundImage", this.UseBackgroundImage);
		localStorage.setItem("BackgroundImageUrl", this.BackgroundImageUrl);
		localStorage.setItem("UseThinnerHeader", this.UseThinnerHeader);
		localStorage.setItem("UseFooterInsteadOfHeader", this.UseFooterInsteadOfHeader);
		localStorage.setItem("Rescale", this.Rescale);

		console.log("****** Saving ******");
		console.log("UseBackgroundImage: " + this.UseBackgroundImage);
		console.log("BackgroundImageUrl: " + this.BackgroundImageUrl);
		console.log("UseThinnerHeader: " + this.UseThinnerHeader);
		console.log("UseFooterInsteadOfHeader: " + this.UseFooterInsteadOfHeader);
		console.log("Rescale: " + this.Rescale);
	}
}