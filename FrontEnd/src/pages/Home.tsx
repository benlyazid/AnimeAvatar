import Navbar from "../components/Navbar/Navbar";
import HomeBody from "../components/Home/HomeBody/HomeBody";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
	<>
		<Navbar />
		<HomeBody />
		<Footer />
	</>
  );
}

export default Home;