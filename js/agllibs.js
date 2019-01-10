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

/** Response must have a jsonBody.data.fkpoiType
 * Response must have a jsonBody.data.fkvalueDef
 * @Param fkpoiType, fkvalueDef
 */


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
	