import { useContext } from "react";
import { userContext } from "./ComponentA";

const ComponentC = () => {
	const user = useContext(userContext);
	return (
		<div>
			<h1>ComponentC</h1>
			<h2>{`BYe ${user}`}</h2>
		</div>
	);
};

export default ComponentC;
