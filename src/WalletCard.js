import React, {useState} from 'react'
import {ethers} from 'ethers'

const WalletCard = () => {

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect to MetaMask');

	const connectWalletHandler = () => {
        // this checks to see if an 'ethereum' property is in the browser AND THEN checks to see if it belongs to Metamask
		if (window.ethereum && window.ethereum.isMetaMask) {
            //This is us requesting to connect to the account of the user
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
                //grabs the first item in the array that comes back (it's the only one we care about). This contains the account and the 
                // balance of the user, but we have to pass it into a function to 1) set it to the 'current account' and 2) convert it
                // to a string
				console.log(result[0])
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
                
                //this function uses the same account input from "results" to do some computation down below
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

    	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		// this uses a new request using the account to the get balance
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

   return (
		<div className='walletCard'>
		<h4> {"Connect! to User's MetaMask account"} </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>User's Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Current Balance: {userBalance}</h3>
			</div>
			{errorMessage}
		</div>
	);
    
}

export default WalletCard