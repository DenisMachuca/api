const express = require("express");
const IncidentController = require("../controllers/incident");

const api = express.Router();

api.get("/holaMundo", IncidentController.holaMundo);
api.post("/createIncident",IncidentController.createIncident);
api.get("/getIncident",IncidentController.getIncident);
api.get("/getIncidentsBySeverity",IncidentController.getIncidentsBySeverity);
api.get("/getIncidentsByState",IncidentController.getIncidentsByState);
api.put("/updateIncident",IncidentController.updateIncident);
api.delete("/deleteIncident",IncidentController.deleteIncident);

module.exports = api;