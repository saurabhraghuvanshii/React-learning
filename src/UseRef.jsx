import { useRef } from "react";
import { useEffect } from "react";


const UseRef = () => {
    const inputRef = useRef(0);

    useEffect(()=> {
        console.log("componet renderd"); 
    })

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

	return <div>
        <button onClick={handleClick}>
            Click me
        </button>
        <input ref={inputRef}/>
    </div>;
};

export default UseRef;
