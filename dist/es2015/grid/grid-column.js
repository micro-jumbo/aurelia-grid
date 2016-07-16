export let GridColumn = class GridColumn {

	constructor(config, template) {
		this.specialColumns = ["heading", "nosort"];

		this.template = template;
		this.field = config.field;

		if (!this.field) throw new Error("field is required");

		this.heading = config.heading || config.field;
		this.nosort = config.nosort || false;
		this.filterValue = "";
		this.showFilter = config["show-filter"] === "false" ? false : true;

		for (var prop in config) {
			if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
				this[prop] = config[prop];
			}
		}
	}

};