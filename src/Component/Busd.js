import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { CONFIG } from './../config/config'
import busdAbi from './../config/busd.json'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { parseEther } from "viem";

const MySwal = withReactContent(Swal)

const Busd = ({fetch, rates, stage}) => {
    const [input, setInput] = useState('0');
    const [loading, setLoading] = useState(false)
    const [tokens, setTokens] = useState(0)

    const [debouncedAmount] = useDebounce(input, 200);
    const regexp = /^\d+(\.\d{1,18})?$/;

    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal()
    const isError = input === "" || !regexp.test(input);

    const handleInputChange = (e) => {
        setInput(e.target.value)
        let cal = parseFloat(e.target.value) / parseFloat(rates[stage])
        setTokens(isNaN(cal) ? 0 : cal)
    }

    const { config:approveConfig, refetch:prepareApprove } = usePrepareContractWrite({
        address: CONFIG.BUSD_ADDRESS,
        abi: busdAbi,
        functionName: 'approve',
        args: [CONFIG.PRESALE_CONTRACT_ADDRESS, regexp.test(debouncedAmount) ? parseEther(debouncedAmount) : parseEther('0')], 
        onError(err) {
            setLoading(false)
            // MySwal.fire({
            //     icon: "error",
            //     title: "Oops..!",
            //     text: err,
            // })
          console.log(err);
        }
    })

    const { config:purchaseConfig, refetch:preparePurchase } = usePrepareContractWrite({
        address: CONFIG.PRESALE_CONTRACT_ADDRESS,
        abi: [
            {
              name: 'buyTokensBUSD',
              type: 'function',
              stateMutability: 'nonpayable',
              inputs: [
                    {
                        "internalType": "address",
                        "name": "beneficiary",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
              ],
              outputs: [],
            },
        ],
        functionName: 'buyTokensBUSD',
        args: [address, regexp.test(debouncedAmount) ? parseEther(debouncedAmount) : parseEther('0')], 
        onError(err) {
            setLoading(false)
            // MySwal.fire({
            //     icon: "error",
            //     title: "Oops..!",
            //     text: err,
            // })
          console.log(err);
        }
    })

    const { data:approveData, writeAsync:approve } = useContractWrite(approveConfig)

    const { data:purcahseData, writeAsync:purchase } = useContractWrite(purchaseConfig)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: approveData?.hash,
        confirmations: 2,
        onSuccess(data) {
            setLoading(false)
            MySwal.fire({
                icon: "success",
                title: "Congrates!",
                text: "BUSD Approved successfully.",
            })
        }
    });

    const { isLoading:pLoading, pIsSuccess } = useWaitForTransaction({
        hash: purcahseData?.hash,
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

    const submitPurchaseTransaction = async () => {
        try {
            await preparePurchase()
            await purchase?.()
        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true)
            if (!isError) {
                if(isConnected) {
                    await prepareApprove();
                    await approve?.();
                } else {
                    open()
                }
            }
        } catch(e) {
            setLoading(false)
        }

    }


  return (
    <>
        <div className="stacking__approve-field mt-3">
            <div className="d-flex align-items-center justify-content-between">
                <label>Amount in BUSD</label>
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

        <div className="mt-3 d-flex align-items-center justify-content-between">
            <button disabled={loading || !approve} className="input-group-btn p-3 w-100 me-2" onClick={handleSubmit}>
                {
                    !isLoading && 'Approve'
                }
                {
                    isLoading && (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                }
            </button>

            <button disabled={loading} className="input-group-btn p-3 w-100 ms-2" onClick={submitPurchaseTransaction}>
                {
                    !pLoading && 'Buy $mart'
                }
                {
                    pLoading && (
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

export default Busd