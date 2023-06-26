import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "MA-SI hausmajstor",
	description:
		"Hausmajstor Beograd je tu za vas za sve hitne popravke, renovacije, električarske, gipskarske i molerske radove. Dostupni smo i za hitne intervencije na teritoriji Beograda. ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="srb">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
