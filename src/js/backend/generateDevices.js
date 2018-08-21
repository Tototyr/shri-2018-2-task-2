exports.generateDevices = function (app) {
	app.get("/api/devices", (req, res) => {
		res.json(123);
	});
	
	app.get("/api/devices/:id", (req, res) => {
		const id = req.params.id;
		
		res.json(id);
	});
};