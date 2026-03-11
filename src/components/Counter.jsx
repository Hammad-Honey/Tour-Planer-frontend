import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, reset } from "../store/slices/counterSlice";
import { useState } from "react";

function Counter() {
    const [incrementAmount, setIncrementAmount] = useState(0);
    //Adding State to the Component
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        if (e.target.value >= 1) setIncrementAmount(Number(e.target.value))


    }
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <>
            <p>{count}</p>
            <div className="m-2">
                <input onChange={handleChange} style={{ backgroundColor: "white", color: "black" }} type="number" name="" id="" />
                <button className='border-2 border-solid divide-dashed divide-indigo-500'onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment by number</button>
            </div>

            <div className="m-2">
                <button className='border-2 border-solid divide-dashed divide-indigo-500  p-2' onClick={() => dispatch(increment())}>+</button>
                <button className='border-2 border-solid divide-dashed divide-indigo-500 p-2' onClick={() => dispatch(decrement())}>-</button>
                <button className='border-2 border-solid divide-dashed divide-indigo-500 p-2' onClick={resetAll}>Reset</button>
            </div>
        </>
    )
}

export default Counter