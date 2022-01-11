import './App.css';
import React, {useEffect, useState} from 'react'
import { init , getOwnBalance, getStakes, addy, Contract} from './ERC20';
import {Popup, Button} from 'semantic-ui-react'
import {Popup as Popup2} from 'reactjs-popup' 



// you already know that literally all of the code possible is going to go in this doc
function App() {
	const [balance, setBalance] = useState(null);
  	const [stakes, setStakes] = useState(null);
  	const [address, setAddress] = useState(null);

	const [shares, setShares] = useState('')
	const [time, setTime] = useState('')
	const [receiver, setReceiver] = useState('0x2b591e99afe9f32eaa6214f7b7629768c40eeb39')
	const [premium, setPremium] = useState('')



useEffect(() => {
  init()
  fetchHexBalance()
  fetchStakes()
  fetchAddress()
  
}, [])


const startStake = () => {
	Contract(premium,receiver,address,shares,time)
		.then((contract) => {
			console.log(contract);
		})
		.catch((err) => {
			console.log(err);
		});
};

const fetchAddress = () => {
	addy()
		.then((address) => {
			setAddress(address);
		})
		.catch((err) => {
			console.log(err);
		});
};

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
		const handleSubmit = (e) => {
		  e.preventDefault();
		  console.log("SHARES",shares)
		  console.log("TIME", time)
		  console.log("RECEIVER", receiver)
		  console.log("ADDY", address)
		  console.log("PREm", premium)

	  
		}

		

		return <>
		<br/>
		<br/>
				<h4>
			Your hex balance is {balance}
		</h4>
		<h4>
			Your address is {address}
		</h4>
		<h4>
			Your number of stakes is {stakes}
		</h4>
		<article>
		  <form className='form' onSubmit={handleSubmit}>
		  <div className ='form-control'>
			<label>
			  Hearts  
			</label>
			<input 
			type = 'number'
			max={balance}
			min='0'
			id="Shares"
			name='Shares' 

			  value={shares}
			  onChange={(e) => setShares(e.target.value)}/>
			  <Popup trigger={<Button>Info</Button>} content={'Hearts to stake (must be less than '+balance+')'} hoverable position="right center"/>
		  </div>
		  <div className ='form-control'>
			<label>
			  Time : 
			</label>
			<input 
			type = 'number'
			max='5555'
			min='0'
			id="Time" 
			name='Time' 
			value={time}
			placeholder='1-5555 days'
			autoComplete='false'
			
			onChange={(e) => setTime(e.target.value)} />
			<Popup trigger={<Button>Info</Button>} content={"How long you want to stake your HEX"} hoverable position="right center"/>
		  </div>
		  <div className ='form-control'>
			<label>
			  Receiver: 
			</label>
			<input 
			type = 'text' 
			id="Receiver" 
			name='Receiver' 
			readOnly
			value={receiver}
			onChange={(e) => setReceiver(e.target.value)} />
			<Popup trigger={<Button>Info</Button>} content={"Contact to receive newly minted stake (Hex Contract Address) "} hoverable position="right center"/>
		  </div>
		  <div className ='form-control'>
			<label>
			  Address 
			</label>
			<input autoComplete='off' type="text" id="address" defaultValue={address} readOnly /> 
			<Button id='myButton' type="submit" value="ugh" onClick={function() {
			if (document.getElementById("address").hasAttribute("readOnly")) {
				document.getElementById("address").removeAttribute("readOnly");
				document.getElementById("myButton").innerText = "Save Address"}
			else {
				document.getElementById("address").readOnly = true;
				document.getElementById("myButton").innerText = "Edit Address"
			}
		}
		
		}>Edit Address</Button>
			<Popup trigger={<Button>Info</Button>} content={"The reinbursement address for the supplier"} hoverable position="right center"/>
		  </div>
		  <div className ='form-control'>
			<label>
			  Premium 
			</label>
			<input 
			type ='number'
			step='.1'
			max='99.9'
			min='0'
			placeholder='0.0%-99.9%'
			id="Premium" 
			name='Premium' 
			value={premium}
			onChange={(e) => setPremium(e.target.value)} />
			<Popup trigger={<Button>Info</Button>} content={"What percentage of the T-shares the recipient will keep as a premium"} hoverable position="right center"/>
		  </div>
		  
		 
		  <Popup2  trigger={ <button type="submit"> Start Stake </button>} position="bottom center">
			    <div className='container'> 
				<h3>Are you sure the following information is correct</h3>
				<div>
					Hearts :: {shares}
				</div>
				<div>
					Time :: {time}
				</div>
				<div>
					Receiver :: {receiver}
				</div>
				<div>
					Address :: {address}
				</div>
				<div>
					Premium :: {premium}
				</div>
				<button position= 'center' onClick={startStake}>Confirm Stake</button>
				</div>
			</Popup2>
		  </form>
		</article>

		</>
	  };


export default App;