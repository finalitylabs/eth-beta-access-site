import { Component } from 'react';
import EA from './contracts/ETHAccess.json';
import CK from './contracts/CKInterface.json';

const eaAddress = '0xe8931b96a36ea32efb0ff80da0571748295cb3ec'
const kittyAddress = '0x95ef2833688ee675dfc1350394619ae22b7667df'

class Api extends Component {
  constructor() {
      super()
      this.accessContract = window.web3.eth.contract(EA.abi)
      this.kittyContract = window.web3.eth.contract(CK.abi)
      this.eaInstance = this.accessContract.at(eaAddress)
      this.kittyInstance = this.kittyContract.at(kittyAddress)
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

  getPortalKittyCount() {
    return new Promise(resolve => {
      this.eaInstance.participants('0x1e8524370b7caf8dc62e3effbca04ccc8e493ffe',(err, res) => {
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
        return res.json();
      })
      .then(json => {
        resolve(json.image_url);
      })
    })
  }

  portalKitty(account, id) {
    return new Promise(resolve => {
      this.kittyInstance.approve({from: account, value: window.web3.toWei('0.1')}, (err, res) => {
        this.waitForConfirm(res)
        this.eaInstance.portalKitty({from: account}, (err, res) => {
          resolve(res)
        })
      })
    })
  }

  async waitForConfirm(txHash) {
    //console.log('waiting for '+txHash.transactionHash+' to be confirmed...')
    let receipt = await window.web3.eth.getTransactionReceipt(txHash.transactionHash)

    if(receipt == null) {
      await this.timeout(1000)
      await this.waitForConfirm(txHash)
    } else {
      return
    }
  }
}

export default Api;
