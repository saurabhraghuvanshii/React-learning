import { useState } from "react";

const Mycomponent = () => {
    const [name, setName] = useState("dsds");
    const [age , setAge] = useState(0);

    const updateName = () => {
        setName("ssaa");
        setAge(19)
    }
	return <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={updateName}>set name</button>
    </div>;
};

export default Mycomponent;
