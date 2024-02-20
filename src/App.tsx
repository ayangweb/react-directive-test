import { useState } from "react";
import { Button } from "antd";

const App = () => {
	const [visible] = useState(false);

	return (
		<div>
			<Button v-if={visible}>App</Button>
		</div>
	);
};

export default App;
