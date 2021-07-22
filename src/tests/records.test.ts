import app from "./app";
import request from "supertest";

jest.setTimeout(30000);

describe("Test Records APis", () => {
  
  it("It should return filtered records if the requested payload is provided.", done => {
    const mockPayload = {
      "minCount": 200,
      "maxCount": 5000,
      "startDate": "2016-01-26",
      "endDate": "2022-01-20"
    };
    request(app)
      .post("/records/get")
      .set('Content-Type','application/json')
      .set('Content-Length','')
      .send(mockPayload)
      .expect(200)
      .end((err, res) => {
         expect(res.body).toHaveProperty('records')
        done()
      })
  });

  it("It should return 400 and array of errors if any key from payload is missing.", done => {
    const mockPayload = {
      "maxCount": 5000,
      "startDate": "2016-01-26",
      "endDate": "2022-01-20"
    };
    request(app)
      .post("/records/get")
      .set('Content-Type','application/json')
      .set('Content-Length','')
      .send(mockPayload)
      .expect(400)
      .end((err, res) => {
         expect(res.body).toHaveProperty('errors')
        done()
      })
  });

});
