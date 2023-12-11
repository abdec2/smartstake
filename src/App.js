
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
import Presale from "./Presale";

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'

import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { bscTestnet } from 'viem/chains'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { InjectedConnector } from 'wagmi/connectors/injected'




// 1. Get projectId
const projectId = 'd631e72662e5cb28e0026c4277e0e630'

const { chains, publicClient } = configureChains(
  [bscTestnet],
  [walletConnectProvider({projectId}), publicProvider()]
)
const metadata = {
  name: 'Smart Staking'
  
}

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),

  ],

  publicClient
})

createWeb3Modal({ wagmiConfig, projectId, chains })


function App() {

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
        <Route path="presale" element={<Presale />}/>
        
        <Route path="BuyToken" element={<BuyToken/>}/>
        <Route path="KnowledgeBase" element={<KnowledgeBase/>}/>
        
        
      </Routes>
      <FooterSection/>
      
    </div>
    </WagmiConfig>
  );
}

export default App;
