import HeroPage from "./Hero";
import Navbar from "./Navbar";
import Banner from "../../public/Assets/project_mngmt.jpg";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "../Components/Footer";
import EmailSub from "../Components/Emailsub";

export default function Hero() {
	return (
		<div className="scroll-smooth">
			<div
				className="relative h-screen bg-cover bg-center overflow-hidden select-none"
				style={{
					backgroundImage: `url(${Banner.src})`,
				}}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10">
					<Navbar />
					<HeroPage />
				</div>
			</div>
			<Services />
			<Testimonials />
			<EmailSub />
			<Footer />
		</div>
	);
}
