var TestLoginIsOk = function(user, roleDimension) {
	let jsonBody = pm.response.json();
	let members = [];

	jsonBody.data.account.profile.societe.rolesDimensions.forEach(function(e){
		members.push(e.id)
		console.log(members)
	})


	pm.test("Response is Success, and it's a JSON", function(){
		pm.response.to.be.success;
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	})

	pm.test("Response generated Cookie AGL_LSSO", function() {
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true;
	});

	pm.test("Payload is OK", function() {
		pm.response.to.have.jsonBody("success", true)
		pm.response.to.have.jsonBody("data")
	});	

	pm.test("Data account contain username", function(){
			pm.response.to.have.jsonBody("data.account.login", user) 
	})

	pm.test("RoleDimensions is OK", function(){
		pm.expect(members).to.include.members([roleDimension]);
	});
}



var testReferencialIsOk = function(idReferencial) {
	jsonBody = pm.response.json();
	console.log(jsonBody.data);

	let members = [];
	jsonBody.data.forEach(function(e){
		members.push(e.id)
	})

pm.test("Referencial is OK", function(){
    pm.expect(members).to.include.members([idReferencial]);
});
}

var testUploadIsOk = function(fileName) {
	jsonBody = pm.response.json();
	pm.test("Document have the same name when we upload it", function() {
		pm.expect(jsonBody.filename).to.eql(fileName); 
	pm.test("Document upload successfully", function(){
		pm.expect(jsonBody.uploaded).to.be.true
	})
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

var testDocumentExistInData = function(idDocument) {
	let jsonBody = pm.response.json();
	var members = [];

	jsonBody.data.forEach(function(e){
		members.push(e.id   )
		console.log(members)
	})

	pm.test("document is in data", function(){
		pm.expect(members).to.include.members([idDocument])
	})
}



