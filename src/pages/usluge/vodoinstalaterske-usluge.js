import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGalleryFour";
import CTA from "@/components/CTA";

import heroImg from "../../../public/images/vodoinstalaterske-hero.jpg";
import bahtroomVertical from "../../../public/images/bathroomvertical.jpg";
import bahtroomHorizontal from "../../../public/images/bathroomhorizontal.jpg";

import bathroomFullVertical from "../../../public/images/batroom-full-vertical.jpg";
import bathroomPipes from "../../../public/images/pipes-hero.jpg";

export default function vodoinstalaterskeUsluge() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={bathroomPipes}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Vodoinstalaterske usluge u Beogradu"
					text="Ukoliko su Vam potrebni električarski radovi u Beogradu, imate problema sa instalacijama, ili Vam je potrebna bilo kakva mala ili velika popravka — MA-SI Hausmajstor je mesto za vas."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						MA-SI Hausmajstor izvodi raznovrsne vodoinstalaterske usluge,
						uključujući:
					</p>

					<ul className="list-disc pl-6 pt-4">
						<li>Montaža i demontaža sanitarija</li>

						<li>Adaptacija kompletnog kupatila</li>

						<li>Podno grejanje, etažno grejanje, centralno grejanje</li>

						<li>Zamena vodovodne instalacija</li>

						<li>Detekcija i popravka slavina, ventila i virbli</li>

						<li>
							Odčepljenje kanalizacije, sudopere, WC šolje, vertikale, slivnika
						</li>
					</ul>
					<p className="block font-semibold mt-5">
						MA-SI hausmajstor Beograd je tu za Vas!
					</p>
				</div>

				<div className="bg-lightbrown text-white my-7">
					<h3 className="p-4 text-2xl lg:text-3xl px-10 py-8 text-center lg:max-w-3xl mx-auto">
						Pozovite nas i zakažite na{" "}
						<span className="block lg:inline">
							<Link className="underline" href="tel:+381607225558">
								060/722-5558
							</Link>
						</span>
					</h3>
				</div>

				<div className="max-w-3xl mx-auto px-10">
					<h2 className="text-xl pt-2 pb-5">
						Brza, efikasna i pouzdana usluga
					</h2>
					<div className="list-none">
						<ServicePageShortDesc
							pointTitle="MA-SI Hausmajstor Vam garantuje"
							pointBody="kvalitetne i brze vodoinstalaterske usluge na teritoriji Beograda. Takođe nudimo hitne intervencije i u mogućnosti smo da izađemo na teren i pomognemo vam u rešavanju bilo kog problema.

							MA-SI Hausmajstor, vodoinstalater u Beogradu, je ovlašćen servis koji će sve vaše muke sa vodovodom, kanalizacijom i sanitarijama rešiti i učiniti lakšim. 
							"
						/>
					</div>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
			<ServiceGallery
				imageOne={bahtroomHorizontal}
				imageTwo={heroImg}
				imageThree={bahtroomVertical}
				imageFour={bathroomFullVertical}
			/>
		</section>
	);
}
