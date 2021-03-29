var jsonData = pm.response.json();
var firstBlogPost = {
    "id": 1,
    "title": "The FIRST blog post",
    "body": "This is my first blog post",
    "profileId": 1
}
pm.test("Check first Blogpost Data", function () {    
    //assume that the first blogpost won't change
    pm.expect(jsonData[0]).to.eql(firstBlogPost);
});

pm.test("Check that each blogpost has required fields", function () {
    var x;
    for (x in jsonData) {
        utils.check_blogpost_keys(jsonData[x]);
    } 
});