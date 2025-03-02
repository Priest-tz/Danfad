import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import PoweredByFooter from "@/components/danfadsticker";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "A-EGC",
	description:
		"Dynamic consulting company specializing in project management and professional development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={figtree.className}>
				<Navbar />
				{children}
				<PoweredByFooter />
			</body>
		</html>
	);
}
