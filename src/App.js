import './App.css';
import React, {useEffect, useState} from 'react'
import { init , getOwnBalance, getStakes} from './ERC20';



// you already know that literally all of the code possible is going to go in this doc
function App() {
  const [balance, setBalance] = useState(null);
  const [stakes, setStakes] = useState(null);



useEffect(() => {
  init()
  fetchHexBalance()
  fetchStakes()
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

	const fetchStakes = () => {
		getStakes()
		.then((stakes) => {
			setStakes(stakes);
		})
		.catch((err) => {
			console.log(err);
		})
	};

  

	return (
    
		<div className="App">
              <h1>
          Hello from the Hexico Development Team! Now deployed
        </h1>
			<h2>Your Stakes are {stakes} </h2>
			{/* <button onClick={() => fetchHexBalance()}>Refresh balance</button> */}
      <h3>Shares to stake (Your Hex balance is {balance} HEX) <br/>Shares: <input autocomplete="off" type="text" id="myText" placeholder="Shares to Stake"/></h3>
	<p> Description: The contract to receive the newly minter shares <br/> Receiver: <input autocomplete="off" type="text" id="myText" placeholder="Receiver Address"/></p>
	<p> Description: The reimbursement address for the supplies <br/> Supplier: <input autocomplete="off" type="text" id="myText" placeholder="Supplier Address"/></p>
	<p> Description: How long the recipient wants to stake HEX for <br/> Time: <input autocomplete="off" type="text" id="myText" placeholder="Length of Stake (in Days)"/></p>
    <p> Description: What percentage of the T-Shares the recipient will keep as a premium<br/> Premium: <input autocomplete="off" type="text" id="myText" placeholder="0-99.9%"/> </p>
    <button type="button">Stake</button>
    <p id="demo"></p>
		</div>
	);
}

export default App;