import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(()=> {
        document.title = `Count: ${count} ${color}`

        return() => {
            //some clean up code 
        }
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c-1);
    }

    function changeColor() {
        setColor(c => c === 'green'? "red": "green")
    }

	return <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Chnage Color</button>
    </div>;
};

export default UseEffect;
