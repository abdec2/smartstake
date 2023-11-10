
import BlogPost from "./Component/BlogPost";
import Home from "./Home";
import HeaderComponent from "./Component/header";
import FooterSection from "./FooterSection";
import Contact from "./Component/Contact";
import { Routes, Route} from "react-router-dom"
import Team from "./Component/Team";
import Staking from "./Staking";
import BuyToken from "./Component/BuyToken";
import Bio from "./bio"
import  KnowledgeBase  from "./knowledgeBase";



import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'


import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

// 1. Get projectId





function App() {

  const projectId = '1242d9c1f7a1e32cc5fb0da6c6877f84'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
  
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata,autoConnect: true,
 
})

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })
   
 
  
  
  


  return (
    <WagmiConfig config={wagmiConfig}>
    <div className="App">
       {/* <div className="preloader">
        <div className="preloader__inner">
            <div className="preloader__icon">
                <span></span>
                <span></span>
            </div>
        </div>

        
      </div> */}
      <HeaderComponent/>
       
      <Routes>
      <Route path="/" element={<Home/>}/>
        
        <Route  path="BlogPost" element={<BlogPost/>}/>
        <Route path="Contact" element={<Contact/> }/>  
        <Route path="Team" element={<Team/>} />  
        <Route path="Staking" element={<Staking/>}/>
        <Route path="bio" element={<Bio/>}/>
        
        <Route path="BuyToken" element={<BuyToken/>}/>
        <Route path="KnowledgeBase" element={<KnowledgeBase/>}/>
        
        
      </Routes>
      <FooterSection/>
    </div>
    </WagmiConfig>
  );
}

export default App;
