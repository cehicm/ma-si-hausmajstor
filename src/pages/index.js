import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<>
			<main className="relative">
				<Hero />
				<Services />
				<About />
				<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
				<Contact />
			</main>
		</>
	);
}
