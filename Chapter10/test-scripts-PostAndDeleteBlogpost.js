var jsonData = pm.response.json();
pm.test("Check that the blogpost has required fields", function () {
        utils.check_blogpost_keys(jsonData);
});
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

var post_id = jsonData.id;
var base_url = pm.environment.get("base_url")

pm.sendRequest({url:`${base_url}blogposts/${post_id}`,method: 'DELETE'}, function (err, response) {
    pm.test("Delete Response is OK", function () {
        pm.expect(response.status).to.eql('OK');
    });
    pm.test("Delete Response body is empty", function () {
        pm.expect(response.json()).to.eql({});
    });
});