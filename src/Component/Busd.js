import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { CONFIG } from './../config/config'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { parseEther } from "viem";

const MySwal = withReactContent(Swal)

const Busd = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false)
    const [debouncedAmount] = useDebounce(input, 500);
    const regexp = /^\d+(\.\d{1,18})?$/;

    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal()
    const isError = input === "" || !regexp.test(input);

    const handleInputChange = (e) => setInput(e.target.value)

    const { config:approveConfig, refetch:prepareApprove } = usePrepareContractWrite({
        enabled: false,
        address: CONFIG.BUSD_ADDRESS,
        abi: [
          {
            name: 'approve',
            type: 'function',
            stateMutability: 'nonpayable',
            inputs: [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            outputs: [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
          },
        ],
        functionName: 'approve',
        args: [CONFIG.PRESALE_CONTRACT_ADDRESS, regexp.test(debouncedAmount) ? parseEther(debouncedAmount) : undefined], 
        onError(err) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Oops..!",
                text: err,
            })
          console.log(err);
        }
    })

    const { config:purchaseConfig, refetch:preparePurchase } = usePrepareContractWrite({
        enabled: false,
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
        args: [address, regexp.test(debouncedAmount) ? parseEther(debouncedAmount) : undefined], 
        onError(err) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Oops..!",
                text: err,
            })
          console.log(err);
        }
    })

    const { data:approveData, writeAsync:approve } = useContractWrite(approveConfig)

    const { data:purcahseData, writeAsync:purchase } = useContractWrite(purchaseConfig)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: approveData?.hash,
        confirmations: 2,
        onSuccess(data) {
            submitPurchaseTransaction()
        }
    });

    const { isLoading:pLoading, pIsSuccess } = useWaitForTransaction({
        hash: purcahseData?.hash,
        onSuccess(data) {
            setLoading(false)
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
                    id="withdraw-stack" placeholder="0.00"/>
            </div>
        </div>

        <div className="mt-3">
            <button disabled={loading} className="input-group-btn p-3 w-100" onClick={handleSubmit}>
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

export default Busd