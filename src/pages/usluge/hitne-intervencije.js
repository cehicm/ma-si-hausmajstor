import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import CTA from "@/components/CTA";

import heroImg from "../../../public/images/electrical-gal1.jpg";

export default function vodoinstalaterskeUsluge() {
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
					title="Hitne intervencije u Beogradu"
					text="Problemi se uvek deševaju u najgore moguće vreme. Cev pukne u nedelju uveče, pločice se odlepe pred dolazak gosta. Mi razumemo da, kada god problem nastao, važno je da se sanira što pre je moguće. Zato nudimo uslugu hitne intervencije 24/7 na teritoriji Beograda."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>MA-SI Hausmajstor izvodi raznovrsne usluge, uključujući:</p>

					<ul className="list-disc pl-6 pt-4">
						<li>Vodoinstalaterske usluge</li>

						<li>Električarske usluge</li>

						<li>Hausmajstor</li>

						<li>Molerski radovi</li>

						<li>Renoviranje i adaptacija kupatila</li>
					</ul>
					<p className="block font-semibold mt-5">
						MA-SI hausmajstor Beograd je tu za Vas!
					</p>
				</div>

				<CTA text="BILO KADA, I BILO GDE &#8212; Vama smo na usluzi" />

				<div className="max-w-3xl mx-auto px-10">
					<h2 className="text-xl pt-2 pb-5">
						Brza, efikasna i pouzdana usluga
					</h2>
					<div className="list-none">
						<ServicePageShortDesc
							pointTitle="MA-SI Hausmajstor Vam garantuje"
							pointBody="Kvalitetna i brza usluga na teritoriji Beograda. Takođe nudimo hitne intervencije i u mogućnosti smo da izađemo na teren i pomognemo vam u rešavanju bilo kog problema.

							MA-SI Hausmajstor u Beogradu, je ovlašćen servis koji će sve vaše muke sa električnim instalacijama, vodovodom, kanalizacijom i sanitarijama rešiti i učiniti lakšim. 
							"
						/>
					</div>
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
			</div>
		</section>
	);
}
