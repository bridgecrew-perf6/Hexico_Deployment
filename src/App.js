import WalletCard from './WalletCard'
import Web3 from 'web3';
import './App.css';
import React, {Component} from 'react'
import {ShareMinterAddress, ShareMinterABI, randomB, randomA} from './config'



// you already know that literally all of the code possible is going to go in this doc

class App extends Component {

  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const network =   await web3.eth.net.getNetworkType()
    console.log("network of this shit is:", network)
    const share_minter = new web3.eth.Contract(ShareMinterABI, ShareMinterAddress)
    // The address and ABI are being pulled in correctly, but it must not be finding the correct contracts cause they aren't right
    console.log("this is the new shit", share_minter)
  }

  constructor(props){
    super(props)
    this.state = {
      account: '',
      taskCount: 0
    }


  }
  
  render() { 
  return (
    <div className="App">
        <h1>
          Hello from the Hexico Development Team!
        </h1>
        <p> Task Count: {this.state.taskCount} </p>
        <p>
          Account: {this.state.a}
        </p>
        <WalletCard/>




    </div>
  
  );
  }
}

export default App;
