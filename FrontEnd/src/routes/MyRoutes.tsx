import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes
} from "react-router-dom";
import Home from "../pages/Home";

const MyRoutes: React.FC = () => {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<Home />}>
					</Route>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Router>
	);
};

export default MyRoutes;