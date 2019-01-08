var testPayloadOk = function() {
  pm.test("Payload is OK", function() {
    pm.response.to.have.jsonBody("success", true);
    pm.response.to.have.jsonBody("data");
  });
};
