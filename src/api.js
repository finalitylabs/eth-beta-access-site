import React, { Component } from 'react';
const EA = require('./contracts/ETHAccess.json')
const eaAddress = '0x7B19229b7845416b31710CcF39C1408E61Fc0E77'

class api extends Component {
  constructor() {
      super()
      this.accessContract = window.web3.eth.contract(EA.abi)
      this.eaInstance = this.accessContract.at(eaAddress)
  }

  getNetwork() {
    return window.web3.version.network
  }

  getAccount() {
    return new Promise(resolve => {
      window.web3.eth.getAccounts((err,res)=>{
        console.log(res)
      })
    })
  }

  getQRTcount() {
    return new Promise(resolve => {
      this.eaInstance.totalSupply((err, res) => {
        resolve(res.toString())
      })
    })
  }

  getPortalKittyCount() {
    return new Promise(resolve => {
      this.eaInstance.participants('0x1e8524370b7caf8dc62e3effbca04ccc8e493ffe',(err, res) => {
        resolve(res[1].toString())
      })
    })    
  }

  purchaseQRT() {
    return new Promise(resolve => {
      this.eaInstance.purchaseQRT({from: '0x3c8d121fE359730EA4D6BA119fb48252DF8c23f7', value: window.web3.toWei('0.1')}, (err, res) => {
        console.log(res)
        console.log(err)
      })
    })       
  }
}

export default api;
