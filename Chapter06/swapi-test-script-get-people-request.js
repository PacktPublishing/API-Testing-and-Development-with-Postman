pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check that the response body contains Luke", function () {
    pm.expect(pm.response.text()).to.include("Luke");
});

pm.test("Check Luke's Height", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.height).to.eql("172");
});

pm.test("Check Luke's eye color", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.eye_color).to.eql("blue");
});

pm.test("Check the homeworld URL", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.homeworld).to.eql("http://swapi.dev/api/planets/1/");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Server is nginx", function () {
    pm.response.to.have.header("Server",'nginx/1.16.1');
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Luke is in 4 films", function () {
    pm.expect(pm.response.json().films.length).to.eql(4)
});