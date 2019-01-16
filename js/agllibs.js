/** 
 * @testResponseOk
 * Response should be a JSON
 * Response must have jsonBody.Success
 * Response must have a jsonBody and properties data
 * @param none
 */

var testResponseOk= function() {
	pm.test("Response is OK", function() {
		pm.response.to.be.success
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	})
	
	pm.test("Payload is OK", function() {
		pm.response.to.have.jsonBody("success", true)
		pm.response.to.have.jsonBody("data")
	});	
}  

/**
 * @testDataOk
 * Response Must have jsonBody.data.id
 * @param id
 */

var testDataOk = function(id) {
	pm.test('Data is OK', function(){
	   pm.response.to.have.jsonBody("data[2].id", id)

	});
}

/** Response must have a jsonBody.data.fkpoiType
 * Response must have a jsonBody.data.fkvalueDef
 * @Param fkpoiType, fkvalueDef
 */


 /**
  * @testLoginOk
  * Response should be Success
  * Response must have header "content-type", "application/json"
  * Response must have a jsonBody
  * Response must have a jsonBody.data
  * Cookie SSO must be generate
 * @param none
 */

 var testloginOk = function() {
	pm.test("Response is OK", ()=>{
		pm.response.to.be.success
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	})
	
	pm.test("Payload is OK", ()=> {
		pm.response.to.have.jsonBody("success", true)
		pm.response.to.have.jsonBody("data")
	});
	
	pm.test("Get Cookie SSO OK", ()=>{
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
	});
	
}
	
/** 
 * @testLogoutOk
 * Response should be success 
 * Response must have header "content-type", "application/json"
 * Response must have a jsonBody
 * Response must have jsonBody.data
 * Cookie SSO must be removed
 * @param
 */
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

/** Response should be a JSON
 * Response must have jsonBody.Success
 * Response must have a jsonBody and properties data
 * @param none
 */

var testResponseOk= function() {

	pm.test("Response is OK", function() {
		pm.response.to.be.success
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
		pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
		pm.response.to.have.jsonBody()
	})
	
	pm.test("Payload is OK", function() {
		pm.response.to.have.jsonBody("success", true)
		pm.response.to.have.jsonBody("data")
	});
	
}  

/**
 Response Must have jsonBody.data.id
 * @param id
 */

var testDataOk = function(id) {
	pm.test('Data is OK', function(){
	   pm.response.to.have.jsonBody("data.id", id)
	   console.log(jsonBody.data.id)
	});
}

 /**
 * @param none
 */

 var testloginOk = function() {
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
		pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
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

	var TGedLogin = function() {
		pm.test("Response is OK", function() {
			pm.response.to.be.success
			pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
			pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
			pm.response.to.have.jsonBody()
		})
	
		pm.test("Payload is OK", function() {
			pm.response.to.have.jsonBody("success", true)
			pm.response.to.have.jsonBody("data")
			pm.response
		});	
		
		pm.test('Data is OK', function(){
			var jsonBody = pm.response.json();
				pm.expect(jsonBody.data.account.profile.societe.label).to.equal("PARALU");
				pm.expect(jsonBody.data.account.profile.societe.rolesDimensions[0].id).to.equal("absged.depositaireAvecValidation");
		});
	}
	
	var TGetReferencialLots = function() {
		pm.test("Response is OK", function() {
			pm.response.to.be.success
			pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
			pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
			pm.response.to.have.jsonBody()
		})
	
		pm.test("Payload is OK", function() {
			pm.response.to.have.jsonBody("success", true)
			pm.response.to.have.jsonBody("data")
			pm.response
		});	

		pm.test("Lot is OK", function (){
			jsonBody = pm.response.json();
			pm.expect(jsonBody.data[0].id).to.equal("FAC");
		})
	}

	var TGetReferencialProjectPhase = function() {
		pm.test("Response is OK", function() {
			pm.response.to.be.success
			pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
			pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
			pm.response.to.have.jsonBody()
		})
	
		pm.test("Payload is OK", function() {
			pm.response.to.have.jsonBody("success", true)
			pm.response.to.have.jsonBody("data")
			pm.response
		});	
		
		
		pm.test("Phase is OK", function (){
			jsonBody = pm.response.json();
			pm.expect(jsonBody.data[2].id).to.equal("EXE");
		})
	}

	var TGetReferencialZones = function() {
		pm.test("Response is OK", function() {
			pm.response.to.be.success
			pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
			pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
			pm.response.to.have.jsonBody()
		})
	
		pm.test("Payload is OK", function() {
			pm.response.to.have.jsonBody("success", true)
			pm.response.to.have.jsonBody("data")
			pm.response
		});	
		
		
		pm.test("Zone is OK", function (){
			jsonBody = pm.response.json();
			pm.expect(jsonBody.data[4].id).to.equal("TZ");
		})
	}

	var TGetReferencialDocumentType = function() {
		pm.test("Response is OK", function() {
			pm.response.to.be.success
			pm.expect(pm.cookies.has('AGL_LSSO'), 'AGL_LSSO').to.be.true
			pm.response.to.have.header("Content-Type", "application/json;charset=utf-8")
			pm.response.to.have.jsonBody()
		})
	
		pm.test("Payload is OK", function() {
			pm.response.to.have.jsonBody("success", true)
			pm.response.to.have.jsonBody("data")
			pm.response
		});	
		
		
		pm.test("DocumentType is OK", function (){
			jsonBody = pm.response.json();
			pm.expect(jsonBody.data[4].id).to.equal("NOT");
		})
	}
	
	
	
	
	
	
	






	