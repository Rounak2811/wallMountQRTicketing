import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="d-flex justify-content-evenly">
            <div>
                <h4>Passenger(s)</h4>
                <span className="bg-primary-subtle p-2 rounded-pill fw-bold fs-4">{count}</span>
                <div/>
                <button onClick={decrement} className="rounded-pill m-1">- </button>
                <button onClick={reset} className="rounded-pill m-2">Reset</button>
                <button onClick={increment} className="rounded-pill m-1">+</button>
            </div>
            <div>
                <h4>Fare</h4>
                <span className="bg-primary-subtle rounded-pill p-2 fw-bold fs-4">₹ 30</span>
            </div>
        </div>
    );
}
export default Counter;