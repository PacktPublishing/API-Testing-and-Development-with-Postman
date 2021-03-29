pm.test('check status code', function () {
	pm.response.to.have.status(200);
})
pm.test('check response time', function() {
    pm.expect(pm.response.responseSize).to.be.above(19000);
})