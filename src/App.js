import WalletCard from './WalletCard'
import Input from './Input'
// eslint-disable-next-line
import Web3 from 'web3';
import './App.css';



// you already know that literally all of the code possible is going to go in this doc

function App() {
  return (
    <div className="App">
        <h1>
          Hello from the Hexico Development Team!

        </h1>
        <WalletCard/>
        <div1>
          Info about what the shareRatePremium is
        </div1>
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
