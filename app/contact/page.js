import Emailsub from "@/components/emailsub";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ContactPage from "./contact";

export default function Contact() {
	return (
		<div>
			<Navbar linkColor="text-black" bgColor="bg-slate-100" />
			<ContactPage />
			<Emailsub />
			<Footer />
		</div>
	);
}
