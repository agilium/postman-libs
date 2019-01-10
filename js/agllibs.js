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

var testLiaisonOk = function(fkpoiType, fkvalueDef)  {
	pm.test('Liason successfull', function(){
	   pm.response.to.have.jsonBody("data.fkpoiType", fkpoiType)
	   pm.response.to.have.jsonBody("data.fkvalueDef", fkvalueDef)
	   console.log(jsonBody.data.fkpoiType)
	   console.log(jsonBody.data.fkvalueDef)
	});
}

/** Response must have a jsonBody.data.fkpoiFrom
 * Response must have a jsonBody.data.fkpoiTo
 * @param fkpoiFrom, fkpoiTo
 */

var testLinkOk = function(fkpoiFrom, fkpoiTo)  {
	pm.test('Link is OK', function(){
	   pm.response.to.have.jsonBody("data.fkpoiFrom", fkpoiFrom)
	   pm.response.to.have.jsonBody("data.fkpoiTo", fkpoiTo)

	   console.log(jsonBody.data.fkpoiFrom)
	   console.log(jsonBody.data.fkpoiTo)
	});
}

/** Response must have jsonBody.data.fkperson
 * Response must have jsonBody.data.fkpoi
 * @param fkperson, fkpoi
 */

var TestPoiHasPersonOk = function(fkperson, fkpoi) {
	pm.test('Poi has Person OK', function(){
	   pm.response.to.have.jsonBody("data.fkperson", fkperson)
	   pm.response.to.have.jsonBody("data.fkpoi", fkpoi)

	   console.log(jsonBody.data.fkperson)
	   console.log(jsonBody.data.fkpoi)
	});
}


