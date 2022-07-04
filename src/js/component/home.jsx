import React from "react";
import Navbar from "./navbar.jsx";
import CardB from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<CardB />
			<Footer />
		</div>
				
		
	);
};

export default Home;
