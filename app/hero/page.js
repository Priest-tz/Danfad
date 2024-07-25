import HeroPage from "./hero";
import Navbar from "../../components/navbar";
import Banner from "../../public/Assets/project_mngmt.jpg";

export default function Hero() {
	return (
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
	);
}
