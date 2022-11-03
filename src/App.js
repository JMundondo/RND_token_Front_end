//import logo from './logo.svg';
import './App.css';
import RoundToken from './artifacts/RoundToken.json' ;
//import RoundTokenCrowedSale from './artifacts/RoundTokenCrowedSale.json';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from "@drizzle/store";



const drizzleOptions = {
  contracts: [
   RoundToken ,
  // RoundTokenCrowedSale
  ], 
}
const drizzle = new Drizzle(drizzleOptions);


function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
   
    <DrizzleContext.Consumer>
    {drizzleContext => {
      const {initialized} = drizzleContext;

      if(!initialized) {
        return "Loading..."
      }

      return (
         
          <div>
          <h1 className="text-3xl font-bond py-12 text-red-700 underline">
            Hello world tailwind! lets go.
          </h1>
        </div>
        )
      }}
  </DrizzleContext.Consumer>

</DrizzleContext.Provider>

   

    
  
  );
}

export default App;
