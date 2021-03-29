var jsonData = pm.response.json()
pm.test("Check that each blogpost has required fields", function () {
        utils.check_blogpost_keys(jsonData);
});

//reset the post back to it's original state
var base_url = pm.environment.get("base_url");
var post_id = pm.environment.get("blogpost_id");
var original_response = pm.environment.get("original_get_response")
pm.sendRequest({url:`${base_url}blogposts/${post_id}`,
    method: 'PUT',
    header:{'Content-Type': 'application/json'},
    body:{mode: 'raw', raw: original_response}}, 
    function (err, response) {
        console.log(response.json());
});