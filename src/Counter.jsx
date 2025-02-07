import { useState, useRef, useEffect } from "react";


const Counter = () => {
    const usePrev = (value) => {
        const ref = useRef();
        
        useEffect(() => {
          ref.current = value;
        }, [value]);
      
        return ref.current;
    };

	const [count, setCount] = useState(0);
    const prevCount = usePrev(count);
    
    const increment = () => {
        setCount(count +1 );
        //updater function safe updates based on the previous state
        setCount(c => c+1);
    }

    const decrement = () => {
        setCount( count -1 );
    }

    const reset = () => {
        setCount(0);
    }

    return <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCount}</p>
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
        <button onClick={reset}>reset</button>
    </div>;
};

export default Counter;
