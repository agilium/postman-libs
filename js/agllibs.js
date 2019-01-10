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
	