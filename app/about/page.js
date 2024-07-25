import EmailSub from "../../components/emailsub";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Profile from "./profile";

export default function About() {
	return (
		<div>
			<Navbar linkColor="text-black" bgColor="bg-slate-100" />
			<Profile />
			<EmailSub />
			<Footer />
		</div>
	);
}
