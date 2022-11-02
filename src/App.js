//import logo from './logo.svg';
import './App.css';
import RoundToken from './artifacts/RoundToken.json' ;
import RoundTokenCrowedSale from './artifacts/RoundTokenCrowedSale.json';
import {DizzleProvider} from '@drizzle/react-plugin' ; 
import {LoadingContainer} from '@drizzle/react-components' ;



const drizzleOptions = {
  contracts: [
   RoundToken ,
   RoundTokenCrowedSale
  ], 
}

function App() {
  return (
    <DizzleProvider options={drizzleOptions}>
      <LoadingContainer>
        <div>
          <h1 className="text-3xl font-bond py-12 text-red-700 underline">
          Hello world tailwind! lets go.
          </h1>
        </div>
      </LoadingContainer>
    </DizzleProvider>

    
  
  );
}

export default App;
