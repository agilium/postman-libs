var TestLoginIsOk = function(user, roleDimension) {
	let _jsonBody = pm.response.json();
	let _members = [];

	_jsonBody.data.account.profile.societe.rolesDimensions.forEach(function(e){
		_members.push(e.id)
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

var testReferencialIsOk = function(idReferential, idItem) {
	_jsonBody = pm.response.json();
	console.log(_jsonBody.data);

	let _members = [];
	_jsonBody.data.forEach(function(e){
		_members.push(e.id)
	})

	pm.test("Item ["+idItem+"] is defined in referential ["+idReferential+"]", function(){
	    pm.expect(_members).to.include.members([idItem]);
	});
}

var testUploadIsOk = function(fileName,subfolder) {
	_jsonBody = pm.response.json();
	pm.test("Document has the same than ["+filename+"]", function() {
		pm.expect(_jsonBody.filename).to.eql(fileName); 
	});

	pm.test("Document  ["+subfolder+"] is upload successfully", function(){
		pm.expect(_jsonBody.subfolder).to.eql(subfolder)
	})

	pm.test("Document  ["+filename+"] is upload successfully", function(){
		pm.expect(_jsonBody.uploaded).to.be.true
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
	let _jsonBody = pm.response.json();
	var _members = [];

	_jsonBody.data.forEach(function(e){
		_members.push(e.id   )
		console.log(_members)
	})

	pm.test("Document ["+idDocument+"] exist in the list", function(){
		pm.expect(_members).to.include.members([idDocument])
	})
}
