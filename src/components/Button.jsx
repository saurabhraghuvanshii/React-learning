const Button = () => {
	// let count  = 0;
    
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     } else {
    //         console.log(`${name} stop clcik me`);
            
    //     }
    // };
    
	// return <>
    //     <button onClick={()=>handleClick("hhh")}>Click me</button>
    // </>

    const handleClick = (e) => e.target.textContent = "fuck";
    

    return <>
        <button onClick={(e) => handleClick(e)}>Click me</button>
    </>
};

export default Button;
