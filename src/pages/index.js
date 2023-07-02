import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<>
			<main className="relative">
				<Hero />
				<Services />
				<About />
				<Contact />
			</main>
		</>
	);
}
