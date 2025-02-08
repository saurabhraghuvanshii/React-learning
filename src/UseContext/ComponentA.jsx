import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

const ComponentA = () => {
	const [user, setUser] = useState("fuckkkk");
	return (
		<div>
			<h1>ComponentA</h1>
			<h2>{`Hello ${user}`}</h2>
			<userContext.Provider value={user}>
				<ComponentB user={user} />
			</userContext.Provider>
		</div>
	);
};

export default ComponentA;
