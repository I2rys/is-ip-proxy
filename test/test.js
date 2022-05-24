"use strict";

// Dependencies
const isIPProxy = require("../index")

// Main
describe("Is IP", ()=>{
    test("Proxy", async()=>{
        const result = await isIPProxy.check("143.244.154.240")
    
        expect(result).toBe(true)
    })

    test("Not Proxy", async()=>{
        const result = await isIPProxy.check("181.8.147.38")
    
        expect(result).toBe(false)
    })
})