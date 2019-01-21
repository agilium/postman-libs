var TestLoginIsOk = function(user) {
	let jsonBody = pm.response.json();
	let roleDimensions;

	for (role of jsonBody.data.profile.societe.roleDimensions) {
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
		pm.response.to.have.jsonBody("data[0].id", idReferencial) 
	})
}

var testUploadIsOk = function(fileName) {
	pm.test("Document successfully uploaded", function() {
		pm.response.to.have.jsonBody("filename", filename) 
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


	(userNameVar, rolesVisit, rolesGed) => {
		pm.test('data.Auth is OK', function () {
			pm.response.to.have.jsonBody("data.auth.token", pm.cookies.get("AGL_LSSO")) 
			pm.response.to.have.jsonBody("data.auth.type", "Bearer");
		});
		pm.test('data.account is OK', function () {
			pm.response.to.have.jsonBody("data.account.login", pm.variables.get(userNameVar)) 
			pm.response.to.have.jsonBody("data.account.roles") 
			pm.response.to.have.jsonBody("data.account.profile")
		});
		const jsonData = pm.response.json() 
			pm.test("data.account.role is OK", function () {
			pm.expect(jsonData.data.account.roles).to.be.an('array').that.includes(pm.globals.get('userRoleVisitProcess'))
		});
	
		
		pm.test('RolesDimensions are OK', function () {
			const visitRoles = profile.societe.rolesDimensions.filter(x => x.id.startsWith('absvisit.')).reduce((result, x) => {
				result.push(x.id);
				return result
			}, []) 
			pm.expect(visitRoles).to.deep.equal(rolesVisit)
			
			const gedRoles = profile.societe.rolesDimensions.filter(x => x.id.startsWith('absged.').map(x => x.id))
			roles = gedRoles.toString()	
			pm.expect(roles).to.deep.equal(rolesGed)
		});
	}
	