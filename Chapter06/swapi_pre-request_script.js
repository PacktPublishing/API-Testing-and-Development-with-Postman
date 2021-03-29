var residentList = pm.collectionVariables.get("residentList");
// var randomResident = residentList[Math.floor(Math.random() * residentList.length)];
// var splitResidentStr = randomResident.split('/');
// var personId = splitResidentStr[splitResidentStr.length - 2];
// pm.environment.set("person_id", personId);

var currentCount = pm.environment.get("counter");
if (currentCount < residentList.length) {
    randomResident = residentList[currentCount];
    var splitResidentStr = randomResident.split('/');
    var personId = splitResidentStr[splitResidentStr.length - 2];
    pm.environment.set("person_id", personId);
    pm.environment.set("counter",currentCount+1);
    postman.setNextRequest("Get a Person");
};