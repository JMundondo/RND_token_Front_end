import React from "react" ;


class WhitePaper extends React.Component {
    render() {
      return (
        <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">ROUND:</span> A Blockchain based reward system </h2>
                <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">1</span> .Introduction  </h3>
              <p className="mb-4 font-medium">The backing of cryptocurrencies was made popular through stablecoins which are backed by the US dollar, whose reserves are controlled and maintained by one central institute. There is an inherent weakness in trusting one central institute, which can create more coins than its reserves. Mismanagement of central reserves can lead to the crush of stablecoins. Problems like a run on the bank caused by a lack of confidence are hard to prevent. The lack of full audits of these institutes offering stable coins, thus the lack of transparency defies the core principle of cryptocurrencies and blockchain technology. The problems of directly mapping real-world goods and services to crypto currencies remain to be solved.
                   What is needed are ERC-721 tokens issued by businesses and institutes who individually back their insurance by guaranteeing to accept them back for their goods and services. The tokens can be issued not only as a unit of value but also as a unit of discount against goods and services. In this paper, we are proposing a way to decentralize currency issuance backed by their issuer`s goods and services. Round is a decentralized application on the polygon blockchain that will allow the easy minting of ERC-721 tokens by institutes and businesses. The Round token will be used to mint the ERC-721 tokens which will name rMoney
              </p>
               
                <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">2</span> .Tokenomics  </h3>
              <p className="mb-4 font-medium"> In this section of the paper we will be proposing the economics of the round token. Qualities to its distribution and production and much more. The shift from economics to Tokenomics allows developers to design a business model and an ecosystem by using tokens as a way to access the service. (1).
                                     The rMoney (ERC-721) tokens will be minted on the polygon blockchain when the Round token is stacked (locked in a smart contract) or burned. The unit value of each rMoney is fixed by the entity, who accept it back for their goods and services. To burn the Round token the user will send the token to a burn address. (2) .After the burn the user will be able to mint an ERC-721 token. The user can also mint the ERC-721 tokens by staking the Round token. Staking is the process of locking up crypto holdings in order to obtain rewards or earn interest.
                                     Utility
              </p>
              <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">1.1</span> .Utility </h3>
              <p className="mb-4 font-medium"> The utility of the Round token will be to mint the ERC-721 rMoney tokens for the institutions and businesses. The purpose of this token is to reward the developers and investors of the project. The token deflationary tools are burning and stacking of Round tokens to mint the ERC-721 rMoney. The rMoney will be used by businesses for reward programs backed by the goods and services they provide. Businesses and institutions can create blockchain-issued coupons.
              </p>
              <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">3</span> .Round Technology Stack </h3>
              <p className="mb-4 font-medium"> 
              
                    The round platform is decentralised application on the polygon zkEVM. Polygon zkEVM is a decentralized Ethereum Layer 2 scalability solution based on cryptographic proofs to provide validation and fast finality to transactions. The zk stands for zero knowledge proof , a zero-knowledge proof or zero-knowledge protocol is a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true while the prover avoids conveying any additional information apart from the fact that the statement is indeed true. The essence of zero-knowledge proofs is that it is trivial to prove that one possesses knowledge of certain information by simply revealing it; the challenge is to prove such possession without revealing the information itself or any additional information.
                    The EVM which is the Ethereum Virtual Machine is a piece of software that executes smart contracts. (3).
                    The platform business logic will be governed by a series of smart contracts executed by the zkEVM. Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met.
                    The software architecture is best virtualised with a simple diagram.


              </p>
              <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">4</span> .Proof of Reserves Process </h3>
              <p className="mb-4 font-medium"> 
                Businesses and institutes will be required to provide proof of reverses for the rMoney (ERC-721) they will be minting. Proof of Reserves (PoR) is a trusted way for users of crypto assets to verify that the balances they hold on exchanges are backed by real assets. . Behind the scenes, this process makes use of an advanced cryptographic accounting procedure based on the Merkle tree, which is a data structure designed specifically with privacy in mind. PoR will provide transparency to the central issuer of the rMoney reverses. (4). Consumers on the businesses and institutes reward system gain a powerful tool to audit digital asset reserves while the institutes gain the trust of their users and this helps in user retention. PoR is also in line with regulators ideology.
                The Merkle tree or binary hash tree is a data structure. Each leaf node of a Merkle tree is a hash of a block of data while a non-leaf node is a hash of its children. The use of hashes instead of the full file makes the Merkle tree an efficient means of data verification.
                During Proof of Reserves, the third-party auditor takes an anonymous snapshot of the balances and a Merkle root is obtained after passing the data through the Merkle tree. The Merkle root is used to establish the combination of the balances in the form of a cryptographic fingerprint. The root serves as a ‘commitment scheme’, meaning that the root of the tree is a commitment that reveals the leaf nodes to be part of the original commitment. 
                During Proof of Reserves (PoR), the auditors use this to verify the balances. A few selections of data are compared to the Merkle root. Even a small change to data affects the Merkle root and thus auditors are able to identify any tampering with the data. Another blockchain implementation have started doing on-chain and off-chain proof of reserves like chainlink which can be latter integrated into the project. 

              </p>

               
                <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold">5</span> .Conclusion </h3>
              <p className="mb-4 font-medium"> 
                     In this paper we proposed a way for institutes and businesses to issue rMoney tokens (ERC-721) , that are backed by their goods and services and a redeemable anytime. The rMoney can be used for businesses reward programs and as a currency backed by that institute. The Round platform will be built as a decentralised application on the zkEVM for scalability and to avoid high gas fees on the Ethereum blockchain. For greater transparency Proof of Reserves will implicated to the project to ensure that each rMoney ensued, will be backed by redeemable goods and services. 
              </p>

               
                <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"><span className="font-extrabold"></span> References </h3>
              <p className="mb-4 font-medium"> 
                    
                      1. Fren Tokenomics and blockchain tokens: A design-oriented morphological framework. Blockchain: . Freni, P., Ferro, E., & Moncada, R. s.l. : https://doi.org/10.1016/j.bcra.2022.100069, 2022.
                      2. Brian Nibley. Mean?, What Does Burning Crypto. s.l. : https://www.sofi.com/learn/content/what-is-coin-burning, 2022.
                      3. TOKENOMICS: DYNAMIC ADOPTION AND VALUATION. Lin William Cong, Ye Li,Neng Wang. May 2020, NBER WORKING PAPER SERIES, p. 67.
               </p>
                <p className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                    Learn more
                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </p>
            </div>
        </div>
      </div>
     )
    }
  }

  export default WhitePaper;
