import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
	const [user, setUser] = useState("fuckkkk");
    return (
		<div>
			<h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
			<ComponentB user={user} />
		</div>
	);
};

export default ComponentA;
