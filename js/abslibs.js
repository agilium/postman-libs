var TestLoginIsOk = function(user, roleDimension) {
	let _jsonBody = pm.response.json();
	let _members = [];

	_jsonBody.data.account.profile.societe.rolesDimensions.forEach(function(e){
		_members.push(e.id == "absged")
		console.log(_members)
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
		pm.expect(_members).to.include.members([roleDimension]);
	});
}

var testReferencialIsOk = function(idReferencial) {
	_jsonBody = pm.response.json();
	console.log(_jsonBody.data);

	let _members = [];
	_jsonBody.data.forEach(function(e){
		_members.push(e.id)
	})

pm.test("Referencial is OK", function(){
    pm.expect(_members).to.include.members([idReferencial]);
});
}

var testUploadIsOk = function(fileName) {
	_jsonBody = pm.response.json();
	pm.test("Document have the same name when we upload it", function() {
		pm.expect(_jsonBody.filename).to.eql(fileName); 
	pm.test("Document upload successfully", function(){
		pm.expect(_jsonBody.uploaded).to.be.true
	})
})
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
	let _jsonBody = pm.response.json();
	var _members = [];

	_jsonBody.data.forEach(function(e){
		_members.push(e.id   )
		console.log(_members)
	})

	pm.test("document is in data", function(){
		pm.expect(_members).to.include.members([idDocument])
	})
}


