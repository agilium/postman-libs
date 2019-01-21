var TestLoginIsOk = function(user) {
	let jsonBody = pm.response.json();
	let roleDimensions;
	

	for (role of jsonBody.data.account.profile.societe.rolesDimensions) {
		if (role.id == "absged.depositaireAvecValidation") {
			roleDimensions = role.id;
			break;
		}
	}
	console.log(roleDimensions);
	pm.test("Response is Success, and it's a JSON", function(){
		pm.response.to.be.success;
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	})

	pm.test("Response generated Cookie AGL_LSSO", function() {
		
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
		
	});

	pm.test("Payload is OK", function() {
		pm.response.to.have.jsonBody("success", true)
		pm.response.to.have.jsonBody("data")
	});	

	pm.test("Data account contain username", function(){
			pm.response.to.have.jsonBody("data.account.login", user) 
	})

	pm.test("RoleDimensions is: 'absged.depositaireAvecValidation'.", function(){
		pm.expect(roleDimensions).to.eql("absged.depositaireAvecValidation");
	});
}




var testReferencialIsOk = function(idReferencial) {
	pm.test('Referencial exist', function(){
		pm.response.to.have.jsonBody("data.id", idReferencial) 
	})
}

var testUploadIsOk = function(fileName) {
	pm.test("Document successfully uploaded", function() {
		pm.expect(jsonBody.filename).to.eql(fileName) 
		pm.expect(jsonBody.uploaded).to.be.true
	})
}

var testDataOk = function(id) {
	pm.test('Data is OK', function(){
	   pm.response.to.have.jsonBody("data[2].id", id)

	});
}

var  testLogoutOk = function() {

	pm.test("Response is OK", ()=>{
		pm.response.to.be.success
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	})
	
	pm.test("Payload is OK", ()=> {
		pm.response.to.have.jsonBody("success", true)
		pm.response.to.have.jsonBody("data")
	});
	
	pm.test("Cookie SSO Removed OK", ()=>{
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.false
	});
	
	}


