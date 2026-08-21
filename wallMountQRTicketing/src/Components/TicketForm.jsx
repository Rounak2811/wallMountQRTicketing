import Counter from "./Counter";

function TicketForm({ backButton }) {

    return (
        <>
            <div className="card ticketForm transparent-card">
                <div className="card-body">
                    <h5 className="card-title">QR Ticket</h5>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-start d-block fw-semibold fs-5">Source</label>
                        <input type="text" className="form-control w-5  p-2 " id="exampleFormControlInput1" readOnly required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label  text-start d-block fw-semibold fs-5">Destination</label>
                        <input type="text" className="form-control w-5  p-2 " id="exampleFormControlInput1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label  text-start d-block fw-semibold fs-5">Mobile Number</label>
                        <input type="number" className="form-control w-5  p-2 " id="exampleFormControlInput1" required />
                    </div>
                    <Counter />
                    <button className="btn btn-primary m-2">Make Payment</button>
                    <button className="btn btn-primary m-2 " onClick={backButton}>Back</button>
                </div>
            </div>
        </>
    )
}

export default TicketForm;