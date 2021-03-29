pm.test("Check that men's clothes category filter gives back the correct products", function () {
    var jsonData = pm.response.json();
    var i;
    for (i in jsonData) {
        pm.expect(jsonData[i].category).to.eql("Men's Clothes");
    }
});