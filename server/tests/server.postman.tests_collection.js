//api/v1/petLovers (POST)
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});

//api/v1/petLovers?_id=614405c7e8bd0492c8a4b1a3 (GET)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


//api/v1/petLovers/:userId (PUT)
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("bob123");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//api/v1/petLovers?=6144138b7d669b5564d17bf3 (DEL)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//api/v1/petOwners (POST)
var jsonData = pm.response.json();

pm.test("password: bob123", function () {
    pm.expect(jsonData.userinfo.password).to.eql("bob123");
});

pm.test("Post status code check", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});


//api/v1/petOwners/:userId
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Content-Type is present"), function() {
    pm.response.to.have.header("Content-Type");
    pm.expect(pm.response.headers.get("Content-Type")).to.eql('appplication/json');
}