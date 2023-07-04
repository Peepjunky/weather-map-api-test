pm.test("Verify latitude and longitude", function () {
  var responseJson = pm.response.json();
  pm.expect(responseJson.coord.lat).to.eql(51.51);
  pm.expect(responseJson.coord.lon).to.eql(-0.13);
});

pm.test("Verify temperature is provided", function () {
  var responseJson = pm.response.json();
  pm.expect(responseJson.main.temp).to.be.a("number");
});

pm.test("Verify weather description is a string", function () {
  var responseJson = pm.response.json();
  pm.expect(responseJson.weather[0].description).to.be.a("string");
});

pm.test("Verify status code is 200", function () {
  pm.response.to.have.status(200);
});
