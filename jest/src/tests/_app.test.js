const request = require('supertest')
const app = require('../app')

describe('GET /', ()=>{
    //here comes all your test cases
    it ("Should return status code of 200", async ()=> {
        const res = await request(app).get("/")

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({message: "Hello World"})
    })
})