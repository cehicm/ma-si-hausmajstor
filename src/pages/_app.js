import "@/styles/globals.css";

import Head from "next/head";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta
					name="description"
					content="MA-SI hausmajstor je posvećen pružanju vrhunskih usluga za popravke, održavanje i unapređenje domova. Kao i električarke usluge, moleraj, krečenje, vodoinstalaterske usluge i drugo. Sa stručnom ekipom iskusnih majstora, garantujemo kvalitet. Kontaktirajte nas danas i prepustite nam brigu o Vašem domu."
					key="desc"
				/>
			</Head>
			<Header />
			<main className={`${inter.className} bg-slate-50`}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
