var jsonData = pm.response.json();
var planetResidents = jsonData.residents;
pm.collectionVariables.set("residentList", planetResidents);
pm.environment.set("counter", 0);