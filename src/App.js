import WalletCard from './WalletCard'
import Web3 from 'web3';
import './App.css';
import React, {useEffect, useState, Component} from 'react'
import {ShareMinterAddress, ShareMinterContract} from './config'
import { ShareMinterABI } from './config';
import { init , getOwnBalance} from './ERC20';



// you already know that literally all of the code possible is going to go in this doc
function App() {
  const [balance, setBalance] = useState(null);



useEffect(() => {
  init()
  fetchHexBalance()
}, [])

	const fetchHexBalance = () => {
		getOwnBalance()
			.then((balance) => {
				setBalance(balance/100000000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

  

	return (
    
		<div className="App">
              <h1>
          Hello from the Hexico Development Team!
        </h1>
			<h2>Your Hex balance is :: {balance}</h2>
			{/* <button onClick={() => fetchHexBalance()}>Refresh balance</button> */}
      <p>    Description <br/>Shares: <input type="text" id="myText"/></p>
    <p> Description <br/> Time: <input type="text" id="myText"/></p>
    <p> Description<br/> Premium: <input type="text" id="myText"/> </p>
    <button type="button">Stake</button>
    <p id="demo"></p>
		</div>
	);
}

export default App;