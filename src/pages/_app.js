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
					content="Profesionalno pranje tepiha Krusevca. Pranje namestaja, pranje mebla u Krusevcu. Povoljno pranje tepiha u Krusevcu. Ozon tepih servis Krusevac"
					key="desc"
				/>
			</Head>
			<Header />
			<main className={inter.className}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
