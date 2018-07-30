import React, { Component } from 'react';
const EA = require('./contracts/ETHAccess.json')
const eaAddress = '0xe8931b96a36ea32efb0ff80da0571748295cb3ec'

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
      this.eaInstance.purchaseQRTbeta({from: '0x38a583c19540f9f34D94166da2D4401352f4b0F7', value: window.web3.toWei('0.1')}, (err, res) => {
        resolve(res)
      })
    })       
  }
}

export default api;
