//get original value
var base_url = pm.environment.get("base_url");
var post_id = pm.environment.get("blogpost_id");

pm.sendRequest({url:`${base_url}blogposts/${post_id}`,method: 'GET'}, function (err, response) {
    pm.environment.set("original_get_response",response.json());
});