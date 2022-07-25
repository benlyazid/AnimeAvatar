import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes
} from "react-router-dom";
import Docs from "../pages/Docs";
import Home from "../pages/Home";

const MyRoutes: React.FC = () => {
	return (
			<Router>
				<Routes>
					<Route path="/docs" element={<Docs />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Router>
	);
};

export default MyRoutes;