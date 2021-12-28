import WalletCard from './WalletCard'
import Input from './Input'
import './App.css';

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
