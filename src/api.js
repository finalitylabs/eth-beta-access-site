const axios = require('axios')
const EA = require('./contracts/ETHAccess.json')

module.exports = {
  test: async function () {
    console.log(axios)
    //console.log(window.web3)
  }
}