import { useState } from "react"

const Counter : React.FC = () => {

    const [count , setCount ] = useState<number>(0);

    const increment = () => setCount(count => count +1);
    const decrement  = () => setCount(count >1 ?count => count - 1 : count);

    return(
        <div>
        <h2> Counter : {count}</h2>
        <button onClick={increment} style={{ marginRight: '20px' }} >Increase</button>
        <button onClick={decrement} style={{ marginLeft: '20px' }}>Decrease</button>
        </div>
    );
};

export default Counter;