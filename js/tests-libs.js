/*
 * Check if returned Payload is a valid JSON, has 'success' field set to 'true', and has 'data' field.
 */
var testPayloadOk = function() {
  pm.test("Payload is OK", function() {
    pm.response.to.have.jsonBody("success", true);
    pm.response.to.have.jsonBody("data");
  });
};
