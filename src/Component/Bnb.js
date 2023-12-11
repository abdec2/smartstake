import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useAccount, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { CONFIG } from './../config/config'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { parseEther } from "viem";

const MySwal = withReactContent(Swal)

 

const Bnb = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false)
    const [debouncedAmount] = useDebounce(input, 500);
    const regexp = /^\d+(\.\d{1,18})?$/;

    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal()
    const isError = input === "" || !regexp.test(input);

    const handleInputChange = (e) => setInput(e.target.value)

    const { config, refetch } = usePrepareSendTransaction({
        to: CONFIG.PRESALE_CONTRACT_ADDRESS,
        value: regexp.test(debouncedAmount) ? parseEther(debouncedAmount) : undefined,
        onError(err) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Oops..!",
                text: err,
            })
          console.log(err);
        },
        enabled: false
    });

    const { data, sendTransactionAsync } = useSendTransaction(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(data) {
            setLoading(false)
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

export default Bnb