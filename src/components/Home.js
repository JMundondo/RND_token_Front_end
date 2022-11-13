import React from "react" ;
// import RoundToken from '../artifacts/RoundToken.json' ;
// import RoundTokenCrowdSale from '../artifacts/RoundTokenCrowdSale.json';
 import { DrizzleContext } from '@drizzle/react-plugin';
 import { Drizzle } from "@drizzle/store";
 import { newContextComponents } from "@drizzle/react-components";

 const { AccountData , ContractData ,ContractForm } = newContextComponents;




// const drizzleOptions = {
//   contracts: [
//    RoundToken ,
//   RoundTokenCrowdSale
//   ], 
// }
// const drizzle = new Drizzle(drizzleOptions);


class Home extends React.Component {
    constructor(props) {
        super(props);
       
      }
    render() {
        return (

    <div className="bg-slate-800 min-h-screen">        
    <div class="p-12  grid grid-cols-2 gap-4 items-center z-10">
            <div className="max-w-lg text-center sm:text-left">
              <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
                ROUND:
              
                A Blockchain based reward system
              
              </h2>
      
              <p class="mt-4 text-gray-300">
               welcome to the RND token pre-sale
              </p>
              <div class="flex flex-row  items-center space-x-3 mt-5">
              
                </div>
            </div>
            <div className="max-w-lg text-center sm:text-left">
             
              </div>
           
              
              </div>
              
            <div className="py-2 px-2 grid grid-cols-2 gap-4 ">
   
     
           
              
  
              <div className="bg-white p-8 rounded-xl shadow-lg shadow-neutral-200">
                
                            <div className="flex justify-between mb-4">
                                    <div>
                                        <p className="text-lg font-semibold text-neutral-700">Your login wallet</p>
                                        <p className="mt-0.5  text-neutral-400 text-sm">Your balance</p>
                                    </div>
                                            <div className="text-right">
                                                        <p className="text-lg font-semibold text-neutral-700"> <AccountData 
                                                drizzle={this.props.drizzle}
                                                drizzleState={this.props.drizzleState}
                                                accountIndex={0}
                                                units="ether"
                                                precision={3}/>
                                                        </p>
                                                
                                            </div>
                            </div>
                        
                            <span className="text-orange-500   px-3 text-sm py-1.5 bg-red-50 rounded-lg font-semibold">RoundToken</span>
            
            
                            <div className="flex items-center justify-between mt-5">
                                <div className="flex items-center">
                                    
                                    <span className="text-neutral-400 text-sm">Round Token Symbol</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-neutral-400 text-sm"><ContractData
                                            drizzle={this.props.drizzle}
                                            drizzleState={this.props.drizzleState}
                                            contract="RoundToken"
                                            method="symbol"
                                            />
                                        </span>
                                </div>
            
                            </div>
            
                            
                            <div className="mt-5 border-t border-dashed space-y-4 py-4">
                            
                                <div className="flex justify-between group duration-150 cursor-pointer">
                                    <div>
                                        <p className="text-lg text-neutral-600 group-hover:text-red-600 duration-150">Round Total Supply</p>
                                        <p className="text-sm text-neutral-400" >Round Token has a Fixed Supply</p>
                                    </div>
                                    <span className="text-lg text-neutral-600">  <ContractData
                                        drizzle={this.props.drizzle}
                                        drizzleState={this.props.drizzleState}
                                        contract="RoundToken"
                                        method="totalSupply"
                                        />
                                          </span>
                                </div>
            
                                
                                <div className="flex justify-between group duration-150 cursor-pointer">
                                    <div>
                                        <p className="text-lg text-neutral-600 group-hover:text-red-600 duration-150"></p>
                                        <p className="text-sm text-neutral-400" ></p>
                                    </div>
                                    <span className="text-lg text-neutral-600"></span>
                                </div>
            
            
                            </div>
                            <div className="text-center cursor-pointer duration-150 hover:bg-neutral-200 py-0.5 bg-neutral-100 text-neutral-400 font-semibold rounded-lg mt-3">+1 more</div>
                        </div>
            
                    
                
            
                
                
                
                        
            
                        <div className="bg-black p-8 rounded-xl shadow-xl shadow-neutral-900  ">
                            
                            <div className="flex justify-between mb-4">
                                        <div>
                                            <p className="text-lg font-semibold text-white">RND Crowd Sale</p>
                                            <p className="mt-0.5  text-neutral-500 text-sm">Rate RND to Wei</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold text-white"><ContractData
                                                        drizzle={this.props.drizzle}
                                                        drizzleState={this.props.drizzleState}
                                                        contract="RoundTokenCrowdSale"
                                                        method="rate"
                                                        />
                                            </p>
                                        <p className="mt-0.5  text-neutral-500 text-sm">2.10 USD</p>
                                        </div>
                            </div>
                            
                               <span className="text-orange-300   px-3 text-sm py-1.5 bg-red-900 rounded-lg font-semibold">Buy RND Tokens</span>
            
            
                            <div className="flex items-center justify-between mt-5">
                                <div className="flex items-center">
                                    <svg   className="h-5 w-5 stroke-gray-500 mr-2" fill="none"   viewBox="0 0 24 24" stroke="gray-400" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg> 
                                    <span className="text-neutral-500 text-sm"><ContractData
                                                drizzle={this.props.drizzle}
                                                drizzleState={this.props.drizzleState}
                                                contract="RoundTokenCrowdSale"
                                                method="token"
                                                />
                                </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-neutral-500 text-sm"> Opening Time
                                    <span>
                                    </span> 
                                    </span>
                                </div>
            
                            </div>
            
                            
                            <div className="mt-5 border-t border-dashed border-neutral-700 space-y-4 py-4">
                                
                                <div className="flex justify-between  group cursor-pointer">
                                    <div>
                                        <p className="text-lg text-neutral-400 group-hover:text-red-500 duration-150 ">Buy token with Wei</p>
                                        </div>
                                    <span className="text-lg text-neutral-400"></span>
                                </div>
            
                                
                                <div className="flex justify-between group  cursor-pointer">
                                    <div>
                                        <p className="text-lg text-neutral-400 group-hover:text-red-500 duration-150">Amount of Wei Raised</p>
                                        <p className="text-sm text-neutral-600" >44mm, cellular, space gray</p>
                                    </div>
                                    <span className="text-lg text-neutral-400">             
                                            <ContractData
                                            drizzle={this.props.drizzle}
                                            drizzleState={this.props.drizzleState}
                                            contract="RoundTokenCrowdSale"
                                            method="weiRaised"
                                            />
                                        </span>
                                </div>
            
            
                            </div>
                            <div className="cursor-pointer hover:bg-neutral-900 duration-150 text-center py-0.5 bg-neutral-800 text-neutral-500 font-semibold rounded-lg mt-3">+1 more</div>
                        </div>
            
                
                
            </div>

            </div>
 

  
                        

                
  
        )
        
        
      }

}                   

export default Home;