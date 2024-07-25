import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "Danfad",
	description:
		"Dynamic consulting company specializing in project management and professional development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
