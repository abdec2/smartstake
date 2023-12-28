import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useAccount, useContractWrite, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { CONFIG } from './../config/config'
import routerAbi from './../config/router.json'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { formatEther, parseEther } from "viem";

import { useContractRead } from 'wagmi'
import { getPublicClient } from '@wagmi/core'




const MySwal = withReactContent(Swal)

 

const Bnb = ({fetch, rates, stage}) => {
    const publicClient = getPublicClient()
    const [input, setInput] = useState("0");
    const [tokens, setTokens] = useState(0)
    const [loading, setLoading] = useState(false)
    const [debouncedAmount] = useDebounce(input, 200);
    const regexp = /^\d+(\.\d{1,18})?$/;

    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal()
    const isError = input === "" || !regexp.test(input);

    // const { data: rdata, isError: rError, isLoading: rIsLoading, refetch: rRefetch } = useContractRead({
    //     address: CONFIG.ROUTER_ADDRESS,
    //     abi: routerAbi,
    //     functionName: 'getAmountsOut',
    //     args: [parseEther(input), [CONFIG.WBNB, CONFIG.BUSD_ADDRESS] ]
    // })

    const handleInputChange = async (e) => {
        try {
            setInput(e.target.value)
            if(parseFloat(e.target.value) > 0) {
                // await rRefetch()
                const data = await publicClient.readContract({
                    address: CONFIG.ROUTER_ADDRESS,
                    abi: routerAbi,
                    functionName: 'getAmountsOut',
                    args: [parseEther('1'), [CONFIG.WBNB, CONFIG.BUSD_ADDRESS] ] 
                  })
                  const bnbUSDValue = formatEther(data[1])
                  console.log(bnbUSDValue)
                const cal = (parseFloat(e.target.value) * parseFloat(bnbUSDValue)) / parseFloat(rates[stage])
                setTokens(isNaN(cal) ? 0 : cal)
            }
        } catch(e) {
            console.log(e)
            setTokens(0)
        }
    }

    const { config, refetch } = usePrepareSendTransaction({
        to: CONFIG.PRESALE_CONTRACT_ADDRESS,
        value: regexp.test(debouncedAmount) ? parseEther(debouncedAmount) : parseEther('0'),
        onError(err) {
            setLoading(false)
            // MySwal.fire({
            //     icon: "error",
            //     title: "Oops..!",
            //     text: err,
            // })
          console.log(err);
        }
    });

    const { data, sendTransactionAsync } = useSendTransaction(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(data) {
            setLoading(false)
            fetch()
            MySwal.fire({
                icon: "success",
                title: "Congrates!",
                text: "Token purchase successfully.",
            })
        }
    });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!isError) {
                if(isConnected) {
                    setLoading(true)
                    await refetch();
                    await sendTransactionAsync?.();
                } else {
                    open()
                }
            }
        } catch(e) {
            setLoading(false)
            console.log(e)
        }

    }


  return (
    <>
    
        <div className="stacking__approve-field mt-3">
            <div className="d-flex align-items-center justify-content-between">
                <label>Amount in BNB</label>
                {
                    isError && (
                        <span className="text-danger">Amount is Required</span>
                    )
                }
            </div>
            <input type="text" className="form-control" value={input} onChange={handleInputChange} placeholder="0.00"/>
            
        </div>

        <div className="stacking__approve-withdraw mt-3">
            <label>Tokens</label>
            <div className="input-group">
                <input disabled type="text" className="form-control" aria-label="Withdraw Stack"
                    id="withdraw-stack" placeholder="0.00" value={tokens}/>
            </div>
        </div>

        <div className="mt-3">
            <button disabled={loading || !sendTransactionAsync} className="input-group-btn p-3 w-100" onClick={handleSubmit}>
                {
                    !loading && 'Buy $mart'
                }
                {
                    loading && (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                }
            </button>
        </div>
    </>
  )
}

export default Bnb