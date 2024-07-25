import Hero from "./hero/page";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Emailsub from "../components/emailsub";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div className="scroll-smooth">
			<Hero />
			<Services />
			<Testimonials />
			<Emailsub />
			<Footer />
		</div>
	);
}
