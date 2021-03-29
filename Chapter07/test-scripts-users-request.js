pm.test("Validate Email Address From File", function () {
    var jsonData = pm.response.json();
    var expectedEmail = pm.variables.replaceIn("{{expectedEmail}}");
    pm.expect(jsonData.email).to.eql(expectedEmail);
});