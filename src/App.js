import WalletCard from './WalletCard'
import Input from './Input'
import Web3 from 'web3';
import './App.css';


const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

// you already know that literally all of the code possible is going to go in this doc

function App() {
  return (
    <div className="App">
        <h1>
          Hello from the Hexico Development Team!
        </h1>
        <WalletCard/>
        <div>
          shareRatePremium
        </div>
        <Input/>
        <div>
          stakedHearts
        </div>
        <Input/>
        <div>
          stakedDays
        </div>
        <Input/>


    </div>
  );
}

export default App;
