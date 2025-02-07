import { useState } from "react";

// const Mycomponent = () => {
//     const [name, setName] = useState("dsds");
//     const [age , setAge] = useState(0);

//     const updateName = () => {
//         setName("ssaa");
//         setAge(19)
//     }
// 	return <div>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <button onClick={updateName}>set name</button>
//     </div>;
// };

const Mycomponent = () => {
	const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handelQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange (event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    return <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handelQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction"/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option>select an option</option>
            <option value="Via">Visa</option>
            <option value="Mastercard">MasterCard</option>
        </select>
        <p>Payment: {payment}</p>
    </div>;
};

export default Mycomponent;
