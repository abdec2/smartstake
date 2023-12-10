
const Busd = () => {
  return (
    <>
        <div className="stacking__approve-field mt-3">
            <label>Amount in BUSD</label>
            <div className="input-group">
                <input type="text" className="form-control" aria-label="Approve Stack"
                    id="approve-stack" placeholder="0.00"/>
                
            </div>
        </div>

        <div className="stacking__approve-withdraw mt-3">
            <label>Tokens</label>
            <div className="input-group">
                <input disabled type="text" className="form-control" aria-label="Withdraw Stack"
                    id="withdraw-stack" placeholder="0.00"/>
            </div>
        </div>

        <div className="mt-3">
            <button className="input-group-btn p-3 w-100">Buy $mart</button>
        </div>
    </>
  )
}

export default Busd