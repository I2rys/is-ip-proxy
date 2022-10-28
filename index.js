"use strict";

// Dependencies
const request = require("request-async")

// Main
async function check(ip){
    var response = await request(`https://hnisa.vercel.app/api/ip/info?ip=${ip}`)
    response = JSON.parse(response.body).data

    return response.proxy === "yes" ? true : false
}

module.exports = {
    check
}