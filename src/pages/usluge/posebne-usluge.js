import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGallery";
import heroImg from "../../../public/images/hero-img.jpg";
import CTA from "@/components/CTA";

export default function posebneUsluge() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={heroImg}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Usluge po Vašoj meri i potrebi"
					text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
					aspernatur deleniti accusantium ad at animi sapiente voluptatibus
					labore, ratione tempora."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
						aspernatur deleniti accusantium ad at animi sapiente voluptatibus
						labore, ratione tempora.
					</p>
					<p className="block font-semibold mt-5">
						MA-SI hausmajstor Beograd je tu za Vas!
					</p>
				</div>

				<div className="bg-lightbrown text-white my-7">
					<h3 className="p-4 text-2xl lg:text-3xl px-10 py-8 text-center lg:max-w-3xl mx-auto">
						Pozovite nas i zakažite na{" "}
						<span>
							<Link className="underline" href="tel:+381607225558">
								060/722-5558
							</Link>
						</span>
					</h3>
				</div>

				<div className="max-w-3xl mx-auto px-10">
					<h2 className="text-xl pt-2 pb-5">Ova usluga se sastoji od:</h2>
					<ul
						id="cleaning-description"
						className="flex flex-col gap-5 list-disc"
					>
						<ServicePageShortDesc
							pointTitle="Zakazivanje termina"
							pointBody="pozovite nas kako bi smo se dogovorili oko termina koji Vama najviše odgovara. Ova usluga uglavnom podrazumeva izlasak na teren, ali u nekim okolnostima se može obaviti i u našem servisu."
						/>
						<ServicePageShortDesc
							pointTitle="Temeljno pranje"
							pointBody="detaljno ćemo oprati vaš nameštaj uz pomoć profesionalnih mašina za pranje, koje predstavljaju standard u industriji. Ovako ćemo se rešiti bilo kakvih fleka i mrlja, i osigurati generalnu čistoću i higijenu vašeg nameštaja."
						/>

						<ServicePageShortDesc
							pointTitle="Sušenje"
							pointBody="kako bi Vaš nameštaj zadržao svežinu, osušićemo ga uz pomoć profesionalnih mašina."
						/>
					</ul>
				</div>
			</div>

			<CTA />
			<ServiceGallery />
		</section>
	);
}
