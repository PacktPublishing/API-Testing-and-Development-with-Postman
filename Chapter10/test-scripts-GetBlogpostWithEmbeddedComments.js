var expected_response = {
    "id": 1,
    "title": "The FIRST blog post",
    "body": "This is my first blog post",
    "profileId": 1,
    "comments": [
        {
            "id": 1,
            "body": "some comment",
            "blogpostId": 1,
            "profileId": 1
        }
    ]
}
pm.test("Response includes correct information", function () {
    pm.expect(expected_response).to.eql(pm.response.json());
});