var TestLoginOk = function(enterprise, roleDimensions) {
	pm.test("Response is OK", function() {
		pm.response.to.be.success
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	pm.test("Data is OK")
		pm.response.have.jsonBody('data.account.profile.societe.label', enterprise);
		pm.response.have.jsonBody('data.account.profile.societe.rolesDimensions.id', roleDimensions)
	})
}