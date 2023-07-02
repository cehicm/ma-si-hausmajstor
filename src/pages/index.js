import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
	return (
		<>
			<main className="relative">
				<Hero />
				<Services />
				<About />
			</main>
		</>
	);
}
