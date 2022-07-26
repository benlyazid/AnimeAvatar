import { lazy, Suspense } from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes
} from "react-router-dom";
import Home from "../pages/Home";

const Docs = lazy(() => import("../pages/Docs"));

const MyRoutes: React.FC = () => {
	return (
			<Router>
				<Suspense fallback={<div className="second-clr" style={{ textAlign: "center", marginTop: "1rem" }}>Loading...</div>}>
					<Routes>
						<Route path="/docs" element={<Docs />} />
						<Route path="/" element={<Home />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</Suspense>
			</Router>
	);
};

export default MyRoutes;