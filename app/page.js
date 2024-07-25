import Image from "next/image";
import Hero from "./Hero/page";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import EmailSub from "./Components/Emailsub";
import Footer from "./Components/Footer";

export default function Home() {
	return (
		<div className="scroll-smooth">
			<Hero />
			<Services />
			<Testimonials />
			<EmailSub />
			<Footer />
		</div>
	);
}
