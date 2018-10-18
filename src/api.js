import { Component } from 'react';
import EA from './contracts/ETHAccess.json';
import CK from './contracts/CKInterface.json';
import Eth from 'ethjs';
import { rejects } from 'assert';

const eaAddress = '0x14f00c2c0f9c40476bbf8fcd1b2dc2e91e371041'
const kittyAddress = '0x95ef2833688ee675dfc1350394619ae22b7667df'

class Api extends Component {
  constructor() {
      super()
      if (window.web3) {
        this.ethjs = new Eth(window.web3.currentProvider)
        this.accessContract = window.web3.eth.contract(EA.abi)
        this.kittyContract = window.web3.eth.contract(CK.abi)
        this.eaInstance = this.accessContract.at(eaAddress)
        this.kittyInstance = this.kittyContract.at(kittyAddress)
      }
  }

  getNetwork() {
    return window.web3.version.network
  }

  getAccount() {
    return new Promise(resolve => {
      window.web3.eth.getAccounts((err,res)=>{
        resolve(res);
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

  getParticipantQRTCount(participant) {
    return new Promise(resolve => {
      this.eaInstance.balanceOf(participant, (err, res) => {
        resolve(res.toString())
      })
    })
  }

  getPortalKittyCount(account) {
    return new Promise(resolve => {
      this.eaInstance.participants(account,(err, res) => {
        resolve(res[1].toString())
      })
    })    
  }

  purchaseQRT(account) {
    return new Promise(resolve => {
      this.eaInstance.purchaseQRTbeta({from: account, value: window.web3.toWei('0.1')}, (err, res) => {
        resolve(res)
      })
    })       
  }

  getKittyImageById(id) {
    return new Promise(resolve =>{
      fetch(`https://api.cryptokitties.co/kitties/${id}`, {
        mode: "cors", // no-cors, cors, *same-origin
      })
      .then(res => {
        if (!res.ok) { throw res.statusText }
        return res.json();
      })
      .then(json => {
        resolve(json.image_url);
      })
    })
  }

  async portalKitty(account, id) {
    return new Promise(resolve => {
      this.kittyInstance.approve(eaAddress, id, {from: account}, (err, res) => {
        resolve(res);
      })
    })
  }
  

  // timeOutPromise = (ms) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, ms);
  //   })
  // }

  async waitForConfirm(txHash) {
    console.log('waiting for '+txHash+' to be confirmed...')
    let receipt = await this.ethjs.getTransactionReceipt(txHash)

    if(receipt == null) {
      await this.timeout(1000)
      await this.waitForConfirm(txHash)
    } else {
      return('found '+txHash)
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async sendKitty(account, id) {
    return new Promise(resolve => {
      console.log(id)
      this.eaInstance.portalKitty(id, {from: account}, (err, res) => {
        console.log('transaction gets finalized')
        resolve(res)
      })
    })
  }
}

export default Api;




