"use strict";

// Dependencies
const request = require("request-async")

// Main
async function check(ip){
    var response = await request(`http://167.172.85.80/api/free/check/proxy?ip=${ip}`)
    response = JSON.parse(response.body)

    return response.proxy
}

module.exports = {
    check
}