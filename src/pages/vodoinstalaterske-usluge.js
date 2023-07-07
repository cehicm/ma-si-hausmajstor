import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import heroImg from "../../public/images/hero-img.jpg";

export default function vodoinstalaterskeUsluge() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={heroImg}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] lg:h-[600px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Vodoinstalaterske usluge u Beogradu"
					text="Potrebno Vam je da očištite nameštaj, a ne želite da rizikujete oštećenja? Desila se nezgoda koju želite da uklonite iz nameštaja?"
				/>
			</div>

			<div className="py-6 px-10">
				<div className="max-w-3xl mx-auto">
					<p>
						Želite da nameštaju vratite originalni sjaj, i da izgleda novo i
						nakon više godina korišćenja?
						<span className="block font-semibold">
							Ozon tepih servis Kruševac je tu za Vas!
						</span>
					</p>
				</div>

				<div className="bg-blue-200 my-7 lg:max-w-3xl mx-auto">
					<h3 className="p-4 text-3xl">
						Pozovite nas i zakažite na
						<span>
							<Link className="hover:underline" href="tel:+381607225558">
								{" "}
								060/722-5558
							</Link>
						</span>
					</h3>
				</div>

				<div className="max-w-3xl mx-auto">
					<h2 className="text-xl pt-2 pb-3">Ova usluga se sastoji od:</h2>
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

			<div className="grid gap-4 md:grid-cols-2 mt-5"></div>
		</section>
	);
}
