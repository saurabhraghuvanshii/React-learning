import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const StopWatch = () => {
 
    const [ isRuning, SetIsRuning ] = useState(false);
    const [ elapsedTime, setElapsedTime ] = useState(0);
    
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        
        if(isRuning){
            intervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRuning]);

    function start() {
        SetIsRuning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        SetIsRuning(false);
    }

    function reset() {
        setElapsedTime(0);
        SetIsRuning(false);
    }

    function formatTime() {
 
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60 ));
        let min = Math.floor(elapsedTime / (1000 * 60 ) % 60 );
        let sec = Math.floor(elapsedTime / (1000) % 60 );
        let milisec = Math.floor((elapsedTime % 1000 ) / 10 );

        hours = String(hours).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        milisec = String(milisec).padStart(2, "0");

        return `${hours}:${min}:${sec}:${milisec}`;
    }

	return <div>
        <div>
           {formatTime()}
        </div>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>;
};

export default StopWatch;
