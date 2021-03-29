var jsonData = pm.response.json();
pm.test("Check that the blogpost has required fields", function () {
        utils.check_blogpost_keys(jsonData);
});